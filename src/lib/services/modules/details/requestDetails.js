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
          $campus_ids: [ID]
        ) {
          requestDetails(
            parentLastName: $parentLastName
            parentFirstName: $parentFirstName
            parentEmail: $parentEmail
            parentPhone: $parentPhone
            childLastName: $childLastName
            childFirstName: $childFirstName
            childBirthDate: $childBirthDate
            campus_ids: $campus_ids
          )
        }
      `,
      variables: values,
    }),
    transformResponse: response => response.requestDetails,
    providesTags: [],
  })
