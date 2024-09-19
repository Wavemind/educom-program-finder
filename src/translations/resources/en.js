export default {
  common: {
    back: 'Back',
    error:
      'Our search system is unavailable at the moment. Please try again later.',
  },
  tripSelection: {
    header: '',
    subheader: 'Choose the type of programme for your child :',
    juniorCamp: 'Junior Summer Camp (3-25 yo)',
    adultTrip: 'Language Course (+16 yo)',
  },
  juniorForm: {
    header: 'Enter your search criteria',
    subheader: 'You can select several options in each field.',
    fields: {
      age: "Participant's age",
      language: 'Languages',
      destination: 'Destinations',
      tripType: 'Trip types',
      activities: 'Activities',
      period: 'Period',
      duration: 'Duration',
      exam: 'Examens',
    },
    updating:
      'Our partners are currently working on their programmes for the summer of 2025.',
    information: 'All the information may not be up to date yet.',
    search: 'Search',
  },
  adultForm: {
    header: '',
    subheader: 'Select the criteria for the desired program :',
    fields: {
      language: 'Language',
      destination: 'Destination',
      exam: 'Exam',
    },
    search: 'Begin the search',
  },
  results: {
    header:
      'Please find a first selection of programmes according to your criteria:',
    noResults:
      'No criteria selected, please select criteria above and run a search',
    requestDetailsButton: 'Send me the programme details',
  },
  detailsForm: {
    header: 'Program details',
    subheader:
      'Please fill out the form below to view the programme details. You will receive an email giving you access to your personal space on our website, where you will find all the information regarding the selected courses (brochures, dates, prices).<br />Carol, Aurélie or Victoria will also be in contact with you to help you with your choice and answer your questions!',
    parentInformation: 'Parent Information',
    childInformation: 'Child Information',
    no_date: 'Information unavailable',
    lastName: 'Last name',
    firstName: 'First name',
    email: 'Email address',
    phone: 'Phone number',
    birthDate: 'Birth date (DD.MM.YYYY)',
    send: 'Send',
    success: 'Details request sent',
  },
  success: {
    header: '',
    subheader:
      'Thank you for submitting your request. You have received an automated message giving you access to your personal page where you will be able to access the details for the selected camps.<br /> We will also analyse your request internally and complete if according to the needs identified. Thank you for your interest.',
  },
  constants: {
    activities: {
      arts: 'Arts',
      academics: 'Academics',
      sports: 'Sports',
    },
    months: {
      january: 'January',
      february: 'February',
      march: 'March',
      april: 'April',
      may: 'May',
      june: 'June',
      july: 'July',
      august: 'August',
      september: 'September',
      october: 'October',
      november: 'November',
      december: 'December',
    },
    languages: {
      english: 'English',
      german: 'German',
      spanish: 'Spanish',
      french: 'French',
    },
    destinations: {
      de: 'Germany',
      en: 'England',
      at: 'Austria',
      be: 'Belgium',
      ca: 'Canada',
      es: 'Spain',
      fr: 'France',
      ir: 'Irelande',
      it: 'Italy',
      pt: 'Portugal',
      ma: 'Malta',
      nz: 'New Zealand',
      ch: 'Switzerland',
      us: 'USA',
    },
    types: {
      standardSummer:
        'Summer Camp with standard languages courses (15h per week)',
      intensiveSummer:
        'Summer Camp with intensive language courses (from 20h per week)',
      classlessSummer: 'Summer Camp without language courses',
      immersion: 'Immersion with a teacher',
      uniPrep: 'University prep',
      humanitarian: 'Humanitarian trip',
      bohemian: 'Traveling trip',
    },
    durations: {
      oneWeek: '1 week',
      twoWeeks: '2 weeks',
      threeWeeks: '3 weeks',
      more: 'More',
    },
  },
  validations: {
    required: '${path} is required',
    email: '${path} must be a valid email',
  },
}
