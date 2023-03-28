/**
 * The external imports
 */
import { useEffect } from 'react'
import {
  SimpleGrid,
  VStack,
  HStack,
  Text,
  Button,
  Flex,
  useToast,
} from '@chakra-ui/react'
import { FormProvider, useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

/**
 * The internal imports
 */
import { Input, DatePicker, FormError } from './'
import { useLazyRequestDetailsQuery } from '../lib/services/modules/details'

const DetailsForm = ({ setStep, selectedForm, campuses }) => {
  const { t } = useTranslation()

  const toast = useToast()

  const [requestDetails, { isSuccess, isError, error }] =
    useLazyRequestDetailsQuery()

  const methods = useForm({
    resolver: yupResolver(
      yup.object({
        parentLastName: yup
          .string()
          .label(t('detailsForm.lastName'))
          .required(t('validations.required')),
        parentFirstName: yup
          .string()
          .label(t('detailsForm.firstName'))
          .required(t('validations.required')),
        parentEmail: yup
          .string()
          .label(t('detailsForm.email'))
          .email(t('validations.email'))
          .required(t('validations.required')),
        childLastName: yup
          .string()
          .label(t('detailsForm.lastName'))
          .required(t('validations.required')),
        childFirstName: yup
          .string()
          .label(t('detailsForm.firstName'))
          .required(t('validations.required')),
        childBirthDate: yup
          .date()
          .label(t('detailsForm.birthDate'))
          .required(t('validations.required')),
      })
    ),
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

  /**
   * Handles the back action and shows the correct form component
   */
  const goBack = () => {
    setStep(selectedForm)
  }

  /**
   * Handles form submission by combining data and proposed campuses and sending to the api
   */
  const submitForm = data => {
    const completeData = {
      ...data,
      campus_ids: campuses.map(campus => campus.id),
    }
    requestDetails(completeData)
  }

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(submitForm)}>
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
              <DatePicker
                name='childBirthDate'
                isRequired
                placeholder={t('detailsForm.birthDate')}
              />
              {isError && <FormError error={error} />}
            </VStack>
            <SimpleGrid columns={3} w='full'>
              <HStack>
                <Button onClick={goBack}>{t('common.back')}</Button>
              </HStack>
              <HStack w='full' justifyContent='center'>
                <Button type='submit'>{t('detailsForm.send')}</Button>
              </HStack>
            </SimpleGrid>
          </VStack>
        </Flex>
      </form>
    </FormProvider>
  )
}

export default DetailsForm
