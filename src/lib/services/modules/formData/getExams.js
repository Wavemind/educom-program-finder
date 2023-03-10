/**
 * The external imports
 */
import { gql } from 'graphql-request'

export default build =>
  build.query({
    query: target => ({
      document: gql`
        query ($target: String!) {
          getExams(target: $target) {
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
    transformResponse: response => response.getExams,
    providesTags: ['Exams'],
  })
