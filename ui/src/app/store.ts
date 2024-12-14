// src/app/store.ts
import { configureStore } from '@reduxjs/toolkit';
import databaseApiReducer from "../features/database/database-api.slice"
export const store = configureStore({
  reducer: {
    databaseApi: databaseApiReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
