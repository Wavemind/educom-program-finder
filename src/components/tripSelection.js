/**
 * The external imports
 */
import { Button, Stack } from '@chakra-ui/react'
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
    <Stack
      direction={{ base: 'column', md: 'row' }}
      justifyContent='center'
      spacing={6}
    >
      <Button onClick={() => handleSelectStep(STEPS.juniorForm)}>
        {t('tripSelection.juniorCamp')}
      </Button>
      <Button onClick={() => handleSelectStep(STEPS.adultForm)}>
        {t('tripSelection.adultTrip')}
      </Button>
    </Stack>
  )
}

export default TripSelection
