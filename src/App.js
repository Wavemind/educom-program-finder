/**
 * The external imports
 */
import { useMemo } from 'react'
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
import * as constants from './lib/config/constants'

const App = () => {
  const methods = useForm()

  const onSubmit = data => {
    console.log(data)
  }

  return (
    <Box w='full' h='100vh' bg='background' py={10} px={96}>
      <VStack spacing={8} w='full' mb={10}>
        <Heading variant='h1'>Critères de recherche</Heading>
        <Heading variant='h2'>
          Choisissez mainenant les critères des programmes désirés :
        </Heading>
      </VStack>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <VStack spacing={10} w='full' display='inline-block'>
            <SimpleGrid columns={3} gap={10}>
              <Select
                options={constants.ages}
                placeholder="Age de l'enfant"
                name='age'
              />
              <Select
                options={constants.languages}
                placeholder='Langue'
                name='language'
              />
              <Select
                options={constants.destinations}
                placeholder='Destination'
                name='destination'
                isMulti
              />
              <Select
                options={constants.tripTypes}
                placeholder='Types de séjours'
                name='tripType'
              />
              <Select
                options={constants.activities}
                placeholder='Activités'
                name='activities'
                isMulti
              />
              <Select
                options={constants.period}
                placeholder='Période'
                name='period'
              />
            </SimpleGrid>
            <SimpleGrid columns={2} gap={10}>
              <Select
                options={constants.duration}
                placeholder='Durée du séjour'
                name='duration'
              />
              <Select
                options={constants.exam}
                placeholder='Examen'
                name='exam'
              />
            </SimpleGrid>
          </VStack>
          <HStack w='full' justifyContent='center' mt={10}>
            <Button
              type='submit'
              borderRadius='full'
              p={8}
              color='secondary'
              textTransform='uppercase'
            >
              Lancer la Recherche
            </Button>
          </HStack>
        </form>
      </FormProvider>
    </Box>
  )
}

export default App
