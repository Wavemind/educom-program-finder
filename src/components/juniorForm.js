/**
 * The external imports
 */
import { useEffect, useMemo } from 'react'
import { HStack, VStack, Button, SimpleGrid, Box, Text } from '@chakra-ui/react'
import { FormProvider, useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'

/**
 * The internal imports
 */
import { Select } from './'
import {
  useLazyGetActivitiesQuery,
  useLazyGetCountriesQuery,
  useLazyGetExamsQuery,
} from '../lib/services/modules/formData'
import {
  AGES,
  LANGUAGES,
  TYPES,
  PERIODS,
  DURATIONS,
} from '../lib/config/constants'

const JuniorForm = ({ submitForm }) => {
  const methods = useForm()
  const {
    t,
    i18n: { language },
  } = useTranslation()

  const [
    getActivities,
    {
      data: activities,
      isSuccess: isGetActivitiesSuccess,
      isError: isGetActivitiesError,
      error: getActivitiesError,
    },
  ] = useLazyGetActivitiesQuery()

  const [
    getCountries,
    {
      data: countries,
      isSuccess: isGetCountriesSuccess,
      isError: isGetCountriesError,
      error: getCountriesError,
    },
  ] = useLazyGetCountriesQuery()

  const [
    getExams,
    {
      data: exams,
      isSuccess: isGetExamsSuccess,
      isError: isGetExamsError,
      error: getExamsError,
    },
  ] = useLazyGetExamsQuery()

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
   * Get the formData from the api
   */
  useEffect(() => {
    getActivities()
    getCountries()
    getExams()
  }, [])

  const onSubmit = data => {
    // TODO : Figure out where to send the data
    console.log(data)
    submitForm()
  }

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
              options={PERIODS}
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
          {isGetActivitiesError && (
            <Box w='full'>
              <Text fontSize='md' color='red'>
                {typeof getActivitiesError.message === 'string'
                  ? getActivitiesError.message.split(':')[0]
                  : getActivitiesError.data.errors.join()}
              </Text>
            </Box>
          )}
          {isGetCountriesError && (
            <Box w='full'>
              <Text fontSize='md' color='red'>
                {typeof getCountriesError.message === 'string'
                  ? getCountriesError.message.split(':')[0]
                  : getCountriesError.data.errors.join()}
              </Text>
            </Box>
          )}
          {isGetExamsError && (
            <Box w='full'>
              <Text fontSize='md' color='red'>
                {typeof getExamsError.message === 'string'
                  ? getExamsError.message.split(':')[0]
                  : getExamsError.data.errors.join()}
              </Text>
            </Box>
          )}
        </VStack>
        <HStack w='full' justifyContent='center' mt={10}>
          <Button type='submit'>{t('juniorForm.search')}</Button>
        </HStack>
      </form>
    </FormProvider>
  )
}

export default JuniorForm
