/**
 * The external imports
 */
import { gql } from 'graphql-request'

export default build =>
  build.query({
    query: () => ({
      document: gql`
        query {
          getActivities {
            arts {
              id
              nameTranslations {
                fr
              }
            }
            sports {
              id
              nameTranslations {
                fr
              }
            }
            academics {
              id
              nameTranslations {
                fr
              }
            }
          }
        }
      `,
      variables: {},
    }),
    transformResponse: response => response.getActivities,
    providesTags: ['Activities'],
  })
