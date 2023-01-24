/**
 * The external imports
 */
import { Button, HStack } from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'

const TripSelection = ({ setStep }) => {
  const { t } = useTranslation()

  return (
    <HStack w='full' justifyContent='center' spacing={6}>
      <Button onClick={() => setStep('juniorForm')}>
        {t('tripSelection.juniorCamp')}
      </Button>
      <Button onClick={() => setStep('adultForm')}>
        {t('tripSelection.adultTrip')}
      </Button>
    </HStack>
  )
}

export default TripSelection
