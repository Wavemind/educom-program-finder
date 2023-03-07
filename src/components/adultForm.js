/**
 * The external imports
 */
import { HStack, VStack, Button, SimpleGrid } from '@chakra-ui/react'
import { FormProvider, useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'

/**
 * The internal imports
 */
import { Select } from '.'
import {
  LANGUAGES,
  ADULT_DESTINATIONS,
  ADULT_EXAMS,
} from '../lib/config/constants'

const AdultForm = ({ submitForm }) => {
  const methods = useForm()
  const { t } = useTranslation()

  const onSubmit = data => {
    submitForm(data)
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
              options={ADULT_DESTINATIONS}
              placeholder={t('adultForm.fields.destination')}
              name='destination'
              isMulti
            />
            <Select
              options={ADULT_EXAMS}
              placeholder={t('adultForm.fields.exam')}
              name='exam'
            />
          </SimpleGrid>
        </VStack>
        <HStack w='full' justifyContent='center' mt={10}>
          <Button type='submit'>{t('adultForm.search')}</Button>
        </HStack>
      </form>
    </FormProvider>
  )
}

export default AdultForm
