/**
 * The external imports
 */
import { extendTheme } from '@chakra-ui/react'

/**
 * The internal imports
 */
import config from './foundations/config'
import colors from './foundations/colors'
import fontSizes from './foundations/fontSizes'
import heading from './overrides/heading'
import button from './overrides/button'
import input from './overrides/input'

export default extendTheme(config, colors, fontSizes, heading, button, input)
