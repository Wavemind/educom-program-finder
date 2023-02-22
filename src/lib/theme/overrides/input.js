export default {
  components: {
    Input: {
      // style object for base or default style
      baseStyle: {},
      // styles for different sizes ("sm", "md", "lg")
      sizes: {},
      // styles for different visual variants ("outline", "solid")
      variants: {
        filled: {
          field: {
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
            _placeholder: {
              color: 'white',
            },
          },
        },
      },
      // default values for 'size', 'variant' and 'colorScheme'
      defaultProps: {},
    },
  },
}
