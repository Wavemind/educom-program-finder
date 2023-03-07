/**
 * The external imports
 */
import { format } from 'date-fns/esm'
import { fr, enGB } from 'date-fns/locale'

/**
 * Formats a Date object into a string using the given locale.
 *
 * @param {Date} date - The date to format.
 * @param {string} locale - The locale that determines how the date will be formatted.
 *    Must be either 'en' (English) or 'fr' (French).
 * @returns {string} The formatted date as a string.
 */
export default function formatDate(date, locale) {
  return format(new Date(date), 'd LLLL y', {
    locale: locale === 'en' ? enGB : fr,
  })
}
