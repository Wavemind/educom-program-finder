export default {
  common: {
    back: 'Retour',
    error:
      'Notre systeme de recherche est indisponible pour le moment. Veuillez réessayer plus tard.',
  },
  tripSelection: {
    header: '',
    subheader: 'Choisissez le type de séjour pour votre enfant :',
    juniorCamp: 'Summer Camp Junior (3-25 ans)',
    adultTrip: 'Séjour Linguistique (+16 ans)',
  },
  juniorForm: {
    header: 'Critères de recherche',
    subheader: 'Vous pouvez sélectionner plusieurs options par critère.',
    fields: {
      age: "Âge de l'enfant",
      language: 'Langues',
      destination: 'Destinations',
      tripType: 'Types de séjour',
      activities: 'Activités',
      period: 'Période',
      duration: 'Durée du séjour',
      exam: 'Examens',
    },
    search: 'Lancer la recherche',
  },
  adultForm: {
    header: 'Critères de recherche',
    subheader: 'Vous pouvez sélectionner plusieurs options par critère',
    fields: {
      language: 'Langues',
      destination: 'Destinations',
      exam: 'Examens',
    },
    search: 'Lancer la recherche',
  },
  results: {
    header: 'Voici une première sélection de programmes, selon vos critères :',
    noResults:
      'Aucun critère choisi, sélectionnez vos critères ci-dessus et lancez une recherche',
    requestDetailsButton: 'Recevoir les détails des programmes',
  },
  detailsForm: {
    header: '',
    subheader:
      'Merci de remplir le formulaire ci-dessous afin de consulter le détail des programmes. Vous recevrez un email vous donnant accès à votre espace personnel sur notre site, sur lequel vous trouverez toutes les informations concernant les séjours sélectionnés (brochures, dates, prix). <br /> <br /> Carol, Aurélie ou Victoria seront également en contact avec vous pour vous aider dans votre choix et répondre à vos questions !',
    parentInformation: 'Informations du parent',
    childInformation: "Informations de l'enfant",
    no_date: 'Information indisponible',
    lastName: 'Nom',
    firstName: 'Prénom',
    email: 'Adresse e-mail',
    phone: 'Téléphone',
    birthDate: 'Date de naissance (JJ.MM.AAAA)',
    send: 'Envoyer',
    success: 'Demande de détails envoyé',
  },
  constants: {
    activities: {
      arts: 'Arts',
      academics: 'Academics',
      sports: 'Sports',
    },
    months: {
      january: 'Janvier',
      february: 'Février',
      march: 'Mars',
      april: 'Avril',
      may: 'Mai',
      june: 'Juin',
      july: 'Juillet',
      august: 'Aout',
      september: 'Septembre',
      october: 'Octobre',
      november: 'Novembre',
      december: 'Decembre',
    },
    languages: {
      english: 'Anglais',
      german: 'Allemand',
      spanish: 'Espagnol',
      french: 'Français',
    },
    destinations: {
      germany: 'Allemagne',
      england: 'Angleterre',
      australia: 'Australie',
      austria: 'Autriche',
      belgium: 'Belgique',
      canada: 'Canada',
      spain: 'Espagne',
      france: 'France',
      ireland: 'Irlande',
      italy: 'Italie',
      malta: 'Malte',
      newZealand: 'Nouvelle Zélande',
      switzerland: 'Suisse',
      usa: 'USA',
      other: 'Autre',
    },
    types: {
      standardSummer:
        'Summer Camp avec cours de langue standard (15h par semaine)',
      intensiveSummer:
        'Summer Camp avec cours de langue intensif (dès 20h par semaine)',
      classlessSummer: 'Summer Camp sans cours de langue',
      immersion: 'Immersion chez le professeur',
      uniPrep: 'Cours pré-universitaire',
      humanitarian: 'Voyage humanitaire',
      bohemian: 'Voyage itinérant',
    },
    durations: {
      oneWeek: '1 semaine',
      twoWeeks: '2 semaines',
      threeWeeks: '3 semaines',
      more: 'Plus',
    },
  },
  validations: {
    required: '${path} est obligatoire',
    email: '${path} doit être une adresse email valid',
  },
}
