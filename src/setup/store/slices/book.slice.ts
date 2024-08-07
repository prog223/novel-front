import { createSlice } from '@reduxjs/toolkit';
import { IBook, IData, IGenre } from '../../../utils/types';
import { getBook, getBooks, getGenres } from '../actions/book.actions';
import { RootState } from '../store';
import { ErrorResponse } from '../../../utils/errorHandler';

interface IBookState {
   book: IData<IBook>;
   books: IData<IBook[]>;
   genres: IData<IGenre[]>;
}

const initialState: IBookState = {
   book: {
      data: null,
      isLoading: false,
      isSuccess: false,
      error: null,
   },
   books: {
      data: null,
      isLoading: false,
      isSuccess: false,
      error: null,
   },
   genres: {
      data: null,
      isLoading: false,
      isSuccess: false,
      error: null,
   },
};

export const bookSlice = createSlice({
   name: 'book',
   initialState,
   reducers: {},
   extraReducers: builder => {
      builder
         // GET BOOK
         .addCase(getBook.pending, state => {
            state.book.isLoading = true;
         })
         .addCase(getBook.fulfilled, (state, { payload }) => {
            state.book.isLoading = false;
            state.book.isSuccess = true;
            state.book.data = payload.data;
         })
         .addCase(getBook.rejected, (state, action) => {
            state.book.isSuccess = false;
            state.book.isLoading = false;
            state.book.error = action.payload as ErrorResponse;
         })

         // GET BOOKS
         .addCase(getBooks.pending, state => {
            state.books.isLoading = true;
         })
         .addCase(getBooks.fulfilled, (state, { payload }) => {
            state.books.isLoading = false;
            state.books.isSuccess = true;
            state.books.data = payload.data;
         })
         .addCase(getBooks.rejected, (state, action) => {
            state.books.isSuccess = false;
            state.books.isLoading = false;
            state.books.error = action.payload as ErrorResponse;
         })

         // GET GENRES
         .addCase(getGenres.pending, state => {
            state.genres.isLoading = true;
         })
         .addCase(getGenres.fulfilled, (state, { payload }) => {
            state.genres.isLoading = false;
            state.genres.isSuccess = true;
            state.genres.data = payload.data;
         })
         .addCase(getGenres.rejected, (state, action) => {
            state.genres.isSuccess = false;
            state.genres.isLoading = false;
            state.genres.error = action.payload as ErrorResponse;
         });
   },
});

export const selectBook = (state: RootState) => state.book.book;
export const selectBooks = (state: RootState) => state.book.books;
export const selectGenres = (state: RootState) => state.book.genres;

export default bookSlice.reducer;
