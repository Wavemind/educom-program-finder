/**
 * The external imports
 */
import { Text, VStack } from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'

const FormError = ({ error }) => {
  const { t } = useTranslation()

  return (
    <VStack w='full'>
      <Text fontSize='md' color='error' textAlign='center'>
        {typeof error.message === 'string'
          ? error.message.split(':')[0]
          : error.data.errors.join()}
      </Text>
      <Text fontSize='lg' color='white' textAlign='center'>
        {t('common.error')}
      </Text>
    </VStack>
  )
}

export default FormError
