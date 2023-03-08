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
import { LANGUAGES } from '../lib/config/constants'
import transformFormData from '../lib/utils/transformFormData'
import {
  useGetCountriesQuery,
  useGetExamsQuery,
} from '../lib/services/modules/formData'

const AdultForm = ({ submitForm }) => {
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
  } = useGetCountriesQuery()

  const {
    data: exams,
    isSuccess: isGetExamsSuccess,
    isError: isGetExamsError,
    error: getExamsError,
  } = useGetExamsQuery()

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

  const onSubmit = data => {
    submitForm(transformFormData(data))
  }

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <VStack spacing={10} w='full' display='inline-block'>
          <SimpleGrid columns={3} gap={10}>
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
          {isGetCountriesError && <FormError error={getCountriesError} />}
          {isGetExamsError && <FormError error={getExamsError} />}
        </VStack>
        <HStack w='full' justifyContent='center' mt={10}>
          <Button type='submit'>{t('adultForm.search')}</Button>
        </HStack>
      </form>
    </FormProvider>
  )
}

export default AdultForm
