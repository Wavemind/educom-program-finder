export default {
  components: {
    Button: {
      // style object for base or default style
      baseStyle: {
        bg: 'white',
        borderRadius: 'full',
        py: 6,
        px: 6,
        paddingX: 6, // => https://github.com/chakra-ui/chakra-ui/issues/3293
        color: 'secondary',
        textTransform: 'uppercase',
      },
      // styles for different sizes ("sm", "md", "lg")
      sizes: {
        md: {
          fontSize: 'sm',
        },
      },
      // styles for different visual variants ("outline", "solid")
      variants: {},
      // default values for 'size', 'variant' and 'colorScheme'
      defaultProps: {},
    },
  },
}
