/**
 * The external imports
 */
import { useMemo } from 'react'
import { HStack, VStack, Button, SimpleGrid } from '@chakra-ui/react'
import { FormProvider, useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'

/**
 * The internal imports
 */
import { Select, FormError } from './'
import transformFormData from '../lib/utils/transformFormData'
import {
  useGetActivitiesQuery,
  useGetCountriesQuery,
  useGetExamsQuery,
  useGetPeriodsQuery,
} from '../lib/services/modules/formData'
import {
  AGES,
  LANGUAGES,
  TYPES,
  DURATIONS,
  STEPS,
} from '../lib/config/constants'

const JuniorForm = ({ submitForm, setStep, setSearchData }) => {
  const methods = useForm()
  const {
    t,
    i18n: { language },
  } = useTranslation()

  const {
    data: activities,
    isSuccess: isGetActivitiesSuccess,
    isError: isGetActivitiesError,
    error: getActivitiesError,
  } = useGetActivitiesQuery()

  const {
    data: periods,
    isSuccess: isGetPeriodsSuccess,
    isError: isGetPeriodsError,
    error: getPeriodsError,
  } = useGetPeriodsQuery()

  const {
    data: countries,
    isSuccess: isGetCountriesSuccess,
    isError: isGetCountriesError,
    error: getCountriesError,
  } = useGetCountriesQuery('junior')

  const {
    data: exams,
    isSuccess: isGetExamsSuccess,
    isError: isGetExamsError,
    error: getExamsError,
  } = useGetExamsQuery('junior')

  /**
   * Formats the activities obtained from the api
   */
  const formattedActivities = useMemo(() => {
    if (isGetActivitiesSuccess) {
      return Object.keys(activities).map(group => ({
        label: t(`constants.activities.${group}`),
        options: activities[group].map(activity => ({
          value: activity.id,
          label: activity.nameTranslations[language],
        })),
      }))
    }
    return []
  }, [isGetActivitiesSuccess, language])

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
   * Formats the countries obtained from the api
   */
  const formattedPeriods = useMemo(() => {
    if (isGetPeriodsSuccess) {
      return periods.map(period => ({
        value: period.id,
        label: period.nameTranslations[language],
      }))
    }
    return []
  }, [isGetPeriodsSuccess])

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
    setSearchData(transformFormData(data))
  }

  /**
   * Sets the error object to display in the FormError component
   */
  const error = useMemo(() => {
    if (isGetActivitiesError) {
      return getActivitiesError
    } else if (isGetCountriesError) {
      return getCountriesError
    } else if (isGetExamsError) {
      return getExamsError
    } else if (isGetPeriodsError) {
      return getPeriodsError
    } else {
      return null
    }
  }, [isGetActivitiesError, isGetCountriesError, isGetExamsError])

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <VStack spacing={10} w='full' display='inline-block'>
          <SimpleGrid columns={3} gap={10}>
            <Select
              options={AGES}
              placeholder={t('juniorForm.fields.age')}
              name='age'
            />
            <Select
              options={LANGUAGES}
              placeholder={t('juniorForm.fields.language')}
              name='language'
            />
            <Select
              options={formattedCountries}
              placeholder={t('juniorForm.fields.destination')}
              name='destination'
              isMulti
            />
            <Select
              options={TYPES}
              placeholder={t('juniorForm.fields.tripType')}
              name='tripType'
            />
            <Select
              options={formattedActivities}
              placeholder={t('juniorForm.fields.activities')}
              name='activities'
              isMulti
            />
            <Select
              options={formattedPeriods}
              placeholder={t('juniorForm.fields.period')}
              name='period'
            />
          </SimpleGrid>
          <SimpleGrid columns={2} gap={10}>
            <Select
              options={DURATIONS}
              placeholder={t('juniorForm.fields.duration')}
              name='duration'
            />
            <Select
              options={formattedExams}
              placeholder={t('juniorForm.fields.exam')}
              name='exam'
            />
          </SimpleGrid>
          {error && <FormError error={error} />}
        </VStack>
        <SimpleGrid columns={3} mt={10}>
          <HStack>
            <Button onClick={goBack} variant='text'>
              {t('common.back')}
            </Button>
          </HStack>
          <HStack w='full' justifyContent='center'>
            <Button type='submit'>{t('juniorForm.search')}</Button>
          </HStack>
        </SimpleGrid>
      </form>
    </FormProvider>
  )
}

export default JuniorForm
