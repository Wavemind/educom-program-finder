/**
 * The external imports
 */
import { setLocale } from 'yup'

export const validationTranslations = t => {
  const required = t('validations.required')
  const emailValid = t('vaidations.email')

  setLocale({
    mixed: {
      required: required,
    },
    string: {
      email: emailValid,
    },
  })
}
