/**
 * The external imports
 */
import { createApi } from '@reduxjs/toolkit/query/react'
import { graphqlRequestBaseQuery } from '@rtk-query/graphql-request-base-query'

export const api = createApi({
  baseQuery: graphqlRequestBaseQuery({
    url: `${process.env.REACT_APP_PUBLIC_API_URL}/graphql`,
  }),
  refetchOnMountOrArgChange: true,
  endpoints: () => ({}),
  tagTypes: [],
})
