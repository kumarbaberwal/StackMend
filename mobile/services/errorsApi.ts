import { API_URL } from '@/constants/api';
import { RootState } from '@/store/store';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const errorApi = createApi({
  reducerPath: 'errorApi',
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL, // Update if needed
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).auth?.token;
      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }
      return headers;
    }
  }),
  tagTypes: ['Errors'],
  endpoints: (builder) => ({
    getAllErrors: builder.query<GetAllErrorsResponse, { page?: number; limit?: number }>({
      query: ({ page = 1, limit = 5 }) => `/error?page=${page}&limit=${limit}`,
      providesTags: ['Errors'],
      serializeQueryArgs: ({ endpointName }) => endpointName,
      merge: (currentCache, newItems) => {
        currentCache.errors = [...currentCache.errors, ...newItems.errors];
        currentCache.currentPage = newItems.currentPage;
        currentCache.totalErrors = newItems.totalErrors;
        currentCache.totalPages = newItems.totalPages;
      },
      forceRefetch({ currentArg, previousArg }) {
        return currentArg?.page !== previousArg?.page;
      }
    }),


    submitError: builder.mutation<Error, SubmitErrorRequest>({
      query: (body) => ({
        url: '/error',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Errors']
    }),

    deleteError: builder.mutation<{ message: string }, { id: string }>({
      query: ({ id }) => ({
        url: `/error/${id}`,
        method: 'DELETE'
      }),
      invalidatesTags: ['Errors']
    }),

    getAllErrorsByUser: builder.query<ErrorByUser[], void>({
      query: () => `/error/user`,
      providesTags: ['Errors']
    }),

  }),
  refetchOnFocus: true,
  refetchOnReconnect: true,
});

export const {
  useGetAllErrorsQuery,
  useSubmitErrorMutation,
  useGetAllErrorsByUserQuery,
  useDeleteErrorMutation,
} = errorApi;
