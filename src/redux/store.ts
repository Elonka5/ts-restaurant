import { configureStore } from '@reduxjs/toolkit';
import { menuReducer } from './Menu/MenuSlice';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { usersReducer } from './User/UserSlice';

const persistUserConfig = {
  key: 'root',
  storage,
};

const persistedRoot = persistReducer(persistUserConfig, menuReducer);

const store = configureStore({
  reducer: {
    menu: persistedRoot,
    user: usersReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const persistedStore = persistStore(store);

export default store;
