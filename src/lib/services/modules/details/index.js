/**
 * The internal imports
 */
import { api } from '../../api'
import requestDetailsQuery from './requestDetails'

export const requestDetailsApi = api.injectEndpoints({
  endpoints: build => ({
    requestDetails: requestDetailsQuery(build),
  }),
  overrideExisting: false,
})

// Export hooks for usage in functional components
export const { useLazyRequestDetailsQuery } = requestDetailsApi
