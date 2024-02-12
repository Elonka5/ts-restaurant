import { AnyAction, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { BlogItem, fetchBlog } from './BlogsThunk';

type Blog = {
  selectedArticle: BlogItem | null;
  blogData: BlogItem[];
  currentArticleIndex: number;
  isLoading: boolean;
  error: null | string;
};

const initialState: Blog = {
  selectedArticle: null,
  blogData: [],
  currentArticleIndex: 0,
  isLoading: false,
  error: null,
};

const blogSlice = createSlice({
  name: 'blog',
  initialState,
  reducers: {
    setSelectedArticle(state, action: PayloadAction<BlogItem>) {
      state.selectedArticle = action.payload;
    },
    setCurrentArticleIndex(state, action: PayloadAction<number>) {
      state.currentArticleIndex = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchBlog.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchBlog.fulfilled, (state, action) => {
        if (action.payload !== null) {
          state.blogData = action.payload;
        }
        state.isLoading = false;
      })
      .addMatcher(isError, (state, action: PayloadAction<string>) => {
        state.error = action.payload;
        state.isLoading = false;
      });
  },
});

export const { setSelectedArticle, setCurrentArticleIndex } = blogSlice.actions;
export const blogReducer = blogSlice.reducer;

function isError(action: AnyAction) {
  return action.type.endsWith('rejected');
}
