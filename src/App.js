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
  CircularProgress,
} from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'

/**
 * The internal imports
 */
import { AdultForm, JuniorForm, Campus, TripSelection } from './components'
import { useLazyGetCampusesQuery } from './lib/services/modules/campus'

const App = () => {
  const { t } = useTranslation()
  const [step, setStep] = useState('tripSelection')
  const [loading, setLoading] = useState(false)

  const [
    getCampuses,
    { data: campuses = [], isSuccess, isError, error, status },
  ] = useLazyGetCampusesQuery()

  const submitForm = useCallback(() => {
    setLoading(true)
    getCampuses()
  })

  /**
   * Removes the loading state when response is received from the api
   */
  useEffect(() => {
    if ((isSuccess && status === 'fulfilled') || isError) {
      setLoading(false)
    }
  }, [isSuccess, status, isError])

  /**
   * Renders component based on selected step
   */
  const render = useMemo(() => {
    if (step === 'tripSelection') {
      return <TripSelection setStep={setStep} />
    } else if (step === 'juniorForm') {
      return <JuniorForm submitForm={submitForm} />
    } else if (step === 'adultForm') {
      return <AdultForm submitForm={submitForm} />
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
        <SimpleGrid columns={3} spacing={14}>
          {campuses.map((campus, index) => (
            <Campus key={`campus_${index}`} campus={campus} />
          ))}
        </SimpleGrid>
      )
    }
    return <Text color='white'>{t('results.noResults')}</Text>
  }, [loading, campuses, isError])

  return (
    <Box w='full' bg='background' py={10} px={96}>
      <VStack spacing={8} w='full' mb={10}>
        <Heading variant='h1'>{t(`${step}.header`)}</Heading>
        <Heading variant='h2'>{t(`${step}.subheader`)}</Heading>
      </VStack>
      {render}
      {step !== 'tripSelection' && (
        <VStack w='full' spacing={8} mt={10}>
          <Heading variant='h1'>{t('results.header')}</Heading>
          {renderResults}
        </VStack>
      )}
    </Box>
  )
}

export default App
