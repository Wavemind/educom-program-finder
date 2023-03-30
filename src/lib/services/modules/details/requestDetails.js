/**
 * The external imports
 */
import { gql } from 'graphql-request'

export default build =>
  build.query({
    query: values => ({
      document: gql`
        query (
          $parentLastName: String
          $parentFirstName: String
          $parentEmail: String
          $parentPhone: String
          $childLastName: String
          $childFirstName: String
          $childBirthDate: String
          $selectedForm: String
          $activities: [ID!]
          $age: Int
          $destination: [String!]
          $duration: Int
          $exam: String
          $language: [String!]
          $period: [ID!]
          $tripType: [String!]
          $campusIds: [ID!]
        ) {
          requestDetails(
            requestDetails: {
              parentLastName: $parentLastName
              parentFirstName: $parentFirstName
              parentEmail: $parentEmail
              parentPhone: $parentPhone
              childLastName: $childLastName
              childFirstName: $childFirstName
              childBirthDate: $childBirthDate
              selectedForm: $selectedForm
              activities: $activities
              age: $age
              destination: $destination
              duration: $duration
              exam: $exam
              language: $language
              period: $period
              tripType: $tripType
              campusIds: $campusIds
            }
          )
        }
      `,
      variables: values,
    }),
    transformResponse: response => response.requestDetails,
    providesTags: [],
  })
