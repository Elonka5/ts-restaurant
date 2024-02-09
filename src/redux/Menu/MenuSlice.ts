import { AnyAction, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchMenu, MenuItem } from './MenuThunk';

type Menu = {
  selectedDish: MenuItem | null;
  menuData: MenuItem[];
  currentDishIndex: number;
  isLoading: boolean;
  error: null | string;
};

const initialState: Menu = {
  selectedDish: null,
  menuData: [],
  currentDishIndex: 0,
  isLoading: false,
  error: null,
};

const menuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {
    setSelectedDish(state, action: PayloadAction<MenuItem>) {
      state.selectedDish = action.payload;
    },
    setCurrentDishIndex(state, action: PayloadAction<number>) {
      state.currentDishIndex = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchMenu.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchMenu.fulfilled, (state, action) => {
        if (action.payload !== null) {
          state.menuData = action.payload;
        }
        state.isLoading = false;
      })
      .addMatcher(isError, (state, action: PayloadAction<string>) => {
        state.error = action.payload;
        state.isLoading = false;
      });
  },
});

export const { setSelectedDish, setCurrentDishIndex } = menuSlice.actions;
export const menuReducer = menuSlice.reducer;

function isError(action: AnyAction) {
  return action.type.endsWith('rejected');
}
