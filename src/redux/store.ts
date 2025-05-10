/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  configureStore,
  combineReducers,
  getDefaultMiddleware,
} from '@reduxjs/toolkit';
import {persistStore, persistReducer} from 'redux-persist';
import AuthSlice from './auth/authSlice';
import AsyncStorage from '@react-native-community/async-storage';
import contactSlice from './auth/contactSlice';

let persistConfigs = {
  key: 'root',
  version: 1,
  storage: AsyncStorage,
};
let rootReducer = combineReducers({
  auth: AuthSlice,
  contact: contactSlice,
});

let persistedReducer = persistReducer(persistConfigs, rootReducer);
export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
