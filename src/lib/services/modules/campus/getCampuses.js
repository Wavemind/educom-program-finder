/**
 * The external imports
 */
import { gql } from 'graphql-request'

export default build =>
  build.query({
    query: ({
      activities,
      age,
      destination,
      duration,
      exam,
      language,
      period,
      tripType,
    }) => ({
      document: gql`
        query (
          $activities: [ID!]
          $age: Int
          $destination: [String!]
          $duration: [ID!]
          $exam: String
          $language: [String!]
          $period: [String!]
          $tripType: [String!]
        ) {
          getCampuses(
            activities: $activities
            age: $age
            destination: $destination
            duration: $duration
            exam: $exam
            language: $language
            period: $period
            tripType: $tripType
          ) {
            id
            name
            price
            ageBegin
            ageEnd
            firstDate
            lastDate
            arrivalSchedule
            departureSchedule
            publicDescriptionFr
            publicDescriptionEn
            program {
              subtypeName
            }
            country {
              name
            }
          }
        }
      `,
      variables: {
        activities,
        age,
        destination,
        duration,
        exam,
        language,
        period,
        tripType,
      },
    }),
    transformResponse: response => response.getCampuses,
    providesTags: ['Campus'],
  })
