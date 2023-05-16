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
      target,
    }) => ({
      document: gql`
        query (
          $activities: [ID!]
          $age: Int
          $destination: [String!]
          $duration: Int
          $exam: String
          $language: [String!]
          $period: [ID!]
          $tripType: [String!]
          $target: String!
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
            target: $target
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
            mainImage
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
        target,
      },
    }),
    transformResponse: response => response.getCampuses,
    providesTags: ['Campus'],
  })
