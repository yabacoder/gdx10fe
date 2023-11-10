
import { apiSlice } from '../../app/api/apiSlice';

export const projectSplice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        loadProjects: builder.query({
            query: () => ({
                url: '/developer/project/all',
                validateStatus: (response, result) => {
                    return response.status === 200 && !result.isError;
                }
            }),
            providesTags: { type: 'Project', }
        }),
        getTotalProjects: builder.query({ 
            query: () => ({
                url: '/developer/projects/total',
                validateStatus: (response, result) => {
                    return response.status === 200 && !result.isError;
                }
            }),
            providesTags: { type: 'Project', }
        }),
       
        submitProject: builder.mutation({
            query: project => ({
                url: `/developer/project/submit`,
                method: 'POST',
                body: {
                    ...project
                }
            }),
            invalidatesTags: (result, error, arg) => [
                { type: 'Project' }
            ]
        }),
        startProject: builder.mutation({
            query: id => ({
                url: `/developer/project`,
                method: 'POST',
                body: {
                    ...id
                }
            }),
            invalidatesTags: (result, error, arg) => [
                { type: 'Project' }
            ]
        }),
        deleteProject: builder.mutation({
            query: id => ({
                url: `/developer/project/delete/${id}`,
                method: 'POST',
                body: {
                    ...id
                }
            }),
            invalidatesTags: (result, error, arg) => [
                { type: 'Project' }
            ]
        }),
 
    })
});

export const {
   useLoadProjectsQuery,
   useStartProjectMutation,
   useSubmitProjectMutation
} = projectSplice;
