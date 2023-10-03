import { createSlice } from '@reduxjs/toolkit';
// import { getRemoveToken, setAccessToken } from '../../utils';
// import AsyncStorage from '@react-native-async-storage/async-storage';
import { PURGE } from "redux-persist";


const initialToken = null; // AsyncStorage.getItem("accessToken") ? AsyncStorage.getItem("accessToken") : null; 

const authSlice = createSlice({
    name: 'auth',
    initialState: { token: initialToken },
    reducers: {
        setCredentials: (state, action) => {
            // console.log(action.payload, "Payload")
            const { accessToken } = action.payload;
            state.token = accessToken;
            // Store token in the local storage
            // setAccessToken(accessToken)
        },
        logOut: (state, action) => {
            state.token = null;
            // getRemoveToken()   
        },
    },
    extraReducers: (builder) => {
        builder.addCase(PURGE, (state) => {
            // customEntityAdapter.removeAll(state);
        });
    }
});

export const { setCredentials, logOut } = authSlice.actions;

export default authSlice.reducer;

export const selectCurrentToken = (state) => state.auth.token;  