import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import rockyReducer from './rockySlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    rocky: rockyReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

