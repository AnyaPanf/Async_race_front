import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type UIState = {
  selectedCarId?: number;
};

const initialState: UIState = {
  selectedCarId: localStorage.getItem('selectedCarId')
    ? Number(localStorage.getItem('selectedCarId'))
    : undefined,
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    setSelectedCarId(state, action: PayloadAction<number>) {
      state.selectedCarId = action.payload;
    },

    clearSelectedCarId(state) {
      state.selectedCarId = undefined;
    },
  },
});

export const { setSelectedCarId, clearSelectedCarId } = uiSlice.actions;
export default uiSlice.reducer;
