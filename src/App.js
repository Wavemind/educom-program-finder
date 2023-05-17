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
import { useTranslation, Trans } from 'react-i18next'

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
  const { t, i18n } = useTranslation()
  const [step, setStep] = useState(STEPS.tripSelection)
  const [searchData, setSearchData] = useState({})
  const [selectedForm, setSelectedForm] = useState(STEPS.juniorForm)
  const [loading, setLoading] = useState(false)

  const langInput = document.getElementById('lang')
  const langValue = langInput?.dataset?.lang === 'fr' ? 'fr' : 'en'

  if (i18n.language !== langValue) {
    i18n.changeLanguage(langValue)
  }

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
      return (
        <JuniorForm
          submitForm={submitForm}
          setStep={setStep}
          setSearchData={setSearchData}
        />
      )
    } else if (step === STEPS.adultForm) {
      return (
        <AdultForm
          submitForm={submitForm}
          setStep={setStep}
          setSearchData={setSearchData}
        />
      )
    } else if (step === STEPS.detailsForm) {
      return (
        <DetailsForm
          setStep={setStep}
          selectedForm={selectedForm}
          searchData={searchData}
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
          <Text fontSize='md' color='error' textAlign='center'>
            {typeof error.message === 'string'
              ? error.message.split(':')[0]
              : error.data.errors.join()}
          </Text>
        </Box>
      )
    } else if (campuses.length > 0) {
      return (
        <VStack spacing={8}>
          <SimpleGrid columns={{ base: 1, xl: 3 }} spacing={14}>
            {campuses.map((campus, index) => (
              <Campus key={`campus_${index}`} campus={campus} />
            ))}
          </SimpleGrid>
          <Button onClick={() => setStep('detailsForm')}>
            {t('results.requestDetailsButton')}
          </Button>
        </VStack>
      )
    }
    return (
      <Text color='white' textAlign='center'>
        {t('results.noResults')}
      </Text>
    )
  }, [loading, campuses, isError])

  return (
    <Box w='full' bg='background' py={10} px={{ base: 6, xl: 36, '2xl': 60 }}>
      <VStack spacing={8} w='full' mb={10}>
        <Heading variant='h1' textAlign='center'>
          {t(`${step}.header`)}
        </Heading>
        <Heading variant='h2' textAlign='center'>
          <Trans i18nKey={`${step}.subheader`} />
        </Heading>
      </VStack>
      {render}
      {![STEPS.tripSelection, STEPS.detailsForm].includes(step) && (
        <VStack w='full' spacing={8} mt={10}>
          {campuses.length > 0 && (
            <Heading variant='h1' textAlign='center'>
              {t('results.header')}
            </Heading>
          )}
          {renderResults}
        </VStack>
      )}
    </Box>
  )
}

export default App
