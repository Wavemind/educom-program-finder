/**
 * The external imports
 */
import { gql } from 'graphql-request'

export default build =>
  build.query({
    query: target => ({
      document: gql`
        query ($target: String!) {
          getCountries(target: $target) {
            id
            name
          }
        }
      `,
      variables: { target },
    }),
    transformResponse: response => response.getCountries,
    providesTags: ['Countries'],
  })
