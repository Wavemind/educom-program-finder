/**
 * The external imports
 */
import { useEffect } from 'react'
import {
  HStack,
  Input as ChakraInput,
  IconButton,
  Select,
  useConst,
  FormControl,
} from '@chakra-ui/react'
import ReactDatePicker, { registerLocale } from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import getYear from 'date-fns/getYear'
import getMonth from 'date-fns/getMonth'
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons'
import { Controller, useFormContext } from 'react-hook-form'
import fr from 'date-fns/locale/fr'
import { useTranslation } from 'react-i18next'

/**
 * The internal imports
 */
import { months } from '../lib/config/constants'
import '../lib/stylesheets/datePicker.css'

const DatePicker = ({ name, isRequired = false, placeholder }) => {
  const { t } = useTranslation()
  const {
    control,
    formState: { errors },
  } = useFormContext()

  const years = useConst(() => {
    const currentYear = new Date().getFullYear()
    return Array(45)
      .fill()
      .map((_, i) => {
        return currentYear - i
      })
  })

  // TODO : Link this to website locale, like we will do with the language
  useEffect(() => {
    registerLocale('fr', fr)
  }, [])

  return (
    <FormControl isInvalid={errors[name]} isRequired={isRequired}>
      <Controller
        control={control}
        name={name}
        render={({ field: { onChange, value } }) => (
          <ReactDatePicker
            selected={value}
            onChange={onChange}
            dateFormat='dd.MM.yyyy'
            placeholderText={placeholder}
            showPopperArrow={false}
            filterDate={date => date < new Date()}
            locale='fr'
            customInput={
              <ChakraInput variant='filled' value={value} onChange={onChange} />
            }
            renderCustomHeader={({
              date,
              changeYear,
              changeMonth,
              decreaseMonth,
              increaseMonth,
              prevMonthButtonDisabled,
              nextMonthButtonDisabled,
            }) => (
              <HStack justifyContent='space-between' mx={4} my={2}>
                <IconButton
                  icon={<ChevronLeftIcon w={6} h={6} color='black' />}
                  onClick={decreaseMonth}
                  disabled={prevMonthButtonDisabled}
                />
                <Select
                  bg='white'
                  value={getYear(date)}
                  onChange={({ target: { value } }) => changeYear(value)}
                >
                  {years.map(option => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </Select>

                <Select
                  bg='white'
                  value={months[getMonth(date)]}
                  onChange={({ target: { value } }) =>
                    changeMonth(months.indexOf(value))
                  }
                >
                  {months.map(option => (
                    <option key={option} value={option}>
                      {t(`constants.months.${option}`)}
                    </option>
                  ))}
                </Select>

                <IconButton
                  icon={<ChevronRightIcon w={6} h={6} color='black' />}
                  onClick={increaseMonth}
                  disabled={nextMonthButtonDisabled}
                />
              </HStack>
            )}
          />
        )}
      />
    </FormControl>
  )
}

export default DatePicker
