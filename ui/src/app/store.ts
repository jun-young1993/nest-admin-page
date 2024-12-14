// src/app/store.ts
import { configureStore } from '@reduxjs/toolkit';
import adminPageApiReducer from "../features/database/database-api.slice"
export const store = configureStore({
  reducer: {
    adminPageApi: adminPageApiReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
