/**
 * The external imports
 */
import { gql } from 'graphql-request'

export default build =>
  build.query({
    query: target => ({
      document: gql`
        query {
          getPeriods {
            id
            nameTranslations {
              fr
              en
            }
          }
        }
      `,
      variables: { target },
    }),
    transformResponse: response => response.getPeriods,
    providesTags: ['Periods'],
  })
