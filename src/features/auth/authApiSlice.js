import { apiSlice } from "../../app/api/apiSlice";
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
            async onQueryStarted(arg, { dispatch, queryFulfilled }) {
                try {

                    const { data } = await queryFulfilled;
                    // console.log(data, "Data token");
                    // const { accessToken } = data;
                    // console.log(data, "Feedback from server")

                    // dispatch(setCredentials({ accessToken }));
                    // await setAccessToken(accessToken);

                } catch (err) {
                    console.log(err, "Error from server");
                }
            }
        }),
        register: builder.mutation({
            query: credentials => ({
                url: '/auth/register',
                method: 'POST',
                body: { ...credentials }
            }),
            invalidatesTags: [
                { type: 'User' }
            ],
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
        sendLogout: builder.mutation({
            query: () => ({
                url: '/auth/logout',
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
} = authApiSlice; 