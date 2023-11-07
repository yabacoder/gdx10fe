
import { apiSlice } from '../../app/api/apiSlice';

export const workExperienceApiSplice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        loadWorkExperience: builder.query({
            query: () => ({
                url: '/developer/work_experience',
                validateStatus: (response, result) => {
                    return response.status === 200 && !result.isError;
                }
            }),
            providesTags: { type: 'WorkExperience', }
        }),
        getWorkExperience: builder.query({
            query: (id) => ({
                url: `/developer/work_experience/${id}`,
                validateStatus: (response, result) => {
                    return response.status === 200 && !result.isError;
                }
            }),
            invalidatesTags: (result, error, arg) => [
                { type: 'WorkExperience' }
            ]
        }),
        updateWorkExperience: builder.mutation({
            query: workExperience => ({
                url: '/developer/work_experience/update',
                method: 'POST',
                body: {
                    ...workExperience
                }
            }),
            invalidatesTags: (result, error, arg) => [
                { type: 'WorkExperience' }
            ]
        }),
        addWorkExperience: builder.mutation({
            query: workExperience => ({
                url: '/developer/work_experience',
                method: 'POST',
                body: {
                    ...workExperience
                }
            }),
            invalidatesTags: (result, error, arg) => [
                { type: 'WorkExperience' }
            ]
        }),
        deleteWorkExperience: builder.mutation({
            query: workExperience => ({
                url: '/developer/work_experience/delete',
                method: 'POST',
                body: {
                    ...workExperience
                }
            }),
            // invalidatesTags: (result, error, arg) => [
            //     { type: 'WorkExperience' }
            // ]
        }),
 
    })
});

export const {
    useLoadWorkExperienceQuery,
    useGetWorkExperienceQuery, 
    useGetWorkExperienceEditQuery, 
    useAddWorkExperienceMutation,
    useUpdateWorkExperienceMutation,
    useDeleteWorkExperienceMutation
} = workExperienceApiSplice;
