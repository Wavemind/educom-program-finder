/**
 * The external imports
 */
import { VStack, Box, Text, Image } from '@chakra-ui/react'

const Result = ({ result }) => (
  <Box w='340px'>
    <Image
      objectFit='contain'
      src='https://api.lorem.space/image/drink?w=340&h=220'
      alt='Dan Abramov'
    />
    <VStack px={4} py={6} spacing={3} alignItems='flex-start' bg='white'>
      <Box>
        <Text fontSize='sm' fontWeight='bold'>
          {result.title}
        </Text>
        <Text fontSize='md' color='primary'>
          {result.destination}
        </Text>
        <Text fontSize='sm' color='primary'>
          {result.duration}
        </Text>
      </Box>
      <Text fontSize='sm'>{result.description}</Text>
      <Text fontSize='sm'>{result.price}</Text>
    </VStack>
  </Box>
)

export default Result
