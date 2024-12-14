// src/features/adminPageApi/adminPageApiSlice.ts
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

interface AdminPageApiState {
  data: string | null;
  loading: boolean;
  error: string | null;
}

const initialState: AdminPageApiState = {
  data: null,
  loading: false,
  error: null,
};

// 비동기 thunk 정의
export const fetchAdminPageApi = createAsyncThunk(
  'adminPageApi/fetchAdminPageApi',
  async () => {
    const response = await fetch('http://localhost:3001/admin-page-api');
    if (!response.ok) {
      throw new Error('Failed to fetch API');
    }
    return response.text(); // 서버 응답을 텍스트로 반환
  }
);

// Slice 생성
const adminPageApiSlice = createSlice({
  name: 'adminPageApi',
  initialState,
  reducers: {}, // 동기 액션은 여기에 추가 가능
  extraReducers: (builder) => {
    builder
      .addCase(fetchAdminPageApi.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAdminPageApi.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchAdminPageApi.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Something went wrong';
      });
  },
});

export const selectAdminPageApi = (state: RootState) => state.adminPageApi;

export default adminPageApiSlice.reducer;
