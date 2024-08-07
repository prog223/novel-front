import { createSlice } from '@reduxjs/toolkit';
import { ErrorResponse } from '../../../utils/errorHandler';
import { IAuthor, IData } from '../../../utils/types';
import { getAuthor, getAuthors } from '../actions/author.actions';
import { RootState } from '../store';

interface IBookState {
   author: IData<IAuthor>;
   authors: IData<IAuthor[]>;
}

const initialState: IBookState = {
   author: {
      data: null,
      isLoading: false,
      isSuccess: false,
      error: null,
   },
   authors: {
      data: null,
      isLoading: false,
      isSuccess: false,
      error: null,
   },
};

export const authorSlice = createSlice({
   name: 'book',
   initialState,
   reducers: {},
   // extraReducers: builder => {
   //    builder
   //       // GET AUTHOR
   //       .addCase(getAuthor.pending, state => {
   //          state.author.isLoading = true;
   //       })
   //       .addCase(getAuthor.fulfilled, (state, { payload }) => {
   //          state.author.isLoading = false;
   //          state.author.isSuccess = true;
   //          state.author.data = payload.data;
   //       })
   //       .addCase(getAuthor.rejected, (state, action) => {
   //          state.author.isSuccess = false;
   //          state.author.isLoading = false;
   //          state.author.error = action.payload as ErrorResponse;
   //       })

   //       // GET AUTHORS
   //       .addCase(getAuthors.pending, state => {
   //          state.authors.isLoading = true;
   //       })
   //       .addCase(getAuthors.fulfilled, (state, action) => {
   //          state.authors.isLoading = false;
   //          state.authors.isSuccess = true;
   //          state.authors.data = action.payload;
   //       })
   //       .addCase(getAuthors.rejected, (state, action) => {
   //          state.authors.isSuccess = false;
   //          state.authors.isLoading = false;
   //          state.authors.error = action.payload as ErrorResponse;
   //       });
   // },
});

export const selectAuthor = (state: RootState) => state.author.author;
export const selectAuthors = (state: RootState) => state.author.authors;

export default authorSlice.reducer;
