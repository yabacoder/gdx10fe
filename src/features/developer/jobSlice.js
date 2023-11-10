
import { apiSlice } from '../../app/api/apiSlice';

export const jobSplice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        loadJobs: builder.query({
            query: () => ({
                url: '/jobs',
                validateStatus: (response, result) => {
                    return response.status === 200 && !result.isError;
                }
            }),
            providesTags: { type: 'Job', }
        }),
        loadRecentJobs: builder.query({
            query: () => ({
                url: '/jobs/recent',
                validateStatus: (response, result) => {
                    return response.status === 200 && !result.isError;
                }
            }),
            providesTags: { type: 'Job', }
        }),
        loadRelatedJobs: builder.query({
            query: () => ({
                url: '/jobs/recent',
                validateStatus: (response, result) => {
                    return response.status === 200 && !result.isError;
                }
            }),
            providesTags: { type: 'Job', }
        }),
        applyJob: builder.mutation({
            query: id => ({
                url: `/developer/jobs/${id}/apply`,
                method: 'POST',
                body: {
                    ...id
                }
            }),
            invalidatesTags: (result, error, arg) => [
                { type: 'Job' }
            ]
        }),
        deleteJob: builder.mutation({
            query: id => ({
                url: `/developer/job/delete/${id}`,
                method: 'POST',
                body: {
                    ...id
                }
            }),
            invalidatesTags: (result, error, arg) => [
                { type: 'Job' }
            ]
        }),
 
    })
});

export const {
   useLoadJobQuery,
   useApplyJobMutation,
   useLoadRecentJobsQuery,
   useLoadRelatedJobsQuery
} = jobSplice;
