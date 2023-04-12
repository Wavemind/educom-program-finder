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
            control: provided => ({
              ...provided,
              background: 'primary !important',
              borderRadius: 'none !important',
              border: 'none',
              cursor: 'pointer',
              color: 'white',
              fontSize: 'md',
              height: '70px',
              _hover: {
                bg: 'secondary',
              },
              _focus: {
                bg: 'secondary !important',
              },
            }),
            groupHeading: provided => ({
              ...provided,
              backgroundColor: 'background',
              paddingLeft: 3,
              color: 'white',
            }),
            indicatorsContainer: provided => ({
              ...provided,
              background: 'transparent',
              px: 4,
            }),
            downChevron: provided => ({
              ...provided,
              boxSize: 8,
            }),
            placeholder: provided => ({
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
