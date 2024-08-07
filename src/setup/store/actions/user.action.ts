import { createAsyncThunk } from '@reduxjs/toolkit';
import {
   ILoginForm,
   IRegisterForm,
   IResetPasswordForm,
   IResetPasswordRequestForm,
   IUpdatePasswordForm,
} from '../../../utils/types';
import axios from '../../../api/axios';
import errorHandler from '../../../utils/errorHandler';

// AUTH ACTIONS

export const register = createAsyncThunk(
   'auth/register',
   async (data: IRegisterForm, { rejectWithValue, fulfillWithValue }) => {
      try {
         const response = await axios.post('auth/register', data);

         return fulfillWithValue(response.data);
      } catch (error) {
         return rejectWithValue(errorHandler(error));
      }
   },
);

export const login = createAsyncThunk(
   'auth/login',
   async (data: ILoginForm, { rejectWithValue, fulfillWithValue }) => {
      try {
         const response = await axios.post('auth/login', data);

         return fulfillWithValue(response.data);
      } catch (error) {
         return rejectWithValue(errorHandler(error));
      }
   },
);

export const logout = createAsyncThunk(
   'auth/logout',
   async (_, { rejectWithValue, fulfillWithValue }) => {
      try {
         const response = await axios.post('auth/logout');
         return fulfillWithValue(response.data);
      } catch (error) {
         return rejectWithValue(errorHandler(error));
      }
   },
);

export const resetPasswordRequest = createAsyncThunk(
   'auth/resetPasswordRequest',
   async (
      data: IResetPasswordRequestForm,
      { rejectWithValue, fulfillWithValue },
   ) => {
      try {
         const response = await axios.post('auth/reset_password_request', data);
         return fulfillWithValue(response.data);
      } catch (error) {
         return rejectWithValue(errorHandler(error));
      }
   },
);

export const resetPassword = createAsyncThunk(
   'auth/resetPassword',
   async (data: IResetPasswordForm, { rejectWithValue, fulfillWithValue }) => {
      try {
         const response = await axios.post('auth/reset_password', data);
         return fulfillWithValue(response.data);
      } catch (error) {
         return rejectWithValue(errorHandler(error));
      }
   },
);

export const updatePassword = createAsyncThunk(
   'auth/updatePassword',
   async (data: IUpdatePasswordForm, { rejectWithValue, fulfillWithValue }) => {
      try {
         const response = await axios.post('auth/update_password', data);
         return fulfillWithValue(response.data);
      } catch (error) {
         return rejectWithValue(errorHandler(error));
      }
   },
);

// USER ACTIONS

export const getUser = createAsyncThunk(
   'user/getUser',
   async (id: string, { rejectWithValue, fulfillWithValue }) => {
      try {
         const response = await axios.get(`user/${id}`);
         return fulfillWithValue(response.data);
      } catch (error) {
         return rejectWithValue(errorHandler(error));
      }
   },
);

export const getUsers = createAsyncThunk(
   'user/getUsers',
   async (_, { rejectWithValue, fulfillWithValue }) => {
      try {
         const response = await axios.get('user');
         return fulfillWithValue(response.data);
      } catch (error) {
         return rejectWithValue(errorHandler(error));
      }
   },
);
