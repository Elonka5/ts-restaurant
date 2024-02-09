import { createAsyncThunk } from '@reduxjs/toolkit';
import { DataSnapshot, get, ref } from 'firebase/database';
import { db } from '../../firebase/firebase';

export type MenuItem = {
  id: string;
  title: string;
  imageTitle: string;
  tags: string[];
  description?: {
    title: string;
    dish_info: string[];
    image: string;
  }[];
};

export const fetchMenu = createAsyncThunk<
  MenuItem[],
  undefined,
  { rejectValue: string }
>('menu/fetchMenu', async function (_, { rejectWithValue }) {
  try {
    const menuRef = ref(db, 'menu');

    const snapshot: DataSnapshot = await get(menuRef);

    if (snapshot.exists()) {
      const menuData: MenuItem[] = snapshot.val();
      return menuData;
    } else {
      return [];
    }
  } catch (error: any) {
    return rejectWithValue(error.message);
  }
});
