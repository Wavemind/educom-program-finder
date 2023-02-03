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
                en
              }
            }
            sports {
              id
              nameTranslations {
                fr
                en
              }
            }
            academics {
              id
              nameTranslations {
                fr
                en
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
