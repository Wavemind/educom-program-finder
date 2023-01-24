/**
 * The external imports
 */
import { useState, useMemo } from 'react'
import { Box, Heading, VStack } from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'

/**
 * The internal imports
 */
import { JuniorForm, TripSelection } from './components'

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
    }
  })

  return (
    <Box w='full' h='100vh' bg='background' py={10} px={96}>
      <VStack spacing={8} w='full' mb={10}>
        <Heading variant='h1'>{t(`${step}.header`)}</Heading>
        <Heading variant='h2'>{t(`${step}.subheader`)}</Heading>
      </VStack>
      {render}
    </Box>
  )
}

export default App
