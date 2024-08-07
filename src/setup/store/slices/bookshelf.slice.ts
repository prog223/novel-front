import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IBookshelf, IData } from '../../../utils/types';
import {
   addBookToBookshelf,
   createBookshelf,
   deleteBookFromBookshelf,
   deleteBookshelf,
   getBookshelf,
   getBookshelves,
   updateBookshelf,
} from '../actions/bookshelf.actions';
import { RootState } from '../store';
import { ErrorResponse } from '../../../utils/errorHandler';

interface IBookshelfState {
   bookshelf: IData<IBookshelf>;
   bookshelves: IData<IBookshelf[]>;
}

const initialState: IBookshelfState = {
   bookshelf: {
      data: null,
      isLoading: false,
      isSuccess: false,
      error: null,
   },
   bookshelves: {
      data: null,
      isLoading: false,
      isSuccess: false,
      error: null,
   },
};

export const bookshelfSlice = createSlice({
   name: 'book',
   initialState,
   reducers: {},
   extraReducers: builder => {
      builder

         // GET BOOKSHELF
         .addCase(getBookshelf.pending, state => {
            state.bookshelf.isLoading = true;
         })
         .addCase(getBookshelf.fulfilled, (state, action) => {
            state.bookshelf.isLoading = false;
            state.bookshelf.isSuccess = true;
            state.bookshelf.data = action.payload.data;
         })
         .addCase(getBookshelf.rejected, (state, action) => {
            state.bookshelf.isSuccess = false;
            state.bookshelf.isLoading = false;
            state.bookshelf.error = action.payload as ErrorResponse;
         })

         // GET BOOKSHELVES
         .addCase(getBookshelves.pending, state => {
            state.bookshelves.isLoading = true;
         })
         .addCase(getBookshelves.fulfilled, (state, action) => {
            state.bookshelves.isLoading = false;
            state.bookshelves.isSuccess = true;
            state.bookshelves.data = action.payload.data;
         })
         .addCase(getBookshelves.rejected, (state, action) => {
            state.bookshelves.isSuccess = false;
            state.bookshelves.isLoading = false;
            state.bookshelves.error = action.payload as ErrorResponse;
         })

         // CREATE BOOKSHELF
         .addCase(createBookshelf.pending, state => {
            state.bookshelf.isLoading = true;
         })
         .addCase(createBookshelf.fulfilled, (state, action) => {
            state.bookshelf.isLoading = false;
            state.bookshelf.isSuccess = true;
            state.bookshelf.data = action.payload.data;
         })
         .addCase(createBookshelf.rejected, (state, action) => {
            state.bookshelf.isSuccess = false;
            state.bookshelf.isLoading = false;
            state.bookshelf.error = action.payload as ErrorResponse;
         })

         // UPDATE BOOKSHELF
         .addCase(updateBookshelf.pending, state => {
            state.bookshelf.isLoading = true;
         })
         .addCase(updateBookshelf.fulfilled, (state, action) => {
            state.bookshelf.isLoading = false;
            state.bookshelf.isSuccess = true;
            state.bookshelf.data = action.payload.data;
         })
         .addCase(updateBookshelf.rejected, (state, action) => {
            state.bookshelf.isSuccess = false;
            state.bookshelf.isLoading = false;
            state.bookshelf.error = action.payload as ErrorResponse;
         })

         // DELETE BOOKSHELF
         .addCase(deleteBookshelf.pending, state => {
            state.bookshelf.isLoading = true;
         })
         .addCase(deleteBookshelf.fulfilled, state => {
            state.bookshelf.isLoading = false;
            state.bookshelf.isSuccess = true;
            state.bookshelf.data = null;
         })
         .addCase(deleteBookshelf.rejected, (state, action) => {
            state.bookshelf.isSuccess = false;
            state.bookshelf.isLoading = false;
            state.bookshelf.error = action.payload as ErrorResponse;
         })

         // ADD BOOK TO BOOKSHELF
         .addCase(addBookToBookshelf.pending, state => {
            state.bookshelf.isLoading = true;
         })
         .addCase(addBookToBookshelf.fulfilled, (state, action) => {
            state.bookshelf.isLoading = false;
            state.bookshelf.isSuccess = true;
            state.bookshelf.data = action.payload.data;
         })
         .addCase(addBookToBookshelf.rejected, (state, action) => {
            state.bookshelf.isSuccess = false;
            state.bookshelf.isLoading = false;
            state.bookshelf.error = action.payload as ErrorResponse;
         })

         // DELETE BOOK FROM BOOKSHELF
         .addCase(deleteBookFromBookshelf.pending, state => {
            state.bookshelf.isLoading = true;
         })
         .addCase(deleteBookFromBookshelf.fulfilled, (state, action) => {
            state.bookshelf.isLoading = false;
            state.bookshelf.isSuccess = true;
            state.bookshelf.data = action.payload.data;
         })
         .addCase(deleteBookFromBookshelf.rejected, (state, action) => {
            state.bookshelf.isSuccess = false;
            state.bookshelf.isLoading = false;
            state.bookshelf.error = action.payload as ErrorResponse;
         });
   },
});

export const selectBookshelf = (state: RootState) => state.bookshelf.bookshelf;
export const selectBookshelves = (state: RootState) =>
   state.bookshelf.bookshelves;

export default bookshelfSlice.reducer;
