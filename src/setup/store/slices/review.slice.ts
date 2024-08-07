import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IData, IReview } from '../../../utils/types';
import {
   addResponse,
   createReview,
   deleteResponse,
   deleteReview,
   getBookReviews,
   getUserReviews,
   updateResponse,
   updateReview,
} from '../actions/review.actions';
import { RootState } from '../store';
import { ErrorResponse } from '../../../utils/errorHandler';

interface IReviewState {
   review: IData<IReview[]>;
}

const initialState: IReviewState = {
   review: {
      data: [],
      isLoading: false,
      isSuccess: false,
      error: null,
   },
};

const reviewSlice = createSlice({
   name: 'review',
   initialState,
   reducers: {},
   extraReducers: builder => {
      builder
         // CREATE REVIEW
         .addCase(createReview.pending, state => {
            state.review.isLoading = true;
         })
         .addCase(
            createReview.fulfilled,
            (state, action) => {
               state.review.isLoading = false;
               state.review.isSuccess = true;
               state.review.data = action.payload.data;
            },
         )
         .addCase(
            createReview.rejected,
            (state, action) => {
               state.review.isSuccess = false;
               state.review.isLoading = false;
               state.review.error = action.payload as ErrorResponse;
            },
         )

         // GET BOOK REVIEWS
         .addCase(getBookReviews.pending, state => {
            state.review.isLoading = true;
         })
         .addCase(
            getBookReviews.fulfilled,
            (state, action) => {
               state.review.isLoading = false;
               state.review.isSuccess = true;
               state.review.data = action.payload.data;
            },
         )
         .addCase(
            getBookReviews.rejected,
            (state, action) => {
               state.review.isSuccess = false;
               state.review.isLoading = false;
               state.review.error = action.payload as ErrorResponse;
            },
         )

         // UPDATE REVIEW
         .addCase(updateReview.pending, state => {
            state.review.isLoading = true;
         })
         .addCase(
            updateReview.fulfilled,
            (state, action) => {
               state.review.isLoading = false;
               state.review.isSuccess = true;
               const updatedReview = action.payload.data;
               const index = state.review.data.findIndex(
                  review => review._id === updatedReview.id,
               );
               if (index !== -1) {
                  state.review.data[index] = updatedReview;
               }
            },
         )
         .addCase(
            updateReview.rejected,
            (state, action) => {
               state.review.isSuccess = false;
               state.review.isLoading = false;
               state.review.error = action.payload as ErrorResponse;
            },
         )

         // UPDATE REVIEW
         .addCase(updateReview.pending, state => {
            state.review.isLoading = true;
         })
         .addCase(
            updateReview.fulfilled,
            (state, action) => {
               state.review.isLoading = false;
               state.review.isSuccess = true;
               const updatedReview = action.payload.data;
               const index = state.review.data.findIndex(
                  review => review._id === updatedReview.id,
               );
               if (index !== -1) {
                  state.review.data[index] = updatedReview;
               }
            },
         )
         .addCase(
            updateReview.rejected,
            (state, action) => {
               state.review.isSuccess = false;
               state.review.isLoading = false;
               state.review.error = action.payload as ErrorResponse;
            },
         )

         // DELETE REVIEW
         .addCase(deleteReview.pending, state => {
            state.review.isLoading = true;
         })
         .addCase(
            deleteReview.fulfilled,
            (state, action) => {
               state.review.isLoading = false;
               state.review.isSuccess = true;
               state.review.data = state.review.data.filter(
                  review => review._id !== action.payload._id,
               );
            },
         )
         .addCase(
            deleteReview.rejected,
            (state, action) => {
               state.review.isSuccess = false;
               state.review.isLoading = false;
               state.review.error = action.payload as ErrorResponse;
            },
         )

         // GET USER REVIEWS
         .addCase(getUserReviews.pending, state => {
            state.review.isLoading = true;
         })
         .addCase(
            getUserReviews.fulfilled,
            (state, action) => {
               state.review.isLoading = false;
               state.review.isSuccess = true;
               state.review.data = action.payload.data;
            },
         )
         .addCase(
            getUserReviews.rejected,
            (state, action) => {
               state.review.isSuccess = false;
               state.review.isLoading = false;
               state.review.error = action.payload as ErrorResponse;
            },
         )

         // ADD REVIEW RESPONSE
         .addCase(addResponse.pending, state => {
            state.review.isLoading = true;
         })
         .addCase(
            addResponse.fulfilled,
            (state, action) => {
               state.review.isLoading = false;
               state.review.isSuccess = true;
               const updatedReview = action.payload.data;
               const index = state.review.data.findIndex(
                  review => review._id === updatedReview.id,
               );
               if (index !== -1) {
                  state.review.data[index] = updatedReview;
               }
            },
         )
         .addCase(addResponse.rejected, (state, action) => {
            state.review.isSuccess = false;
            state.review.isLoading = false;
            state.review.error = action.payload;
         })

         // DELETE REVIEW RESPONSE
         .addCase(deleteResponse.pending, state => {
            state.review.isLoading = true;
         })
         .addCase(
            deleteResponse.fulfilled,
            (state, action) => {
               state.review.isLoading = false;
               state.review.isSuccess = true;
               const updatedReview = action.payload.data;
               const index = state.review.data.findIndex(
                  review => review._id === updatedReview.id,
               );
               if (index !== -1) {
                  state.review.data[index] = updatedReview;
               }
            },
         )
         .addCase(
            deleteResponse.rejected,
            (state, action) => {
               state.review.isSuccess = false;
               state.review.isLoading = false;
               state.review.error = action.payload as ErrorResponse;
            },
         )

         // UPDATE REVIEW RESPONSE
         .addCase(deleteReview.pending, state => {
            state.review.isLoading = true;
         })
         .addCase(
            updateResponse.fulfilled,
            (state, action) => {
               state.review.isLoading = false;
               state.review.isSuccess = true;
               const updatedReview = action.payload.data;
               const index = state.review.data.findIndex(
                  review => review._id === updatedReview.id,
               );
               if (index !== -1) {
                  state.review.data[index] = updatedReview;
               }
            },
         )
         .addCase(
            updateResponse.rejected,
            (state, action) => {
               state.review.isSuccess = false;
               state.review.isLoading = false;
               state.review.error = action.payload as ErrorResponse;
            },
         );
   },
});

export const selectReviews = (state: RootState) => state.review.review;

export default reviewSlice.reducer;
