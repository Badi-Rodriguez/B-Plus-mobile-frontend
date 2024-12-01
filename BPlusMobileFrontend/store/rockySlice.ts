import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface RockyState {
  outfit: string;
  accessories: string[];
  // Add other Rocky-related state here
}

const initialState: RockyState = {
  outfit: 'default',
  accessories: [],
};

export const rockySlice = createSlice({
  name: 'rocky',
  initialState,
  reducers: {
    setOutfit: (state, action: PayloadAction<string>) => {
      state.outfit = action.payload;
    },
    addAccessory: (state, action: PayloadAction<string>) => {
      state.accessories.push(action.payload);
    },
    // Add other reducers here
  },
});

export const { setOutfit, addAccessory } = rockySlice.actions;
export default rockySlice.reducer;

