/**
 * The external imports
 */
import { Button, HStack } from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'
import { STEPS } from '../lib/config/constants'

const TripSelection = ({ setStep, setSelectedForm }) => {
  const { t } = useTranslation()

  /**
   * Sets the selected step to show the correct form
   */
  const handleSelectStep = step => {
    setSelectedForm(step)
    setStep(step)
  }

  return (
    <HStack w='full' justifyContent='center' spacing={6}>
      <Button onClick={() => handleSelectStep(STEPS.juniorForm)}>
        {t('tripSelection.juniorCamp')}
      </Button>
      <Button onClick={() => handleSelectStep(STEPS.adultForm)}>
        {t('tripSelection.adultTrip')}
      </Button>
    </HStack>
  )
}

export default TripSelection
