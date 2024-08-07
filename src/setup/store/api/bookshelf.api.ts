import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import {
   IActionBook,
   IBookshelf,
   IBookshelfForm,
   TResponse,
} from '../../../utils/types';

export const bookshelfApi = createApi({
   reducerPath: 'bookshelfApi',
   baseQuery: fetchBaseQuery({
      baseUrl: process.env.VITE_BASE_URL,
   }),
   tagTypes: ['Bookshelves'],
   endpoints: build => ({
      createBookshelf: build.mutation<TResponse<IBookshelf>, IBookshelfForm>({
         query: body => ({ url: 'bookshelf', method: 'POST', body }),
         invalidatesTags: [{ type: 'Bookshelves', id: 'LIST' }],
      }),
      getBookshelf: build.query<TResponse<IBookshelf>, string>({
         query: id => `bookshelf/${id}`,
      }),
      getBookshelves: build.query<TResponse<IBookshelf[]>, void>({
         query: () => 'bookshelf',
         providesTags: result =>
            result?.sucess
               ? [
                    ...result.data.map(
                       ({ _id }) => ({ type: 'Bookshelves', _id }) as const,
                    ),
                    { type: 'Bookshelves', id: 'LIST' },
                 ]
               : [{ type: 'Bookshelves', id: 'LIST' }],
      }),
      updateBookshelf: build.mutation<TResponse<IBookshelf>, IBookshelfForm>({
         query: body => ({ url: 'bookshelf/update', method: 'POST', body }),
         invalidatesTags: (result, error, arg) => [
            { type: 'Bookshelves', id: arg.id },
         ],
      }),
      deleteBookshelf: build.mutation<TResponse<null>, string>({
         query: id => ({
            url: `bookshelf/${id}`,
            method: 'DELETE',
         }),
         invalidatesTags: (result, error, arg) => [
            { type: 'Bookshelves', id: arg },
         ],
      }),
      addBookToBookshelf: build.mutation<TResponse<IBookshelf>, IActionBook>({
         query: body => ({ url: 'bookshelf/addBook', method: 'POST', body }),
         invalidatesTags: (result, error, arg) => [
            { type: 'Bookshelves', id: arg.bookshelfId },
         ],
      }),
      deleteBookFromBookshelf: build.mutation<TResponse<IBookshelf>,IActionBook>({
         query: body => ({ url: 'bookshelf/deleteBook', method: 'POST', body }),
         invalidatesTags: (result, error, arg) => [
            { type: 'Bookshelves', id: arg.bookshelfId },
         ],
      }),
   }),
});

export const {
   useGetBookshelfQuery,
   useAddBookToBookshelfMutation,
   useCreateBookshelfMutation,
   useDeleteBookFromBookshelfMutation,
   useDeleteBookshelfMutation,
   useGetBookshelvesQuery,
} = bookshelfApi;
