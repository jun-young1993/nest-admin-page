import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '@app/store';
import { MainSidebarState } from './main-sidebar.interface';

const initialState: MainSidebarState = {
  data: null,
};

export const mainSidebarSlice = createSlice({
  name: 'mainSidebar',
  initialState,
  reducers: {},
});

export const selectMainSidebar = (state: RootState) => state.mainSidebar;

export default mainSidebarSlice.reducer;
