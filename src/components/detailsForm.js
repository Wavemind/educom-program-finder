/**
 * The external imports
 */
import { VStack, Text, Button, Flex } from '@chakra-ui/react'
import { FormProvider, useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'

/**
 * The internal imports
 */
import { Input } from './'

const DetailsForm = () => {
  const { t } = useTranslation()

  const methods = useForm({
    defaultValues: {
      parentLastName: '',
      parentFirstName: '',
      parentEmail: '',
      parentPhone: '',
      childLastName: '',
      childFirstName: '',
      childBirthDate: '',
    },
  })

  /**
   * Submits the form to the backend
   * @param {*} data
   */
  const onSubmit = data => {
    // TODO : Figure out where to send this
    console.log(data)
  }

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <Flex justify='center'>
          <VStack spacing={8} w='60%'>
            <VStack spacing={6} w='full'>
              <Text color='white' fontSize='xl'>
                {t('detailsForm.parentInformation')}
              </Text>
              <Input
                name='parentLastName'
                isRequired
                placeholder={t('detailsForm.lastName')}
              />
              <Input
                name='parentFirstName'
                isRequired
                placeholder={t('detailsForm.firstName')}
              />
              <Input
                name='parentEmail'
                isRequired
                placeholder={t('detailsForm.email')}
              />
              <Input name='parentPhone' placeholder={t('detailsForm.phone')} />
            </VStack>
            <VStack spacing={4} w='full'>
              <Text color='white' fontSize='xl'>
                {t('detailsForm.childInformation')}
              </Text>
              <Input
                name='childLastName'
                isRequired
                placeholder={t('detailsForm.firstName')}
              />
              <Input
                name='childFirstName'
                isRequired
                placeholder={t('detailsForm.lastName')}
              />
              <Input
                name='childBirthDate'
                isRequired
                placeholder={t('detailsForm.birthDate')}
              />
            </VStack>
            <Button w='full' type='submit'>
              {t('detailsForm.send')}
            </Button>
          </VStack>
        </Flex>
      </form>
    </FormProvider>
  )
}

export default DetailsForm
