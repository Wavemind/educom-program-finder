/**
 * The external imports
 */
import { gql } from 'graphql-request'

export default build =>
  build.query({
    query: () => ({
      document: gql`
        query {
          getExams {
            id
            nameTranslations {
              fr
              en
            }
          }
        }
      `,
      variables: {},
    }),
    transformResponse: response => response.getExams,
    providesTags: ['Exams'],
  })
