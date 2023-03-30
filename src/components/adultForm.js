/**
 * The external imports
 */
import { useMemo } from 'react'
import { HStack, VStack, Button, SimpleGrid, Show } from '@chakra-ui/react'
import { FormProvider, useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'

/**
 * The internal imports
 */
import { Select, FormError } from './'
import { LANGUAGES, STEPS } from '../lib/config/constants'
import transformFormData from '../lib/utils/transformFormData'
import {
  useGetCountriesQuery,
  useGetExamsQuery,
} from '../lib/services/modules/formData'

const AdultForm = ({ submitForm, setStep }) => {
  const methods = useForm()
  const {
    t,
    i18n: { language },
  } = useTranslation()

  const {
    data: countries,
    isSuccess: isGetCountriesSuccess,
    isError: isGetCountriesError,
    error: getCountriesError,
  } = useGetCountriesQuery('adult')

  const {
    data: exams,
    isSuccess: isGetExamsSuccess,
    isError: isGetExamsError,
    error: getExamsError,
  } = useGetExamsQuery('adult')

  /**
   * Formats the countries obtained from the api
   */
  const formattedCountries = useMemo(() => {
    if (isGetCountriesSuccess) {
      return countries.map(country => ({
        value: country.id,
        label: country.name,
      }))
    }
    return []
  }, [isGetCountriesSuccess])

  /**
   * Formats the exams obtained from the api
   */
  const formattedExams = useMemo(() => {
    if (isGetExamsSuccess) {
      return exams.map(exam => ({
        value: exam.id,
        label: exam.nameTranslations[language],
      }))
    }
    return []
  }, [isGetExamsSuccess, language])

  /**
   * Handles the back action and shows the trip selection component
   */
  const goBack = () => {
    setStep(STEPS.tripSelection)
  }

  /**
   * Submits the form with the transformed from data
   */
  const onSubmit = data => {
    submitForm(transformFormData(data))
  }

  /**
   * Sets the error object to display in the FormError component
   */
  const error = useMemo(() => {
    if (isGetCountriesError) {
      return getCountriesError
    } else if (isGetExamsError) {
      return getExamsError
    } else {
      return null
    }
  }, [isGetCountriesError, isGetExamsError])

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <VStack spacing={10} w='full' display='inline-block'>
          <SimpleGrid columns={{ base: 1, xl: 3 }} gap={10}>
            <Select
              options={LANGUAGES}
              placeholder={t('adultForm.fields.language')}
              name='language'
            />
            <Select
              options={formattedCountries}
              placeholder={t('adultForm.fields.destination')}
              name='destination'
              isMulti
            />
            <Select
              options={formattedExams}
              placeholder={t('adultForm.fields.exam')}
              name='exam'
            />
          </SimpleGrid>
          {error && <FormError error={error} />}
        </VStack>
        <SimpleGrid columns={{ base: 1, md: 3 }} mt={10} spacing={4}>
          <Show above='md'>
            <HStack justifyContent={{ base: 'center', md: 'flex-start' }}>
              <Button onClick={goBack}>{t('common.back')}</Button>
            </HStack>
          </Show>
          <HStack justifyContent='center'>
            <Button type='submit'>{t('juniorForm.search')}</Button>
          </HStack>
          <Show below='sm'>
            <HStack justifyContent={{ base: 'center', md: 'flex-start' }}>
              <Button onClick={goBack}>{t('common.back')}</Button>
            </HStack>
          </Show>
        </SimpleGrid>
      </form>
    </FormProvider>
  )
}

export default AdultForm
