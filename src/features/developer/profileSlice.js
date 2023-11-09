
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
        getProfileDp: builder.query({
            query: (id) => ({
                url: '/profile/dp/'+id,
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
                url: '/developer/profile/technology',
                validateStatus: (response, result) => {
                    return response.status === 200 && !result.isError;
                }
            })
        }),
        updateSkill: builder.mutation({
            query: profile => ({
                url: '/developer/profile/technology',
                method: 'POST',
                body: {
                    ...profile
                }
            }),
            invalidatesTags: (result, error, arg) => [
                { type: 'Profile', id: arg.id }
            ]
        }),
        uploadCV: builder.mutation({
            query: profile => ({
                url: '/developer/profile/upload/cv',
                method: 'POST',
                body: {
                    ...profile
                }
            }),
            invalidatesTags: (result, error, arg) => [
                { type: 'Profile'}
            ]
        }),
        uploadDP: builder.mutation({
            query: profile => ({
                url: '/developer/profile/upload/image',
                method: 'POST',
                body: {
                    ...profile
                }
            }),
            invalidatesTags: (result, error, arg) => [
                { type: 'Profile' }
            ]
        }),
        getDevAvailability: builder.query({
            query: () => ({
                url: '/developer/profile/availability',
                validateStatus: (response, result) => {
                    return response.status === 200 && !result.isError;
                }
            })
        }),
        updateDevAvailability: builder.mutation({
            query: profile => ({
                url: '/developer/profile/availability',
                method: 'POST', 
                body: {
                    ...profile
                }
            }),
            invalidatesTags: (result, error, arg) => [
                { type: 'Profile' }
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
    useUpdateDevAvailabilityMutation,
    useUploadCVMutation,
    useUploadDPMutation,
    useGetProfileDpQuery
} = profileApiSplice;
