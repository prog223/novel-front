import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IBook, IGenre, IGetBooksQuery, TResponse } from '../../../utils/types';

export const bookApi = createApi({
   reducerPath: 'bookApi',
   baseQuery: fetchBaseQuery({
      baseUrl: process.env.VITE_BASE_URL,
   }),
   endpoints: build => ({
      getBook: build.query<TResponse<IBook>, string>({
         query: id => `book/${id}`,
      }),
      getBooks: build.query<TResponse<IBook>, IGetBooksQuery>({
         query: query => {
            return { url: 'book', params: query };
         },
      }),
      getGenres: build.query<TResponse<IGenre>, void>({
         query: () => 'genre',
      }),
   }),
});

export const { useGetBookQuery, useGetBooksQuery, useGetGenresQuery } = bookApi;
