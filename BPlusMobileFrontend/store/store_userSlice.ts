import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
  rockyCoins: number;
  // Add other user-related state here
}

const initialState: UserState = {
  rockyCoins: 0,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setRockyCoins: (state, action: PayloadAction<number>) => {
      state.rockyCoins = action.payload;
    },
    // Add other reducers here
  },
});

export const { setRockyCoins } = userSlice.actions;
export default userSlice.reducer;

