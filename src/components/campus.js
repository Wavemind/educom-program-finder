/**
 * The external imports
 */
import { VStack, Box, Text, Image } from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'

/**
 * The internal imports
 */
import formatDate from '../lib/utils/formatDate'

const Campus = ({ campus }) => {
  const { t } = useTranslation()
  return (
    <Box
      w={{ base: 'auto', md: '340px' }}
      display='flex'
      flexDirection='column'
    >
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
            {campus.program.subtypeName} | ({campus.ageBegin} - {campus.ageEnd})
          </Text>
          <Text fontSize='md' color='primary'>
            {campus.country.name}
          </Text>
          <Text fontSize='sm' color='primary'>
            {/* TO DO set locale */}
            {campus.firstDate && campus.lastDate
              ? `${formatDate(campus.firstDate, 'fr')} - 
            ${formatDate(campus.lastDate, 'fr')}`
              : t('detailsForm.no_date')}
          </Text>
        </Box>
        <Text
          fontSize='sm'
          sx={{
            ul: {
              marginX: 3,
              marginY: 1,
            },
          }}
          dangerouslySetInnerHTML={{ __html: campus.publicDescriptionFr }}
        ></Text>

        <Text fontSize='sm'>{campus.price}</Text>
      </VStack>
    </Box>
  )
}

export default Campus
