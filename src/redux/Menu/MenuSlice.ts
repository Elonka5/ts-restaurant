import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchMenu } from './MenuThunk';

interface Menu {
  menuData: string[];
  isLoading: 'false' | 'true';
  error: null | string;
}

const initialState: Menu = {
  menuData: [],
  isLoading: 'false',
  error: null,
};

const menuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addMatcher(
        (action): action is PayloadAction<{ menuData: string[] }> => {
          return action.type === fetchMenu.fulfilled.type;
        },
        (state, { payload }) => {
          state.isLoading = 'false';
          state.menuData = payload.menuData;
        }
      )
      .addMatcher(
        (action): action is PayloadAction<string | null> => {
          return action.type === fetchMenu.rejected.type;
        },
        (state, { payload }) => {
          state.isLoading = 'false';
          state.error = payload || null;
        }
      )
      .addMatcher(
        (
          action
        ): action is PayloadAction<
          undefined,
          string,
          { arg: void; requestId: string; requestStatus: 'pending' }
        > => {
          return action.type === fetchMenu.pending.type;
        },
        state => {
          state.isLoading = 'true';
        }
      );
  },
});

export const menuReducer = menuSlice.reducer;
