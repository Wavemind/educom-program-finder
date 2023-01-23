export default {
  components: {
    Heading: {
      // style object for base or default style
      baseStyle: {
        color: 'white'
      },
      // styles for different sizes ("sm", "md", "lg")
      sizes: {},
      // styles for different visual variants ("outline", "solid")
      variants: {
        h1: {
          fontSize: 'xl',
        },
        h2: {
          fontSize: 'lg',
        },
      },
      // default values for 'size', 'variant' and 'colorScheme'
      defaultProps: {},
    },
  },
}
