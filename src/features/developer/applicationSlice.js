
import { apiSlice } from '../../app/api/apiSlice';

export const applicationSplice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        loadApplication: builder.query({
            query: () => ({
                url: '/developer/applications',
                validateStatus: (response, result) => {
                    return response.status === 200 && !result.isError;
                }
            }),
            providesTags: { type: 'Application', }
        }),
        applyApplication: builder.mutation({
            query: id => ({
                url: `/developer/jobs/${id}/apply`,
                method: 'POST',
                body: {
                    ...id
                }
            }),
            invalidatesTags: (result, error, arg) => [
                { type: 'Application' }
            ]
        }),
        deleteApplication: builder.mutation({
            query: id => ({
                url: `/developer/application/delete/${id}`,
                method: 'POST',
                body: {
                    ...id
                }
            }),
            invalidatesTags: (result, error, arg) => [
                { type: 'Application' }
            ]
        }),
 
    })
});

export const {
   useLoadApplicationQuery,
   useApplyApplicationMutation,
   useDeleteApplicationMutation
} = applicationSplice;
