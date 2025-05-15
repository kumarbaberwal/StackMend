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
      serializeQueryArgs: ({ endpointName }) => endpointName, // Key by endpointName only (ignore page param)
      // Merge paginated errors with deduplication (based on _id)
      merge: (currentCache, newData) => {
        const uniqueMap = new Map();
        [...(currentCache.errors || []), ...newData.errors].forEach((item) => {
          uniqueMap.set(item._id, item);
        });
        currentCache.errors = Array.from(uniqueMap.values());
        currentCache.currentPage = newData.currentPage;
        currentCache.totalPages = newData.totalPages;
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
      invalidatesTags: ['Errors'],
      async onQueryStarted(_, { dispatch, queryFulfilled, getState }) {
        const state = getState() as RootState;

        try {
          const { data: createdError } = await queryFulfilled;

          // Update all cached pages of getAllErrors
          const entries = errorApi.util.selectInvalidatedBy(state, ['Errors'])
            .filter(entry => entry.endpointName === 'getAllErrors');

          entries.forEach(entry =>
            dispatch(
              errorApi.util.updateQueryData('getAllErrors', entry.originalArgs as any, (draft) => {
                draft.errors = [createdError, ...(draft.errors || [])];
              })
            )
          );
        } catch {
          // No optimistic patching to undo in this case.
        }
      },
    }),

    deleteError: builder.mutation<{ message: string }, { id: string }>({
      query: ({ id }) => ({
        url: `/error/${id}`,
        method: 'DELETE'
      }),
      invalidatesTags: ['Errors'],
      async onQueryStarted({ id }, { dispatch, queryFulfilled, getState }) {
        const state = getState() as RootState;

        // Optimistically remove from all cached pages
        const entries = errorApi.util.selectInvalidatedBy(state, ['Errors'])
          .filter(entry => entry.endpointName === 'getAllErrors');

        const patches = entries.map(entry =>
          dispatch(
            errorApi.util.updateQueryData('getAllErrors', entry.originalArgs as any, (draft) => {
              draft.errors = draft.errors?.filter((e) => e._id !== id);
            })
          )
        );

        try {
          await queryFulfilled;
        } catch {
          patches.forEach((p) => p.undo());
        }
      },
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
