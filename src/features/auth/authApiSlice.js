import { apiSlice, getCookie } from "../../app/api/apiSlice";
// import { setAccessToken } from "../../utils";
import { logOut, setCredentials } from "./authSlice";
// import { AsyncStorage } from 'react-native';


export const authApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        login: builder.mutation({
            query: credentials => ({
                url: '/auth/login',
                method: 'POST',
                body: { ...credentials }
            }),

            providesTags: (result, error) => [{ type: 'User' }],
            // transformResponse: (apiResponse, meta, arg) => {
            //     let cookie = getCookie('XSRF-TOKEN');
            //     if (typeof cookie != 'undefined') return decodeURIComponent(cookie);

            //     return '';
            // },


        }),
        register: builder.mutation({
            query: credentials => ({
                url: '/auth/register',
                method: 'POST',
                body: { ...credentials }
            }),
            providesTags: (result, error) => [{ type: 'User' }],

        }),
        changePassword: builder.mutation({
            query: credentials => ({
                url: '/auth/change-password',
                method: 'POST',
                body: { ...credentials }
            }),
            providesTags: (result, error) => [{ type: 'User' }],

        }),
        ResetPassword: builder.mutation({
            query: credentials => ({
                url: '/auth/password-recovery',
                method: 'POST',
                body: { ...credentials }
            }),
            providesTags: (result, error) => [{ type: 'User' }],

        }),

        sendLogout: builder.mutation({
            query: () => ({
                url: '/logout',
                method: 'POST',
            }),
            invalidatesTags: [
                { type: 'User' }
            ],
            async onQueryStarted(arg, { dispatch, queryFulfilled }) {
                try {
                    const { data } = await queryFulfilled;
                    // console.log(data);
                    dispatch(logOut());
                    // await AsyncStorage.removeItem("accessToken");
                    setTimeout(() => {
                        dispatch(apiSlice.util.resetApiState());
                    }, 1000);
                } catch (err) {
                    console.log(err);
                }
            }
        }),
        refresh: builder.mutation({
            query: () => ({
                url: '/auth/refresh',
                method: 'GET',
            }),
            async onQueryStarted(arg, { dispatch, queryFulfilled }) {
                try {
                    const { data } = await queryFulfilled;
                    // console.log(data, "Data token");
                    const { accessToken } = data;

                    dispatch(setCredentials({ accessToken }));
                    // await setAccessToken(accessToken);

                } catch (err) {
                    console.log(err);
                }
            }
        }),
    })
});

export const {
    useLoginMutation,
    useRegisterMutation,
    useSendLogoutMutation,
    useRefreshMutation,
    useChangePasswordMutation,
    useResetPasswordMutation
} = authApiSlice; 