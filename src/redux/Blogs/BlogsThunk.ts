import { createAsyncThunk } from '@reduxjs/toolkit';
import { DataSnapshot, get, ref } from 'firebase/database';
import { db } from '../../firebase/firebase';

export type BlogItem = {
  id: string;
  title: string;
  author_name: string;
  avatar_url: string;
  date: string;
  time: string;
  previous_description: string;
  imageTitle: string;
  tags: string[];
  hero_img: string;
  category: string[];
  description: string[];
  images: string[];
};

export const fetchBlog = createAsyncThunk<
  BlogItem[],
  undefined,
  { rejectValue: string }
>('blog/fetchBlog', async function (_, { rejectWithValue }) {
  try {
    const blogRef = ref(db, 'blogs');
    const snapshot: DataSnapshot = await get(blogRef);
    if (snapshot.exists()) {
      const blogData: BlogItem[] = snapshot.val();
      return blogData;
    } else {
      return [];
    }
  } catch (error: any) {
    return rejectWithValue(error.message);
  }
});
