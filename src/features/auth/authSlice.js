import { createSlice } from '@reduxjs/toolkit';
import { removeAccessToken, setAccessToken } from '../../utils/general';
import { PURGE } from "redux-persist";


const initialToken = null; // AsyncStorage.getItem("accessToken") ? AsyncStorage.getItem("accessToken") : null; 

const authSlice = createSlice({
    name: 'auth',
    initialState: { token: initialToken, isLogged: false },
    reducers: {
        setCredentials: (state, action) => {
            // console.log(action.payload, "Payload")
            const data = action.payload;
            // console.log(data)
            state.token = data;
            state.isLogged = true; 
            // Store token in the local storage 
            setAccessToken(data.accessToken);
        },
        logOut: async (state, action) => {
            state.token = null;
            console.log(removeAccessToken())
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