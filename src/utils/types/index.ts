import { ErrorResponse } from '../errorHandler';

export interface IFile {
   id: string;
   url: string;
}

export interface IGenre {
   name: string;
   image: IFile;
}

export interface IAuthor {
   _id: string;
   name: string;
   surname: string;
   about: string;
   birthday: Date;
   books: IBook[];
}

export interface IReview {
   _id: string;
   text: string;
   rate: number;
   user: IUser;
   book: IBook;
   responses: IResponse[];
}

export interface IResponse {
   _id: string;
   text: string;
   user: IUser;
   created_at: Date;
}

export interface IBook {
   _id: string;
   name: string;
   description: string;
   short_description: string;
   image: IFile;
   file: IFile;
   rate: number;
   pages: number;
   quotes: string[];
   isCompleted: boolean;
   genre: IGenre;
   reviews: IReview[];
   author: IAuthor;
   isUserAuthor: boolean;
   userAuthor: IUser;
   bookshelf: IBookshelf;
}

export interface IBookshelf {
   _id: string;
   name: string;
   books: IBook[];
   isPrivate: boolean;
}

export interface IUser {
   _id: string;
   name: string;
   surname: string;
   email: string;
   isAuthor: string;
   image: IFile;
   bookshelves: IBookshelf;
}

export interface IRegisterForm {
   name: string;
   surname: string;
   email: string;
   password: string;
   username: string;
}

export interface ILoginForm {
   email: string;
   password: string;
}

export interface IResetPasswordRequestForm {
   email: string;
}

export interface IResetPasswordForm {
   userId: string;
   token: string;
   password: string;
}

export interface IUpdatePasswordForm {
   password: string;
}

export interface IReviewForm {
   reviewId?: string;
   text: string;
   rate: string;
}

export interface IResponseForm {
   reviewId: string;
   text: string;
}

export interface IDeleteResponse {
   reviewId: string;
   resId: string;
}

export interface IUpdateResponse {
   reviewId: string;
   resId: string;
   text: string;
}

export interface IBookshelfForm {
   id: string;
   name: string;
   isPrivate: boolean;
}

export interface IActionBook {
   bookshelfId: string;
   bookId: string;
}

export type TResponse<T> = {
   data: T;
   message: string;
   sucess: boolean;
   pagination: IPagination;
};

interface IPagination {
   totalCount: number;
   page: number;
   totalPages: number;
   nextPage: number;
   prevPage: number;
}

export interface IQuery {
   page?: number;
   pageSize?: number;
   search?: string;
}

export interface IData<T> {
   data: T | null;
   isLoading: boolean;
   isSuccess: boolean;
   error: ErrorResponse | null;
}

export interface IGetBooksQuery extends IQuery {
   genre: string;
}

export interface IGetReviewQuery {
   id: string;
   query: IQuery;
}