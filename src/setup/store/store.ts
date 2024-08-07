import { configureStore } from '@reduxjs/toolkit';
import authorSlice from './slices/author.slice';
import bookSlice from './slices/book.slice';
import bookshelfSlice from './slices/bookshelf.slice';
import reviewSlice from './slices/review.slice';
import userReducer from './slices/user.slice';
import { authorApi } from './api/author.api';

export const store = configureStore({
   reducer: {
      user: userReducer,
      book: bookSlice,
      review: reviewSlice,
      author: authorSlice,
      bookshelf: bookshelfSlice,
      [authorApi.reducerPath]: authorApi.reducer,
   },
   middleware: getDefaultMiddleware =>
      getDefaultMiddleware({}).concat([authorApi.middleware]),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
