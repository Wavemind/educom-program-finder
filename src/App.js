/**
 * The external imports
 */
import { useState, useMemo, useCallback, useEffect } from 'react'
import {
  Heading,
  VStack,
  Box,
  Text,
  SimpleGrid,
  Button,
  CircularProgress,
} from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'

/**
 * The internal imports
 */
import {
  AdultForm,
  JuniorForm,
  Campus,
  TripSelection,
  DetailsForm,
} from './components'
import { useLazyGetCampusesQuery } from './lib/services/modules/campus'
import { validationTranslations } from './lib/utils/validationTranslations'
import { STEPS } from './lib/config/constants'

const App = () => {
  const { t } = useTranslation()
  const [step, setStep] = useState(STEPS.tripSelection)
  const [selectedForm, setSelectedForm] = useState(STEPS.juniorForm)
  const [loading, setLoading] = useState(false)

  const [
    getCampuses,
    { data: campuses = [], isSuccess, isError, error, isFetching },
  ] = useLazyGetCampusesQuery()

  /**
   * Callback to submit the adult of junior forms
   */
  const submitForm = useCallback(data => {
    setLoading(true)
    getCampuses(data)
  })

  useEffect(() => {
    validationTranslations(t)
  }, [t])

  /**
   * Removes the loading state when response is received from the api
   */
  useEffect(() => {
    if ((isSuccess && !isFetching) || isError) {
      setLoading(false)
    }
  }, [isSuccess, isFetching, isError])

  /**
   * Renders component based on selected step
   */
  const render = useMemo(() => {
    if (step === STEPS.tripSelection) {
      return (
        <TripSelection setStep={setStep} setSelectedForm={setSelectedForm} />
      )
    } else if (step === STEPS.juniorForm) {
      return <JuniorForm submitForm={submitForm} setStep={setStep} />
    } else if (step === STEPS.adultForm) {
      return <AdultForm submitForm={submitForm} setStep={setStep} />
    } else if (step === STEPS.detailsForm) {
      return (
        <DetailsForm
          setStep={setStep}
          selectedForm={selectedForm}
          campuses={campuses}
        />
      )
    }
  }, [step])

  /**
   * Renders the results component based on the response received from the api
   */
  const renderResults = useMemo(() => {
    if (loading) {
      return <CircularProgress isIndeterminate color='secondary' />
    } else if (isError) {
      return (
        <Box w='full'>
          <Text fontSize='md' color='error'>
            {typeof error.message === 'string'
              ? error.message.split(':')[0]
              : error.data.errors.join()}
          </Text>
        </Box>
      )
    } else if (campuses.length > 0) {
      return (
        <VStack spacing={8}>
          <SimpleGrid columns={3} spacing={14}>
            {campuses.map((campus, index) => (
              <Campus key={`campus_${index}`} campus={campus} />
            ))}
          </SimpleGrid>
          <Text color='white' fontSize='md'>
            {t('results.requestDetails')}
          </Text>
          <Button onClick={() => setStep('detailsForm')}>
            {t('results.requestDetailsButton')}
          </Button>
        </VStack>
      )
    }
    return <Text color='white'>{t('results.noResults')}</Text>
  }, [loading, campuses, isError])

  return (
    <Box w='full' bg='background' py={10} px={96}>
      <VStack spacing={8} w='full' mb={10}>
        <Heading variant='h1'>{t(`${step}.header`)}</Heading>
        <Heading variant='h2' w='50%' textAlign='center'>
          {t(`${step}.subheader`)}
        </Heading>
      </VStack>
      {render}
      {![STEPS.tripSelection, STEPS.detailsForm].includes(step) && (
        <VStack w='full' spacing={8} mt={10}>
          <Heading variant='h1'>{t('results.header')}</Heading>
          {renderResults}
        </VStack>
      )}
    </Box>
  )
}

export default App
