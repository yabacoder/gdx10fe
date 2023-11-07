
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
                url: `/developer/education/${id}`,
                validateStatus: (response, result) => {
                    return response.status === 200 && !result.isError;
                }
            }),
            invalidatesTags: (result, error, arg) => [
                { type: 'Education' }
            ]
        }),
        addEducation: builder.mutation({
            query: education => ({
                url: '/developer/education',
                method: 'POST',
                body: {
                    ...education
                }
            }),
            invalidatesTags: (result, error, arg) => [
                { type: 'Education' }
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
                { type: 'Education' }
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
            //     { type: 'Education' }
            // ]
        }),
 
    })
});

export const {
    useLoadEducationQuery,
    useGetEducationQuery, 
    useGetEducationEditQuery, 
    useAddEducationMutation,
    useUpdateEducationMutation,
    useDeleteEducationMutation
} = educationApiSplice;
