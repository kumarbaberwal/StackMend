import { API_URL } from '@/constants/api';
import { RootState } from '@/store/store';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const solutionApi = createApi({
    reducerPath: 'solutionApi',
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
    tagTypes: ['Solutions'],
    endpoints: (builder) => ({
        getAllSolutionsByErrorId: builder.query<SolutionsResponse, { id: string }>({
            query: ({ id }) => `/solution/${id}`,
            providesTags: ['Solutions'],
            serializeQueryArgs: ({ endpointName }) => endpointName, // Key by endpointName only (ignore page param)
            // Merge paginated errors with deduplication (based on _id)
            merge: (currentCache, newData) => {
                const uniqueMap = new Map();
                [...(currentCache.solutions || []), ...newData.solutions].forEach((item) => {
                    uniqueMap.set(item._id, item);
                });
                currentCache.solutions = Array.from(uniqueMap.values());
                currentCache.currentPage = newData.currentPage;
                currentCache.totalPages = newData.totalPages;
            },
            forceRefetch({ currentArg, previousArg }) {
                return currentArg?.id !== previousArg?.id;
            }
        }),

        submitSolution: builder.mutation<SolutionItem, SubmitSolutionRequest>({
            query: ({ errorId, body }) => ({
                url: `/solution/${errorId}`,
                method: 'POST',
                body,
            }),
            invalidatesTags: ['Solutions'],
            async onQueryStarted(_, { dispatch, queryFulfilled, getState }) {
                const state = getState() as RootState;

                try {
                    const { data: createdError } = await queryFulfilled;

                    // Update all cached pages of getAllErrors
                    const entries = solutionApi.util.selectInvalidatedBy(state, ['Solutions'])
                        .filter(entry => entry.endpointName === 'getAllErrors');

                    entries.forEach(entry =>
                        dispatch(
                            solutionApi.util.updateQueryData('getAllSolutionsByErrorId', entry.originalArgs as any, (draft) => {
                                draft.solutions = [createdError, ...(draft.solutions || [])];
                            })
                        )
                    );
                } catch {
                    // No optimistic patching to undo in this case.
                }
            },
        }),
    }),
    refetchOnFocus: true,
    refetchOnReconnect: true,
});

export const {
    useGetAllSolutionsByErrorIdQuery,
    useSubmitSolutionMutation,
} = solutionApi;
