// src/features/adminPageApi/adminPageApiSlice.ts
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';

import { RootState } from '../../app/store';
import { DatabaseState, DatabaseTableName } from './database.interface';

const initialState: DatabaseState = {
  entites: [],
  selectedTable: null,
  loading: false,
  error: null,
};

export const fetchTableApi = createAsyncThunk(
  'databaseApi/fetchTableApi',
  async () => {
    const response = await fetch(
      'http://localhost:3001/admin-page/typeorm/table'
    );
    if (!response.ok) {
      throw new Error('Failed to fetch API');
    }
    return response.json();
  }
);

export const fetchEntityApi = createAsyncThunk(
  'databaseApi/fetchEntityApi',
  async () => {
    const response = await fetch(
      'http://localhost:3001/admin-page/typeorm/entity'
    );
    if (!response.ok) {
      throw new Error('Failed to fetch API');
    }
    return response.json();
  }
);

// Slice 생성
const databaseSlice = createSlice({
  name: 'database',
  initialState,
  reducers: {
    setSelectedTable(state, action: PayloadAction<DatabaseTableName>) {
      state.selectedTable = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchEntityApi.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchEntityApi.fulfilled, (state, action) => {
        state.loading = false;
        state.entites = action.payload;
      })
      .addCase(fetchEntityApi.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Something went wrong';
      });
  },
});

export const { setSelectedTable } = databaseSlice.actions;

export const selectDatabase = (state: RootState) => state.database;

export default databaseSlice.reducer;
