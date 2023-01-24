/**
 * The external imports
 */
import {
  Box,
  Heading,
  HStack,
  VStack,
  Button,
  SimpleGrid,
} from '@chakra-ui/react'
import { FormProvider, useForm } from 'react-hook-form'

/**
 * The internal imports
 */
import { Select } from './components'
import {
  AGES,
  LANGUAGES,
  DESTINATIONS,
  TYPES,
  ACTIVITIES,
  PERIODS,
  DURATIONS,
  EXAMS,
} from './lib/config/constants'
import { useTranslation } from 'react-i18next'

const App = () => {
  const methods = useForm()
  const { t } = useTranslation()

  const onSubmit = data => {
    // TODO : Figure out where to send the data
    console.log(data)
  }

  return (
    <Box w='full' h='100vh' bg='background' py={10} px={96}>
      <VStack spacing={8} w='full' mb={10}>
        <Heading variant='h1'>{t('form.header')}</Heading>
        <Heading variant='h2'>{t('form.subheader')}</Heading>
      </VStack>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <VStack spacing={10} w='full' display='inline-block'>
            <SimpleGrid columns={3} gap={10}>
              <Select
                options={AGES}
                placeholder={t('form.fields.age')}
                name='age'
              />
              <Select
                options={LANGUAGES}
                placeholder={t('form.fields.language')}
                name='language'
              />
              <Select
                options={DESTINATIONS}
                placeholder={t('form.fields.destination')}
                name='destination'
                isMulti
              />
              <Select
                options={TYPES}
                placeholder={t('form.fields.tripType')}
                name='tripType'
              />
              <Select
                options={ACTIVITIES}
                placeholder={t('form.fields.activities')}
                name='activities'
                isMulti
              />
              <Select
                options={PERIODS}
                placeholder={t('form.fields.period')}
                name='period'
              />
            </SimpleGrid>
            <SimpleGrid columns={2} gap={10}>
              <Select
                options={DURATIONS}
                placeholder={t('form.fields.duration')}
                name='duration'
              />
              <Select
                options={EXAMS}
                placeholder={t('form.fields.exam')}
                name='exam'
              />
            </SimpleGrid>
          </VStack>
          <HStack w='full' justifyContent='center' mt={10}>
            <Button type='submit' variant='submit'>
              {t('form.search')}
            </Button>
          </HStack>
        </form>
      </FormProvider>
    </Box>
  )
}

export default App
