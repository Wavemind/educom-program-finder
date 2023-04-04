export default {
  common: {
    back: 'Retour',
    error:
      'Notre systeme de recherche est indisponible pour le moment. Veuillez réessayer plus tard.',
  },
  tripSelection: {
    header: 'Type de séjour',
    subheader: 'Commencez par choisir le type de séjour pour votre enfant :',
    juniorCamp: 'Summer Camp Junior (6 - 18 ans)',
    adultTrip: 'Séjour linguistique adulte (16+ ans)',
  },
  juniorForm: {
    header: 'Critères de recherche',
    subheader: 'Choisissez mainenant les critères des programmes désirés :',
    fields: {
      age: "Âge de l'enfant",
      language: 'Langue',
      destination: 'Destination',
      tripType: 'Types de séjour',
      activities: 'Activités',
      period: 'Période',
      duration: 'Durée du séjour',
      exam: 'Examen',
    },
    search: 'Lancer la recherche',
  },
  adultForm: {
    header: 'Critères de recherche',
    subheader: 'Choisissez mainenant les critères des programmes désirés :',
    fields: {
      language: 'Langue',
      destination: 'Destination',
      exam: 'Examen',
    },
    search: 'Lancer la recherche',
  },
  results: {
    header: 'Les programmes que nous vous proposons',
    noResults:
      'Aucun critère choisi, sélectionnez vos critères ci-dessus et lancez une recherche',
    requestDetails:
      "Si l'un ou plusieurs de ces programmes vous intéresse, demandez-nous les détails :",
    requestDetailsButton: 'Demander les détails des programmes',
  },
  detailsForm: {
    header: 'Détails des programmes',
    subheader:
      'Pour recevoir les détails de nos programmes veuillez svp remplir le formulaire de recherche ci-dessous, vous recevrez un fichier PDF avec toutes les informations nécessaire qui vous permettront de prendre une décision sur celui qui convient le mieux aux besoins de votre enfant.',
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
