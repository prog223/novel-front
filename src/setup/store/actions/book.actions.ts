import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../../api/axios';
import errorHandler from '../../../utils/errorHandler';

// BOOK ACTIONS

export const getBook = createAsyncThunk(
   'book/getBook',
   async (id: string, { rejectWithValue, fulfillWithValue }) => {
      try {
         const response = await axios.get(`book/${id}`);

         return fulfillWithValue(response.data);
      } catch (error) {
         return rejectWithValue(errorHandler(error));
      }
   },
);

export const getBooks = createAsyncThunk(
   'book/getBooks',
   async (query, { rejectWithValue, fulfillWithValue }) => {
      try {
         const response = await axios.get(`book/${query}`);

         return fulfillWithValue(response.data);
      } catch (error) {
         return rejectWithValue(errorHandler(error));
      }
   },
);

// GENRE ACTIONS

export const getGenres = createAsyncThunk(
   'book/getGenres',
   async (_, { rejectWithValue, fulfillWithValue }) => {
      try {
         const response = await axios.get('genre');

         return fulfillWithValue(response.data);
      } catch (error) {
         return rejectWithValue(error);
      }
   },
);
