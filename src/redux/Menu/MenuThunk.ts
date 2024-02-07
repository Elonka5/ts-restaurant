import { AsyncThunk, createAsyncThunk } from '@reduxjs/toolkit';
import { DataSnapshot, get, ref } from 'firebase/database';
import { db } from '../../firebase/firebase';

export type MenuItem = {
  // menuData: string[];
  id: string;
  title: string;
  imageTitle: string;
  tags: string[];
  description: {
    title: string;
    dish_info: string[];
    image: string;
  };
};

export const fetchMenu: AsyncThunk<MenuItem | null, void, {}> =
  createAsyncThunk('menu/fetchMenu', async (_, { rejectWithValue }) => {
    try {
      const menuRef = ref(db, 'menu');

      const snapshot: DataSnapshot = await get(menuRef);

      if (snapshot.exists()) {
        const menuData: MenuItem = snapshot.val();
        console.log(menuData);
        return menuData;
      } else {
        return null;
      }
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  });
