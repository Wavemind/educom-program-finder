/**
 * The external imports
 */
import { Box, Text } from '@chakra-ui/react'

const FormError = ({ error }) => (
  <Box w='full'>
    <Text fontSize='md' color='error'>
      {typeof error.message === 'string'
        ? error.message.split(':')[0]
        : error.data.errors.join()}
    </Text>
  </Box>
)

export default FormError
