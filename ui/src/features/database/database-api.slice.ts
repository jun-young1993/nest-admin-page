// src/features/adminPageApi/adminPageApiSlice.ts
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

interface DatabaseApiState {
  data: string | null;
  loading: boolean;
  error: string | null;
}

const initialState: DatabaseApiState = {
  data: null,
  loading: false,
  error: null,
};

// 비동기 thunk 정의
export const fetchDatabaseApi = createAsyncThunk(
  'databaseApi/fetchDatabaseApi',
  async () => {
    const response = await fetch('http://localhost:3001/admin-page-api');
    if (!response.ok) {
      throw new Error('Failed to fetch API');
    }
    return response.text(); // 서버 응답을 텍스트로 반환
  }
);

// Slice 생성
const databaseSlice = createSlice({
  name: 'databaseApi',
  initialState,
  reducers: {}, // 동기 액션은 여기에 추가 가능
  extraReducers: (builder) => {
    builder
      .addCase(fetchDatabaseApi.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchDatabaseApi.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchDatabaseApi.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Something went wrong';
      });
  },
});

export const selectDatabaseApi = (state: RootState) => state.databaseApi;

export default databaseSlice.reducer;
