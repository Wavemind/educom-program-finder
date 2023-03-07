/**
 * The external imports
 */
import { format } from 'date-fns/esm'
import { fr, enGB } from 'date-fns/locale'

export default function formatDate(date, locale) {
  const formattedDate = format(new Date(date), 'd LLLL y', {
    locale: locale === 'en' ? enGB : fr,
  })
  return `${formattedDate}`
}
