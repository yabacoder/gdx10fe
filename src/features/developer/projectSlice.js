
import { apiSlice } from '../../app/api/apiSlice';

export const projectSplice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        loadProjects: builder.query({
            query: () => ({
                url: '/developer/projects/all',
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
                url: `/developer/projects/submit`, 
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
            query: project => ({
                url: `/developer/projects/start`, 
                method: 'POST',
                body: {
                    ...project
                }
            }),
            invalidatesTags: (result, error, arg) => [
                { type: 'Project' }
            ]
        }),
        requestProject: builder.query({
            query: id => ({
                url: `/developer/projects/request`,
                method: 'GET',  
            }),
            invalidatesTags: (result, error, arg) => [
                { type: 'Project' }
            ]
        }),
        deleteProject: builder.mutation({
            query: id => ({
                url: `/developer/projects/${id}`,
                method: 'DELETE',
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
   useRequestProjectQuery,
   useSubmitProjectMutation,
   useStartProjectMutation
} = projectSplice;
