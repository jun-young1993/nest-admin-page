// src/app/store.ts
import { configureStore } from '@reduxjs/toolkit';
import databaseReducer from "@features/database/database.slice"
import mainSidebarReducer from "@features/main-sidebar/main-sidebar.slice"

export const store = configureStore({
  reducer: {
    database: databaseReducer,
    mainSidebar: mainSidebarReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
