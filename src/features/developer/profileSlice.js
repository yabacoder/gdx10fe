
import { apiSlice } from '../../app/api/apiSlice';

export const profileApiSplice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getProfile: builder.query({
            query: () => ({
                url: '/developer/profile',
                validateStatus: (response, result) => {
                    return response.status === 200 && !result.isError;
                }
            }),
            providesTags: { type: 'Profile', }
        }),
        getProfileEdit: builder.query({
            query: () => ({
                url: '/developer/profile/edit',
                validateStatus: (response, result) => {
                    return response.status === 200 && !result.isError;
                }
            })
        }),
        addProfile: builder.mutation({
            query: profile => ({
                url: '/developer/profile',
                method: 'POST',
                body: { ...profile }
            }),
            // invalidatesTags: [
            //     { type: 'Profile', id: 'NEW' }
            // ]
        }),
        updateProfile: builder.mutation({
            query: profile => ({
                url: '/developer/profile/edit',
                method: 'POST',
                body: {
                    ...profile
                }
            }),
            // invalidatesTags: (result, error, arg) => [
            //     { type: 'Profile', id: arg.id }
            // ]
        }),
        getDevSkill: builder.query({
            query: () => ({
                url: '/developer/technology',
                validateStatus: (response, result) => {
                    return response.status === 200 && !result.isError;
                }
            })
        }),
        updateSkill: builder.mutation({
            query: profile => ({
                url: '/developer/technology',
                method: 'POST',
                body: {
                    ...profile
                }
            }),
            invalidatesTags: (result, error, arg) => [
                { type: 'Profile', id: arg.id }
            ]
        }),
        getDevAvailability: builder.query({
            query: () => ({
                url: '/developer/availability',
                validateStatus: (response, result) => {
                    return response.status === 200 && !result.isError;
                }
            })
        }),
        updateDevAvailability: builder.mutation({
            query: profile => ({
                url: '/developer/availability',
                method: 'POST', 
                body: {
                    ...profile
                }
            }),
            invalidatesTags: (result, error, arg) => [
                { type: 'Profile', id: arg.id }
            ]
        }),
    })
});

export const {
    useGetProfileQuery, 
    useGetProfileEditQuery, 
    useAddProfileMutation,
    useUpdateProfileMutation,
    useGetDevSkillQuery,
    useUpdateSkillMutation,
    useGetDevAvailabilityQuery,
    useUpdateDevAvailabilityMutation
} = profileApiSplice;
