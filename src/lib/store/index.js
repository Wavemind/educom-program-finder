/**
 * The external imports
 */
import { configureStore } from '@reduxjs/toolkit'

/**
 * The internal imports
 */
import { api } from '../services/api'

export const store = configureStore({
  reducer: {
    api: api.reducer,
  },
  middleware: gDM => gDM().concat(api.middleware),
})
