export default {
  common: {
    back: 'Back',
  },
  tripSelection: {
    header: 'Trip type',
    subheader: 'Begin by selecting the trip type for your child :',
    juniorCamp: 'Junior Summer Camp (6 - 18 years)',
    adultTrip: 'Adult linguistic trip (16+ years)',
  },
  juniorForm: {
    header: 'Search criteria',
    subheader: 'Select the criteria for the desired program :',
    fields: {
      age: "Participant's age",
      language: 'Language',
      destination: 'Destination',
      tripType: 'Trip types',
      activities: 'Activities',
      period: 'Period',
      duration: 'Duration',
      exam: 'Exam',
    },
    search: 'Begin the search',
  },
  adultForm: {
    header: 'Search criteria',
    subheader: 'Select the criteria for the desired program :',
    fields: {
      language: 'Language',
      destination: 'Destination',
      exam: 'Exam',
    },
    search: 'Begin the search',
  },
  results: {
    header: 'The programs that we propose',
    noResults:
      'No criteria selected, please select criteria above and run a search',
    requestDetails:
      'If one or more of these programmes interest you, you can request further details :',
    requestDetailsButton: 'Request program details',
  },
  detailsForm: {
    header: 'Program details',
    subheader:
      "To receive details for the selected programs, please fill out the form below. You will then receive a PDF with the information necessary to make an informed decision on which program fits your child's needs the best",
    parentInformation: 'Parent Information',
    childInformation: 'Child Information',
    no_date: 'Information unavailable',
    lastName: 'Last name',
    firstName: 'First name',
    email: 'Email address',
    phone: 'Phone number (optional)',
    birthDate: 'Birth date (DD.MM.YYYY)',
    send: 'Send',
    success: 'Details request sent',
  },
  constants: {
    languages: {
      english: 'English',
      german: 'German',
      spanish: 'Spanish',
      french: 'French',
    },
    destinations: {
      germany: 'Germany',
      england: 'England',
      australia: 'Australia',
      austria: 'Austria',
      belgium: 'Belgium',
      canada: 'Canada',
      spain: 'Spain',
      france: 'France',
      ireland: 'Irelande',
      italy: 'Italy',
      malta: 'Malta',
      newZealand: 'New Zealand',
      switzerland: 'Switzerland',
      usa: 'USA',
      other: 'Other',
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
    periods: {
      autumn: 'Autumn',
      easter: 'Easter',
      summer: 'Summer',
    },
    durations: {
      oneWeek: '1 week',
      twoWeeks: '2 weeks',
      threeWeeks: '3 weeks',
      more: 'More',
    },
  },
}
