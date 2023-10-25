
import { apiSlice } from '../../app/api/apiSlice';

export const educationApiSplice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        loadEducation: builder.query({
            query: () => ({
                url: '/developer/education',
                validateStatus: (response, result) => {
                    return response.status === 200 && !result.isError;
                }
            }),
            providesTags: { type: 'Education', }
        }),
        getEducation: builder.query({
            query: (id) => ({
                url: `/developer/education/${id}`, use
                validateStatus: (response, result) => {
                    return response.status === 200 && !result.isError;
                }
            }),
            invalidatesTags: (result, error, arg) => [
                { type: 'Education', id: arg.id }
            ]
        }),
        updateEducation: builder.mutation({
            query: education => ({
                url: '/developer/education/update',
                method: 'POST',
                body: {
                    ...education
                }
            }),
            invalidatesTags: (result, error, arg) => [
                { type: 'Education', id: arg.id }
            ]
        }),
        deleteEducation: builder.mutation({
            query: education => ({
                url: '/developer/education/delete',
                method: 'POST',
                body: {
                    ...education
                }
            }),
            // invalidatesTags: (result, error, arg) => [
            //     { type: 'Education', id: arg.id }
            // ]
        }),
 
    })
});

export const {
    useGetEducationQuery, 
    useGetEducationEditQuery, 
    useAddEducationMutation,
    useUpdateEducationMutation,
    useGetDevSkillQuery,
    useUpdateSkillMutation,
    useGetDevAvailabilityQuery,
    useUpdateDevAvailabilityMutation
} = educationApiSplice;
