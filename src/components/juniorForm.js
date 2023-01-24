/**
 * The external imports
 */
import { HStack, VStack, Button, SimpleGrid } from '@chakra-ui/react'
import { FormProvider, useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'

/**
 * The internal imports
 */
import { Select } from './'
import {
  AGES,
  LANGUAGES,
  DESTINATIONS,
  TYPES,
  ACTIVITIES,
  PERIODS,
  DURATIONS,
  EXAMS,
} from '../lib/config/constants'

const JuniorForm = () => {
  const methods = useForm()
  const { t } = useTranslation()

  const onSubmit = data => {
    // TODO : Figure out where to send the data
    console.log(data)
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
              options={DESTINATIONS}
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
              options={ACTIVITIES}
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
              options={EXAMS}
              placeholder={t('juniorForm.fields.exam')}
              name='exam'
            />
          </SimpleGrid>
        </VStack>
        <HStack w='full' justifyContent='center' mt={10}>
          <Button type='submit'>{t('juniorForm.search')}</Button>
        </HStack>
      </form>
    </FormProvider>
  )
}

export default JuniorForm
