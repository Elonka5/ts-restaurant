import { createSlice } from '@reduxjs/toolkit';
import { sendUserReservation, sendUserSubscribe } from './UserThunk';

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
      })
      .addCase(sendUserSubscribe.pending, state => {
        state.isLoading = true;
      })
      .addCase(sendUserSubscribe.fulfilled, state => {
        state.isLoading = false;
      })
      .addCase(sendUserSubscribe.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload ? action.payload.toString() : null;
      });
  },
});

export const usersReducer = userSlice.reducer;
