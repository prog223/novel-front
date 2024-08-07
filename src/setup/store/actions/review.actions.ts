import { createAsyncThunk } from '@reduxjs/toolkit';
import {
   IDeleteResponse,
   IResponseForm,
   IReviewForm,
   IUpdateResponse,
} from '../../../utils/types';
import axios from '../../../api/axios';
import errorHandler from '../../../utils/errorHandler';

// REVIEW ACTIONS

export const getBookReviews = createAsyncThunk(
   'review/getBookReviews',
   async (query: any, { rejectWithValue, fulfillWithValue }) => {
      try {
         const response = await axios.post(`review/get_book_reviews${query}`);
         return fulfillWithValue(response);
      } catch (error) {
         return rejectWithValue(errorHandler(error));
      }
   },
);

export const createReview = createAsyncThunk(
   'review/createReview',
   async (data: IReviewForm, { rejectWithValue, fulfillWithValue }) => {
      try {
         const response = await axios.post('review', data);
         return fulfillWithValue(response);
      } catch (error) {
         return rejectWithValue(errorHandler(error));
      }
   },
);

export const updateReview = createAsyncThunk(
   'review/updateReview',
   async (data: IReviewForm, { rejectWithValue, fulfillWithValue }) => {
      try {
         const response = await axios.post('review/update', data);
         return fulfillWithValue(response.data);
      } catch (error) {
         return rejectWithValue(errorHandler(error));
      }
   },
);

export const deleteReview = createAsyncThunk(
   'review/deleteReview',
   async (id: string, { rejectWithValue, fulfillWithValue }) => {
      try {
         const response = await axios.post(`review/${id}`);
         return fulfillWithValue(response.data);
      } catch (error) {
         return rejectWithValue(errorHandler(error));
      }
   },
);

export const getUserReviews = createAsyncThunk(
   'review/getUserReviews',
   async (_, { rejectWithValue, fulfillWithValue }) => {
      try {
         const response = await axios.post('review');
         return fulfillWithValue(response.data);
      } catch (error) {
         return rejectWithValue(errorHandler(error));
      }
   },
);

// RESPONSE ACTIONS

export const addResponse = createAsyncThunk(
   'review/addResponse',
   async (data: IResponseForm, { rejectWithValue, fulfillWithValue }) => {
      try {
         const response = await axios.post('review/add_response', data);
         return fulfillWithValue(response.data);
      } catch (error) {
         return rejectWithValue(errorHandler(error));
      }
   },
);

export const deleteResponse = createAsyncThunk(
   'review/deleteResponse',
   async (data: IDeleteResponse, { rejectWithValue, fulfillWithValue }) => {
      try {
         const response = await axios.post('review/delete_response', data);
         return fulfillWithValue(response.data);
      } catch (error) {
         return rejectWithValue(errorHandler(error));
      }
   },
);

export const updateResponse = createAsyncThunk(
   'review/updateResponse',
   async (data: IUpdateResponse, { rejectWithValue, fulfillWithValue }) => {
      try {
         const response = await axios.post('review/update_response', data);
         return fulfillWithValue(response.data);
      } catch (error) {
         return rejectWithValue(errorHandler(error));
      }
   },
);
