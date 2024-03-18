import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from './store';

interface ModeSlice {
  value: 'edit' | 'preview';
}

const initialState: ModeSlice = {
  value: 'edit',
};

export const modeSlice = createSlice({
  name: 'mode',
  initialState,
  reducers: {
    setEditMode: (state) => {
      state.value = 'edit';
    },
    setPreviewMode: (state) => {
      state.value = 'preview';
    },
    toggleMode: (state) => {
      if (state.value === 'edit') state.value = 'preview';
      else state.value = 'edit';
    },
  },
});

export const { setEditMode, setPreviewMode, toggleMode } = modeSlice.actions;

export const selectMode = (state: RootState) => state.mode.value;

export default modeSlice.reducer;
