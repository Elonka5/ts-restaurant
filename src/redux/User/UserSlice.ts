import { createSlice } from '@reduxjs/toolkit';
import { sendUserReservation } from './UserThunk';

interface UserData {
  isLoading: boolean;
  error: null | string;
}

const initialState: UserData = {
  isLoading: false,
  error: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(sendUserReservation.pending, state => {
        state.isLoading = true;
      })
      .addCase(sendUserReservation.fulfilled, state => {
        state.isLoading = false;
      })
      .addCase(sendUserReservation.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload ? action.payload.toString() : null;
      });
  },
});

export const usersReducer = userSlice.reducer;
