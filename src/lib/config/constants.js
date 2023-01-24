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

export const DESTINATIONS = [
  { label: i18n.t('constants.destinations.germany'), value: 'germany' },
  { label: i18n.t('constants.destinations.england'), value: 'england' },
  { label: i18n.t('constants.destinations.austria'), value: 'austria' },
  { label: i18n.t('constants.destinations.belgium'), value: 'belgium' },
  { label: i18n.t('constants.destinations.canada'), value: 'canada' },
  { label: i18n.t('constants.destinations.spain'), value: 'spain' },
  { label: i18n.t('constants.destinations.france'), value: 'france' },
  { label: i18n.t('constants.destinations.ireland'), value: 'ireland' },
  { label: i18n.t('constants.destinations.italy'), value: 'italy' },
  { label: i18n.t('constants.destinations.malta'), value: 'malta' },
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

export const ACTIVITIES = [
  {
    label: i18n.t('constants.activities.academics'),
    options: [
      {
        label: i18n.t('constants.activities.architecture'),
        value: 'architecture',
      },
      { label: i18n.t('constants.activities.biology'), value: 'biology' },
      {
        label: i18n.t('constants.activities.businessManagement'),
        value: 'businessManagement',
      },
      { label: i18n.t('constants.activities.chemistry'), value: 'chemistry' },
      {
        label: i18n.t('constants.activities.computerScience'),
        value: 'computerScience',
      },
      {
        label: i18n.t('constants.activities.creativeWriting'),
        value: 'creativeWriting',
      },
      {
        label: i18n.t('constants.activities.criticalThinking'),
        value: 'criticalThinking',
      },
      {
        label: i18n.t('constants.activities.digitalSkills'),
        value: 'digitalSkills',
      },
      { label: i18n.t('constants.activities.law'), value: 'law' },
      { label: i18n.t('constants.activities.economics'), value: 'economics' },
      {
        label: i18n.t('constants.activities.entrepreneurship'),
        value: 'entrepreneurship',
      },
      { label: i18n.t('constants.activities.geography'), value: 'geography' },
      { label: i18n.t('constants.activities.history'), value: 'history' },
      {
        label: i18n.t('constants.activities.engineering'),
        value: 'engineering',
      },
      {
        label: i18n.t('constants.activities.artificialIntelligence'),
        value: 'artificialIntelligence',
      },
      { label: i18n.t('constants.activities.leadership'), value: 'leadership' },
      {
        label: i18n.t('constants.activities.englishLiterature'),
        value: 'englishLiterature',
      },
      {
        label: i18n.t('constants.activities.mathematics'),
        value: 'mathematics',
      },
      { label: i18n.t('constants.activities.medicine'), value: 'medicine' },
      { label: i18n.t('constants.activities.philosophy'), value: 'philosophy' },
      { label: i18n.t('constants.activities.physics'), value: 'physics' },
      {
        label: i18n.t('constants.activities.programming'),
        value: 'programming',
      },
      { label: i18n.t('constants.activities.psychology'), value: 'psychology' },
      { label: i18n.t('constants.activities.robotics'), value: 'robotics' },
      { label: i18n.t('constants.activities.satPrep'), value: 'satPrep' },
      { label: i18n.t('constants.activities.sciences'), value: 'sciences' },
      { label: i18n.t('constants.activities.stem'), value: 'stem' },
      {
        label: i18n.t('constants.activities.sustainability'),
        value: 'sustainability',
      },
      { label: i18n.t('constants.activities.toeflPrep'), value: 'toeflPrep' },
    ],
  },
  {
    label: i18n.t('constants.activities.arts'),
    options: [
      { label: i18n.t('constants.activities.arts'), value: 'arts' },
      { label: i18n.t('constants.activities.singing'), value: 'singing' },
      { label: i18n.t('constants.activities.cinema'), value: 'cinema' },
      { label: i18n.t('constants.activities.cooking'), value: 'cooking' },
      { label: i18n.t('constants.activities.dance'), value: 'dance' },
      { label: i18n.t('constants.activities.design'), value: 'design' },
      { label: i18n.t('constants.activities.drawing'), value: 'drawing' },
      { label: i18n.t('constants.activities.fashion'), value: 'fashion' },
      { label: i18n.t('constants.activities.film'), value: 'film' },
      { label: i18n.t('constants.activities.music'), value: 'music' },
      { label: i18n.t('constants.activities.painting'), value: 'painting' },
      {
        label: i18n.t('constants.activities.photography'),
        value: 'photography',
      },
      { label: i18n.t('constants.activities.theatre'), value: 'theatre' },
    ],
  },
  {
    label: 'Sports',
    options: [
      {
        label: i18n.t('constants.activities.adventureSports'),
        value: 'adventureSports',
      },
      { label: i18n.t('constants.activities.basketball'), value: 'basketball' },
      { label: i18n.t('constants.activities.dance'), value: 'dance' },
      {
        label: i18n.t('constants.activities.horsebackRiding'),
        value: 'horsebackRiding',
      },
      { label: i18n.t('constants.activities.football'), value: 'football' },
      { label: i18n.t('constants.activities.golf'), value: 'golf' },
      { label: i18n.t('constants.activities.hockey'), value: 'hockey' },
      { label: i18n.t('constants.activities.karting'), value: 'karting' },
      {
        label: i18n.t('constants.activities.multiSports'),
        value: 'multiSports',
      },
      { label: i18n.t('constants.activities.swimming'), value: 'swimming' },
      {
        label: i18n.t('constants.activities.outdoorAdventure'),
        value: 'outdoorAdventure',
      },
      { label: i18n.t('constants.activities.polo'), value: 'polo' },
      { label: i18n.t('constants.activities.rugby'), value: 'rugby' },
      { label: i18n.t('constants.activities.skateboard'), value: 'skateboard' },
      { label: i18n.t('constants.activities.surf'), value: 'surf' },
      { label: i18n.t('constants.activities.tennis'), value: 'tennis' },
      { label: i18n.t('constants.activities.sailing'), value: 'sailing' },
      {
        label: i18n.t('constants.activities.waterSports'),
        value: 'waterSports',
      },
    ],
  },
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

export const EXAMS = [
  { label: i18n.t('constants.exams.cambridge'), value: 'cambridge' },
  { label: i18n.t('constants.exams.ielts'), value: 'ielts' },
  { label: i18n.t('constants.exams.trinity'), value: 'trinity' },
  { label: i18n.t('constants.exams.dele'), value: 'dele' },
  { label: i18n.t('constants.exams.telc'), value: 'telc' },
]
