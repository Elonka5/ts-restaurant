import { AnyAction, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchMenu, MenuItem } from './MenuThunk';

type Menu = {
  menuData: MenuItem[];
  isLoading: boolean;
  error: null | string;
};

const initialState: Menu = {
  menuData: [],
  isLoading: false,
  error: null,
};

const menuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchMenu.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchMenu.fulfilled, (state, action) => {
        if (action.payload !== null) {
          state.menuData = [action.payload];
        }
        state.isLoading = false;
      })
      .addMatcher(isError, (state, action: PayloadAction<string>) => {
        state.error = action.payload;
        state.isLoading = false;
      });
    // .addMatcher(
    //   (action): action is PayloadAction<{ menuData: string[] }> => {
    //     return action.type === fetchMenu.fulfilled.type;
    //   },
    //   (state, { payload }) => {
    //     state.isLoading = false;
    //     state.menuData = payload;
    //   }
    // )
    // .addMatcher(
    //   (action): action is PayloadAction<string | null> => {
    //     return action.type === fetchMenu.rejected.type;
    //   },
    //   (state, { payload }) => {
    //     state.isLoading = false;
    //     state.error = payload || null;
    //   }
    // )
    // .addMatcher(
    //   (
    //     action
    //   ): action is PayloadAction<
    //     undefined,
    //     string,
    //     { arg: void; requestId: string; requestStatus: 'pending' }
    //   > => {
    //     return action.type === fetchMenu.pending.type;
    //   },
    //   state => {
    //     state.isLoading = true;
    //   }
    // );
  },
});

export const menuReducer = menuSlice.reducer;

function isError(action: AnyAction) {
  return action.type.endsWith('rejected');
}
