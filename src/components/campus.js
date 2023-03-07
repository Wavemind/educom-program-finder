/**
 * The external imports
 */
import { VStack, Box, Text, Image } from '@chakra-ui/react'

const Campus = ({ campus }) => (
  <Box w='340px' display='flex' flexDirection='column'>
    <Box h={220}>
      <Image
        objectFit='contain'
        src='https://api.lorem.space/image/drink?w=340&h=220'
        alt='Dan Abramov'
      />
    </Box>
    <VStack
      px={4}
      py={6}
      spacing={3}
      alignItems='flex-start'
      bg='white'
      h='full'
    >
      <Box>
        <Text fontSize='sm' fontWeight='bold'>
          {campus.name}
        </Text>
        <Text fontSize='md' color='primary'>
          {campus.destination}
        </Text>
        <Text fontSize='sm' color='primary'>
          {campus.duration}
        </Text>
      </Box>
      <Text fontSize='sm'>{campus.description}</Text>
      <Text fontSize='sm'>{campus.price}</Text>
    </VStack>
  </Box>
)

export default Campus
