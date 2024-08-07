import { createAsyncThunk } from '@reduxjs/toolkit';
import { IActionBook, IBookshelfForm } from '../../../utils/types';
import axios from '../../../api/axios';
import errorHandler from '../../../utils/errorHandler';

export const createBookshelf = createAsyncThunk(
   'bookshelf/createBookshelf',
   async (data: IBookshelfForm, { rejectWithValue, fulfillWithValue }) => {
      try {
         const response = await axios.post('bookshelf', data);

         return fulfillWithValue(response.data);
      } catch (error) {
         return rejectWithValue(errorHandler(error));
      }
   },
);

export const getBookshelf = createAsyncThunk(
   'bookshelf/getBookshelf',
   async (id: string, { rejectWithValue, fulfillWithValue }) => {
      try {
         const response = await axios.post(`bookshelf/${id}`);

         return fulfillWithValue(response.data);
      } catch (error) {
         return rejectWithValue(errorHandler(error));
      }
   },
);

export const getBookshelves = createAsyncThunk(
   'bookshelf/getBookshelves',
   async (_, { rejectWithValue, fulfillWithValue }) => {
      try {
         const response = await axios.post(`bookshelf`);

         return fulfillWithValue(response.data);
      } catch (error) {
         return rejectWithValue(errorHandler(error));
      }
   },
);

export const updateBookshelf = createAsyncThunk(
   'bookshelf/updateBookshelf',
   async (data: IBookshelfForm, { rejectWithValue, fulfillWithValue }) => {
      try {
         const response = await axios.post(`bookshelf/update`, data);

         return fulfillWithValue(response.data);
      } catch (error) {
         return rejectWithValue(errorHandler(error));
      }
   },
);

export const deleteBookshelf = createAsyncThunk(
   'bookshelf/deleteBookshelf',
   async (id: string, { rejectWithValue, fulfillWithValue }) => {
      try {
         const response = await axios.delete(`bookshelf/${id}`);

         return fulfillWithValue(response.data);
      } catch (error) {
         return rejectWithValue(errorHandler(error));
      }
   },
);

export const addBookToBookshelf = createAsyncThunk(
   'bookshelf/addBook',
   async (data: IActionBook, { rejectWithValue, fulfillWithValue }) => {
      try {
         const response = await axios.post('bookshelf/add_book', data);

         return fulfillWithValue(response.data);
      } catch (error) {
         return rejectWithValue(error);
      }
   },
);

export const deleteBookFromBookshelf = createAsyncThunk(
   'bookshelf/deleteBook',
   async (data: IActionBook, { rejectWithValue, fulfillWithValue }) => {
      try {
         const response = await axios.post('bookshelf/delete_book', data);

         return fulfillWithValue(response.data);
      } catch (error) {
         return rejectWithValue(errorHandler(error));
      }
   },
);
