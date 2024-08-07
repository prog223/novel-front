import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../../api/axios';
import errorHandler from '../../../utils/errorHandler';

// AUTHORS ACTIONS

export const getAuthor = createAsyncThunk(
   'author/getAuthor',
   async (id: string, { rejectWithValue, fulfillWithValue }) => {
      try {
         const response = await axios.get(`author/${id}`);

         return fulfillWithValue(response.data);
      } catch (error) {
         return rejectWithValue(errorHandler(error));
      }
   },
);

export const getAuthors = createAsyncThunk(
   'author/getAuthor',
   async (query, { rejectWithValue, fulfillWithValue }) => {
      try {
         const response = await axios.get(`author/${query}`);

         return fulfillWithValue(response.data);
      } catch (error) {
         return rejectWithValue(errorHandler(error));
      }
   },
);
