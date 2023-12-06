
import { apiSlice } from '../../app/api/apiSlice';

export const applicationSplice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        loadJobs: builder.query({
            query: (page) => ({
                url: `/jobs/${page}`,
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
                url: `/developer/application/delete`,
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
   useLoadJobsQuery
} = applicationSplice;
