/**
 * The internal imports
 */
import { api } from '../../api'
import getCampusesQuery from './getCampuses'

export const campusApi = api.injectEndpoints({
  endpoints: build => ({
    getCampuses: getCampusesQuery(build),
  }),
  overrideExisting: false,
})

// Export hooks for usage in functional components
export const { useLazyGetCampusesQuery } = campusApi
