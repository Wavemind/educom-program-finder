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
          {campus.destination || 'Ludlow, Angleterre'}
        </Text>
        <Text fontSize='sm' color='primary'>
          {campus.duration || '9 juillet - 6 août 2022'}
        </Text>
      </Box>
      <Text fontSize='sm'>
        {campus.description ||
          'More Than English se trouve dans un vieux collège de 300 ans. Très beau, très britannique. Le camps se trouve dans la ville médiévale de Ludlow, charmante ville au centre de l’Angleterre. 3 heures de cours d’anglais le matin.'}
      </Text>
      <Text fontSize='sm'>{campus.price}</Text>
    </VStack>
  </Box>
)

export default Campus
