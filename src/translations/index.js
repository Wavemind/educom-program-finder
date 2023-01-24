/**
 * The external imports
 */
import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

/**
 * The internal imports
 */
import * as resources from './resources'

i18n.use(initReactI18next).init({
  resources: {
    ...Object.entries(resources).reduce(
      (acc, [key, value]) => ({
        ...acc,
        [key]: {
          translation: value,
        },
      }),
      {}
    ),
  },
  // TODO : Align with wordpress to have the same default language
  lng: 'fr',
})

export default i18n
