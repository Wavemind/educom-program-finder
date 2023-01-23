export default {
  components: {
    Button: {
      // style object for base or default style
      baseStyle: {},
      // styles for different sizes ("sm", "md", "lg")
      sizes: {},
      // styles for different visual variants ("outline", "solid")
      variants: {
        submit: {
          bg: 'white',
          borderRadius: 'full',
          p: 8,
          color: 'secondary',
          textTransform: 'uppercase',
        },
      },
      // default values for 'size', 'variant' and 'colorScheme'
      defaultProps: {},
    },
  },
}
