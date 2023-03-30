/**
 * The internal imports
 */
import i18n from '../../translations'

export const months = [
  'january',
  'february',
  'march',
  'april',
  'may',
  'june',
  'july',
  'august',
  'september',
  'october',
  'november',
  'december',
]

export const AGES = Array.from({ length: 13 }, (_, i) => i + 6).map(age => ({
  label: age,
  value: age,
}))

export const LANGUAGES = [
  { label: i18n.t('constants.languages.english'), value: 'en' },
  { label: i18n.t('constants.languages.german'), value: 'de' },
  { label: i18n.t('constants.languages.spanish'), value: 'es' },
  { label: i18n.t('constants.languages.french'), value: 'fr' },
]

export const TYPES = [
  {
    label: i18n.t('constants.types.standardSummer'),
    value: 'standard-summer',
  },
  {
    label: i18n.t('constants.types.intensiveSummer'),
    value: 'intensive-summer',
  },
  {
    label: i18n.t('constants.types.classlessSummer'),
    value: 'classless-summer',
  },
  { label: i18n.t('constants.types.immersion'), value: 'immersion' },
  { label: i18n.t('constants.types.uniPrep'), value: 'uni-prep' },
  { label: i18n.t('constants.types.humanitarian'), value: 'humanitarian' },
  { label: i18n.t('constants.types.bohemian'), value: 'bohemian' },
]

export const PERIODS = [
  { label: i18n.t('constants.periods.autumn'), value: 3 },
  { label: i18n.t('constants.periods.easter'), value: 1 },
  { label: i18n.t('constants.periods.summer'), value: 2 },
]

export const DURATIONS = [
  { label: i18n.t('constants.durations.oneWeek'), value: 1 },
  { label: i18n.t('constants.durations.twoWeeks'), value: 2 },
  { label: i18n.t('constants.durations.threeWeeks'), value: 3 },
  { label: i18n.t('constants.durations.more'), value: 0 },
]

export const STEPS = {
  tripSelection: 'tripSelection',
  juniorForm: 'juniorForm',
  adultForm: 'adultForm',
  detailsForm: 'detailsForm',
}
