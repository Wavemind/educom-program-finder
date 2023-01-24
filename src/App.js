/**
 * The external imports
 */
import { useState, useMemo } from 'react'
import { Heading, HStack, VStack, Box, Text } from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'

/**
 * The internal imports
 */
import { AdultForm, JuniorForm, Result, TripSelection } from './components'

const App = () => {
  const { t } = useTranslation()
  const [step, setStep] = useState('tripSelection')

  /**
   * Renders component based on selected step
   */
  const render = useMemo(() => {
    if (step === 'tripSelection') {
      return <TripSelection setStep={setStep} />
    } else if (step === 'juniorForm') {
      return <JuniorForm />
    } else if (step === 'adultForm') {
      return <AdultForm />
    }
  })

  // TODO : Get these from backend im guessing
  const results = useMemo(
    () => [
      {
        title: 'Séjour linguistique I 12 - 17 ans',
        destination: 'Ludlow, Angleterre',
        duration: '9 juillet - 6 août 2022',
        description:
          'More Than English se trouve dans un vieux collège de 300 ans. Très beau, très britannique. Le camps se trouve dans la ville médiévale de Ludlow, charmante ville au centre de l’Angleterre. 3 heures de cours d’anglais le matin.',
        price: 'A partir de CHF 550.00',
      },
      {
        title: 'Séjour linguistique I 12 - 17 ans',
        destination: 'Ludlow, Angleterre',
        duration: '9 juillet - 6 août 2022',
        description:
          'More Than English se trouve dans un vieux collège de 300 ans. Très beau, très britannique. Le camps se trouve dans la ville médiévale de Ludlow, charmante ville au centre de l’Angleterre. 3 heures de cours d’anglais le matin.',
        price: 'A partir de CHF 550.00',
      },
      {
        title: 'Séjour linguistique I 12 - 17 ans',
        destination: 'Ludlow, Angleterre',
        duration: '9 juillet - 6 août 2022',
        description:
          'More Than English se trouve dans un vieux collège de 300 ans. Très beau, très britannique. Le camps se trouve dans la ville médiévale de Ludlow, charmante ville au centre de l’Angleterre. 3 heures de cours d’anglais le matin.',
        price: 'A partir de CHF 550.00',
      },
    ],
    []
  )

  return (
    <Box w='full' bg='background' py={10} px={96}>
      <VStack spacing={8} w='full' mb={10}>
        <Heading variant='h1'>{t(`${step}.header`)}</Heading>
        <Heading variant='h2'>{t(`${step}.subheader`)}</Heading>
      </VStack>
      {render}
      {step !== 'tripSelection' && (
        <VStack w='full' spacing={8} mt={10}>
          <Heading variant='h1'>{t('results.header')}</Heading>
          <HStack spacing={14}>
            {results.length > 0 ? (
              results.map((result, index) => (
                <Result key={`result_${index}`} result={result} />
              ))
            ) : (
              <Box>
                <Text color='white'>{t('results.noResults')}</Text>
              </Box>
            )}
          </HStack>
        </VStack>
      )}
    </Box>
  )
}

export default App
