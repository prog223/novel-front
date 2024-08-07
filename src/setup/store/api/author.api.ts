import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IAuthor, TResponse } from '../../../utils/types';

export const authorApi = createApi({
   reducerPath: 'authorApi',
   baseQuery: fetchBaseQuery({
      baseUrl: process.env.VITE_BASE_URL,
   }),
   endpoints: build => ({
      getAuthors: build.query<TResponse<IAuthor[]>, void>({
         query: () => 'author',
      }),
      getAuthor: build.query<TResponse<IAuthor>, string>({
         query: id => `author/${id}`,
      }),
   }),
});

export const { useGetAuthorsQuery, useGetAuthorQuery } = authorApi;
