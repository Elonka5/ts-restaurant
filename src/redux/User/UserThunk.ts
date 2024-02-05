import { createAsyncThunk } from '@reduxjs/toolkit';
import { addDoc, collection } from 'firebase/firestore';
import { firestore } from '../../firebase/firebase';

export interface UserData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  date: Date;
  time: string;
  numberOfPeople: number;
}

export interface UserSubscribe {
  email: string;
}

export const sendUserReservation = createAsyncThunk<
  UserData,
  UserData,
  { rejectValue: string }
>('auth/sendUserReservation', async (userData, { rejectWithValue }) => {
  try {
    const usersCollectionRef = collection(
      firestore,
      '/users/reservation/restaurant'
    );
    await addDoc(usersCollectionRef, userData);

    return userData;
  } catch (error: any) {
    return rejectWithValue(error.message);
  }
});

export const sendUserSubscribe = createAsyncThunk<
  UserSubscribe,
  { email: string },
  { rejectValue: string }
>('auth/sendUserSubscribe', async (userSubscribe, { rejectWithValue }) => {
  try {
    const usersCollectionRef = collection(
      firestore,
      '/users/subscribe/restaurant'
    );
    await addDoc(usersCollectionRef, userSubscribe);

    return userSubscribe;
  } catch (error: any) {
    return rejectWithValue(error.message);
  }
});
