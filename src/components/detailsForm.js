/**
 * The external imports
 */
import { useEffect } from 'react'
import { VStack, Text, Button, Flex, useToast } from '@chakra-ui/react'
import { FormProvider, useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'

/**
 * The internal imports
 */
import { Input } from './'
import { useLazyRequestDetailsQuery } from '../lib/services/modules/details'

const DetailsForm = () => {
  const { t } = useTranslation()

  const toast = useToast()

  const [requestDetails, { isSuccess }] = useLazyRequestDetailsQuery()

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

  useEffect(() => {
    if (isSuccess) {
      toast({
        title: t('detailsForm.success'),
        status: 'success',
        position: 'bottom-right',
        duration: 5000,
      })
      methods.reset()
    }
  }, [isSuccess])

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(requestDetails)}>
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
                placeholder={t('detailsForm.lastName')}
              />
              <Input
                name='childFirstName'
                isRequired
                placeholder={t('detailsForm.firstName')}
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
