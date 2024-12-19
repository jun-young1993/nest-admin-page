import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '@app/store';
import { MainSidebarState } from './main-sidebar.interface';

const initialState: MainSidebarState = {
  isOpen: false,
};
export const mainSidebarSlice = createSlice({
  name: 'mainSidebar',
  initialState,
  reducers: {
    open: (state) => {
      state.isOpen = true;
    },
    close: (state) => {
      state.isOpen = false;
    },
  },
});

export const mainSidebarActions = mainSidebarSlice.actions;

export const selectMainSidebar = (state: RootState) => state.mainSidebar;

export default mainSidebarSlice.reducer;
