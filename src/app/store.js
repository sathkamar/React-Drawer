import { configureStore } from '@reduxjs/toolkit';
import langReducer  from './redux/DrawerReducer';
export const store = configureStore({
  reducer: {
    language: langReducer,
  },
});
