/**
 * The external imports
 */
import { Controller, useFormContext } from 'react-hook-form'
import { Select as ChakraSelect } from 'chakra-react-select'

const Select = ({ options, placeholder, name, isMulti = false }) => {
  const { control } = useFormContext()

  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { value, name, ref, onChange } }) => (
        <ChakraSelect
          options={options}
          isMulti={isMulti}
          closeMenuOnSelect={!isMulti}
          variant='filled'
          useBasicStyles
          placeholder={placeholder}
          name={name}
          ref={ref}
          value={value}
          onChange={onChange}
          chakraStyles={{
            control: (provided, state) => ({
              ...provided,
              background: 'primary',
              borderRadius: 'none',
              border: 'none',
              cursor: 'pointer',
              color: 'white',
              fontSize: 'md',
              height: '70px',
              _hover: {
                // TODO : Check if there is a hover
                bg: 'secondary',
              },
              _focus: {
                // TODO : Check if there is a focus
                bg: 'secondary',
              },
            }),
            indicatorsContainer: (provided, state) => ({
              ...provided,
              background: 'transparent',
              px: 4,
            }),
            downChevron: (provided, state) => ({
              ...provided,
              boxSize: 8,
            }),
            placeholder: (provided, state) => ({
              ...provided,
              color: 'white',
            }),
          }}
        />
      )}
    />
  )
}

export default Select
