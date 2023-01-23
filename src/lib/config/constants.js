export const ages = Array.from({ length: 13 }, (_, i) => i + 6).map(age => ({
  label: age,
  value: age,
}))

export const languages = [
  { label: 'Anglais', value: 'en' },
  { label: 'Allemand', value: 'de' },
  { label: 'Espagnol', value: 'es' },
  { label: 'Français', value: 'fr' },
]

export const destinations = [
  { label: 'Allemagne', value: 'germany' },
  { label: 'Angleterre', value: 'england' },
  { label: 'Autriche', value: 'austria' },
  { label: 'Belgique', value: 'belgium' },
  { label: 'Canada', value: 'canada' },
  { label: 'Espagne', value: 'spain' },
  { label: 'France', value: 'france' },
  { label: 'Irlande', value: 'ireland' },
  { label: 'Italie', value: 'italy' },
  { label: 'Malte', value: 'malta' },
  { label: 'Suisse', value: 'switzerland' },
  { label: 'USA', value: 'usa' },
  { label: 'Autre', value: 'other' },
]

export const tripTypes = [
  {
    label: 'Summer Camp avec cours de langue standard (15h par semaine)',
    value: 'standard-summer',
  },
  {
    label: 'Summer Camp avec cours de langue intensif ( dès 20h par semaine)',
    value: 'intensive-summer',
  },
  { label: 'Summer Camp sans cours de langue ', value: 'classless-summer' },
  { label: 'Immersion chez le professeur', value: 'immersion' },
  { label: 'Cours pré-universitaire', value: 'uni-prep' },
  { label: 'Voyage humanitaire', value: 'humanitarian' },
  { label: 'Voyage itinérant', value: 'bohemian' },
]

export const activities = [
  {
    label: 'Académiques',
    options: [
      { label: 'Architecture', value: 'architecture' },
      { label: 'Biologie', value: 'biology' },
      { label: 'Business Management', value: 'businessManagement' },
      { label: 'Chimie', value: 'chemistry' },
      { label: 'Computer Science', value: 'computerScience' },
      { label: 'Creative Writing', value: 'creativeWriting' },
      { label: 'Critical Thinking', value: 'criticalThinking' },
      { label: 'Digital Skills', value: 'digitalSkills' },
      { label: 'Droit', value: 'law' },
      { label: 'Economie', value: 'economics' },
      { label: 'Entrepreneurship', value: 'entrepreneurship' },
      { label: 'Géographie', value: 'geography' },
      { label: 'Histoire', value: 'history' },
      { label: 'Ingénieurie', value: 'engineering' },
      { label: 'Intelligence Artificielle', value: 'artificialIntelligence' },
      { label: 'Leadership', value: 'leadership' },
      { label: 'Littérature Anglaise', value: 'englishLiterature' },
      { label: 'Mathématiques', value: 'mathematics' },
      { label: 'Médicine', value: 'medicine' },
      { label: 'Philosophie', value: 'philosophy' },
      { label: 'Physique', value: 'physics' },
      { label: 'Programmation', value: 'programming' },
      { label: 'Psychologie', value: 'psychology' },
      { label: 'Robotique', value: 'robotics' },
      { label: 'SAT Prep', value: 'satPrep' },
      { label: 'Sciences', value: 'sciences' },
      { label: 'STEM', value: 'stem' },
      { label: 'Sustainability', value: 'sustainability' },
      { label: 'Toefl Prep', value: 'toeflPrep' },
    ],
  },
  {
    label: 'Arts',
    options: [
      { label: 'Arts', value: 'arts' },
      { label: 'Chant', value: 'singing' },
      { label: 'Cinéma', value: 'cinema' },
      { label: 'Cuisine', value: 'cooking' },
      { label: 'Danse', value: 'dance' },
      { label: 'Design', value: 'design' },
      { label: 'Dessin', value: 'drawing' },
      { label: 'Fashion', value: 'fashion' },
      { label: 'Film', value: 'film' },
      { label: 'Musique', value: 'music' },
      { label: 'Peinture', value: 'painting' },
      { label: 'Photographie', value: 'photography' },
      { label: 'Théâtre', value: 'theatre' },
    ],
  },
  {
    label: 'Sports',
    options: [
      { label: 'Adventure Sports', value: 'adventureSports' },
      { label: 'Basketball', value: 'basketball' },
      { label: 'Danse', value: 'dance' },
      { label: 'Equitation', value: 'horsebackRiding' },
      { label: 'Football', value: 'football' },
      { label: 'Golf', value: 'golf' },
      { label: 'Hockey', value: 'hockey' },
      { label: 'Karting', value: 'karting' },
      { label: 'Multi sports', value: 'multiSports' },
      { label: 'Natation', value: 'swimming' },
      { label: 'Outdoor Adventure', value: 'outdoorAdventure' },
      { label: 'Polo', value: 'polo' },
      { label: 'Rugby', value: 'rugby' },
      { label: 'Skateboard', value: 'skateboard' },
      { label: 'Surf', value: 'surf' },
      { label: 'Tennis', value: 'tennis' },
      { label: 'Voile', value: 'sailing' },
      { label: 'Water sports', value: 'waterSports' },
    ]
  }
]

export const period = [
  { label: 'Automne', value: 'autumn' },
  { label: 'Pâques', value: 'easter' },
  { label: 'Eté', value: 'summer' },
]

export const duration = [
  { label: '1 semaine', value: 1 },
  { label: '2 semaines', value: 2 },
  { label: '3 semaines', value: 3 },
  { label: 'Plus', value: 0 },
]

export const exam = [
  { label: 'Cambridge', value: 'cambridge' },
  { label: 'IELTS', value: 'ielts' },
  { label: 'Trinity', value: 'trinity' },
  { label: 'DELE', value: 'dele' },
  { label: 'TELC', value: 'telc' },
]
