import { configureStore } from '@reduxjs/toolkit'
import authReducer from '@/features/auth/authSlice'
import { useDispatch } from 'react-redux'
import { errorApi } from '@/services/errorsApi';
import { setupListeners } from '@reduxjs/toolkit/query';
import { solutionApi } from "@/services/solutionsApi";

// Configure the Redux store
export const store = configureStore({
  reducer: {
    auth: authReducer, // Add other reducers here as the app grows
    [errorApi.reducerPath]: errorApi.reducer,
    [solutionApi.reducerPath]: solutionApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(errorApi.middleware, solutionApi.middleware)
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>  // Get the full state structure
export type AppDispatch = typeof store.dispatch  // Get the dispatch type

// Custom hook to use `dispatch` with correct typing
export const useAppDispatch = () => useDispatch<AppDispatch>()  // Ensures type safety when dispatching

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
setupListeners(store.dispatch);