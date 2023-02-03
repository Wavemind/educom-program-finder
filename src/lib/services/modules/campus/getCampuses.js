/**
 * The external imports
 */
import { gql } from 'graphql-request'

export default build =>
  build.query({
    query: () => ({
      document: gql`
        query {
          getCampuses {
            id
            name
            price
            ageBegin
            ageEnd
            arrivalSchedule
            departureSchedule
          }
        }
      `,
      variables: {},
    }),
    transformResponse: response => response.getCampuses,
    providesTags: ['Campus'],
  })
