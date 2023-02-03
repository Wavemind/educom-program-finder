/**
 * The internal imports
 */
import { api } from '../../api'
import getActivitiesQuery from './getActivities'
import getCountriesQuery from './getCountries'
import getExamsQuery from './getExams'

export const formDataApi = api.injectEndpoints({
  endpoints: build => ({
    getActivities: getActivitiesQuery(build),
    getCountries: getCountriesQuery(build),
    getExams: getExamsQuery(build),
  }),
  overrideExisting: false,
})

// Export hooks for usage in functional components
export const {
  useLazyGetActivitiesQuery,
  useLazyGetCountriesQuery,
  useLazyGetExamsQuery,
} = formDataApi
