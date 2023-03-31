/**
 * The internal imports
 */
import { api } from '../../api'
import getActivitiesQuery from './getActivities'
import getCountriesQuery from './getCountries'
import getExamsQuery from './getExams'
import getPeriodsQuery from './getPeriods'

export const formDataApi = api.injectEndpoints({
  endpoints: build => ({
    getActivities: getActivitiesQuery(build),
    getCountries: getCountriesQuery(build),
    getExams: getExamsQuery(build),
    getPeriods: getPeriodsQuery(build),
  }),
  overrideExisting: false,
})

// Export hooks for usage in functional components
export const {
  useGetActivitiesQuery,
  useGetCountriesQuery,
  useGetExamsQuery,
  useGetPeriodsQuery,
} = formDataApi
