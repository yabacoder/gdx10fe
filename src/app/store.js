import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { apiSlice } from './api/apiSlice';
import authReducer from '../features/auth/authSlice';

export const rootReducers = combineReducers({
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth: authReducer,  //un comment if bug persists 
});

const persistConfig = {
    key: 'root',
    storage: storage,
    whitelist: ['auth'],
    // blacklist: ['classApiSlice'] 
}; 
const persistedReducer = persistReducer(persistConfig, rootReducers);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }).concat(apiSlice.middleware),
}); 

setupListeners(store.dispatch);

export const persistor = persistStore(store);
// export default store;
