/**
 * The external imports
 */
import { gql } from 'graphql-request'

export default build =>
  build.query({
    query: () => ({
      document: gql`
        query {
          getCountries {
            id
            name
          }
        }
      `,
      variables: {},
    }),
    transformResponse: response => response.getCountries,
    providesTags: ['Countries'],
  })
