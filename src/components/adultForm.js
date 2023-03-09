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
  STEPS,
} from '../lib/config/constants'

const AdultForm = ({ submitForm, setStep }) => {
  const methods = useForm()
  const { t } = useTranslation()

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
        <SimpleGrid columns={3} mt={10}>
          <HStack>
            <Button onClick={goBack}>{t('common.back')}</Button>
          </HStack>
          <HStack w='full' justifyContent='center'>
            <Button type='submit'>{t('adultForm.search')}</Button>
          </HStack>
        </SimpleGrid>
      </form>
    </FormProvider>
  )
}

export default AdultForm
