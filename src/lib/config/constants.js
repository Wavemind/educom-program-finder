/**
 * The internal imports
 */
import i18n from '../../translations'

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

export const ADULT_DESTINATIONS = [
  { label: i18n.t('constants.destinations.germany'), value: 'germany' },
  { label: i18n.t('constants.destinations.england'), value: 'england' },
  { label: i18n.t('constants.destinations.australia'), value: 'australia' },
  { label: i18n.t('constants.destinations.canada'), value: 'canada' },
  { label: i18n.t('constants.destinations.spain'), value: 'spain' },
  { label: i18n.t('constants.destinations.france'), value: 'france' },
  { label: i18n.t('constants.destinations.ireland'), value: 'ireland' },
  { label: i18n.t('constants.destinations.italy'), value: 'italy' },
  { label: i18n.t('constants.destinations.malta'), value: 'malta' },
  { label: i18n.t('constants.destinations.newZealand'), value: 'newZealand' },
  { label: i18n.t('constants.destinations.switzerland'), value: 'switzerland' },
  { label: i18n.t('constants.destinations.usa'), value: 'usa' },
  { label: i18n.t('constants.destinations.other'), value: 'other' },
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
  { label: i18n.t('constants.periods.autumn'), value: 'autumn' },
  { label: i18n.t('constants.periods.easter'), value: 'easter' },
  { label: i18n.t('constants.periods.summer'), value: 'summer' },
]

export const DURATIONS = [
  { label: i18n.t('constants.durations.oneWeek'), value: 1 },
  { label: i18n.t('constants.durations.twoWeeks'), value: 2 },
  { label: i18n.t('constants.durations.threeWeeks'), value: 3 },
  { label: i18n.t('constants.durations.more'), value: 0 },
]

export const ADULT_EXAMS = [
  { label: i18n.t('constants.exams.cambridge'), value: 'cambridge' },
  { label: i18n.t('constants.exams.ielts'), value: 'ielts' },
  { label: i18n.t('constants.exams.toefl'), value: 'toefl' },
  { label: i18n.t('constants.exams.testDaf'), value: 'testDaf' },
  { label: i18n.t('constants.exams.dele'), value: 'dele' },
]
