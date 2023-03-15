/**
 * The external imports
 */
import {
  HStack,
  Input as ChakraInput,
  IconButton,
  Select,
  useConst,
  FormControl,
} from '@chakra-ui/react'
import ReactDatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import getYear from 'date-fns/getYear'
import getMonth from 'date-fns/getMonth'
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons'
import { Controller, useFormContext } from 'react-hook-form'

/**
 * The internal imports
 */
import { months } from '../lib/config/constants'
import '../lib/stylesheets/datePicker.css'

const DatePicker = ({ name, isRequired = false, placeholder }) => {
  const {
    control,
    formState: { errors },
  } = useFormContext()

  const years = useConst(() => {
    const yearsArray = []
    const currentYear = new Date().getFullYear()

    for (let i = 0; i <= 18; i++) {
      yearsArray.push(currentYear - i)
    }

    return yearsArray
  })

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
                      {option}
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
