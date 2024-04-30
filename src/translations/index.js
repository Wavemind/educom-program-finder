/**
 * The external imports
 */
import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

/**
 * The internal imports
 */
import * as resources from './resources'
const langInput = document.getElementById('lang')
const langValue = langInput?.dataset?.lang === 'fr' ? 'fr' : 'en'

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
  lng: langValue,
})

export default i18n
