/**
 * The external imports
 */
import { Controller, useFormContext } from 'react-hook-form'
import {
  Input as ChakraInput,
  FormControl,
  FormErrorMessage,
} from '@chakra-ui/react'

const Input = ({ name, isRequired = false, placeholder }) => {
  const {
    control,
    formState: { errors },
  } = useFormContext()

  return (
    <FormControl isInvalid={errors[name]} isRequired={isRequired}>
      <Controller
        control={control}
        name={name}
        render={({ field: { onChange, value } }) => (
          <ChakraInput
            variant='filled'
            placeholder={placeholder}
            id={name}
            name={name}
            value={value}
            onChange={onChange}
            type='text'
          />
        )}
      />

      <FormErrorMessage>
        {errors[name] && errors[name].message}
      </FormErrorMessage>
    </FormControl>
  )
}

export default Input
