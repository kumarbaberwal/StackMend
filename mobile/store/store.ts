import { configureStore } from '@reduxjs/toolkit'
import authReducer from '@/features/auth/authSlice'  // Adjust import path if needed
import { useDispatch } from 'react-redux'

// Configure the Redux store
export const store = configureStore({
  reducer: {
    auth: authReducer, // Add other reducers here as the app grows
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>  // Get the full state structure
export type AppDispatch = typeof store.dispatch  // Get the dispatch type

// Custom hook to use `dispatch` with correct typing
export const useAppDispatch = () => useDispatch<AppDispatch>()  // Ensures type safety when dispatching
