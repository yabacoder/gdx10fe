
import { apiSlice } from '../../app/api/apiSlice';

export const profileApiSplice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getProfile: builder.query({
            query: () => ({
                url: '/profile',
                validateStatus: (response, result) => {
                    return response.status === 200 && !result.isError;
                }
            })
        }),
        addProfile: builder.mutation({
            query: profile => ({
                url: '/profile',
                method: 'POST',
                body: { ...profile }
            }),
            invalidatesTags: [
                { type: 'Profile', id: 'NEW' }
            ]
        }),
        updateProfile: builder.mutation({
            query: profile => ({
                url: '/profile',
                method: 'PATCH',
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
    useAddProfileMutation,
    useUpdateProfileMutation
} = profileApiSplice;