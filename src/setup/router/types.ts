import type { FC } from 'react';

export type TRoutePageType = {
	isPrivate?: boolean;
	title: string;
	path: string;
	element: FC;
};

export enum ERoutePaths {
	Home = '/',
   About = '/about',

	Login = '/login',
	Register = '/register',

	Book = '/book/:id',
	Books = '/books',

	Author = '/author/:id',
	Authors = '/authors',

   Profile = '/profile',
   
	Error = '*',
}
