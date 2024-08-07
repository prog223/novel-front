import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import {
   IGetReviewQuery,
   IReview,
   IReviewForm,
   TResponse,
} from '../../../utils/types';

export const reviewApi = createApi({
   reducerPath: 'reviewApi',
   baseQuery: fetchBaseQuery({
      baseUrl: process.env.VITE_BASE_URL,
   }),
   tagTypes: ['Reviews'],
   endpoints: build => ({
      createReview: build.mutation<TResponse<IReview>, IReviewForm>({
         query: body => ({ url: 'review', method: 'POST', body }),
         invalidatesTags: [{ type: 'Reviews', id: 'LIST' }],
      }),
      updateReview: build.mutation<TResponse<IReview>, TResponse<IReviewForm>>({
         query: body => ({ url: 'review/update', method: 'POST', body }),
         invalidatesTags: [{ type: 'Reviews', id: 'LIST' }],
      }),
      deleteReview: build.mutation<TResponse<IReview>, { id: string }>({
         query: id => `review/${id}`,
      }),
      getReviews: build.query<TResponse<IReview[]>, IGetReviewQuery>({
         query: ({ id, query }) => ({
            url: `reviews/get_book_reviews/${id}`,
            query: query,
         }),
      }),
   }),
});
