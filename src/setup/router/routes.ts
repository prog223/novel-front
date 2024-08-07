import About from '../../pages/About/About';
import Author from '../../pages/Author/Author';
import Authors from '../../pages/Authors/Authors';
import Book from '../../pages/Book/Book';
import Books from '../../pages/Books/Books';
import Home from '../../pages/Home/Home';
import Login from '../../pages/Login/Login';
import Profile from '../../pages/Profile/Profile';
import Register from '../../pages/Register/Register';
import { ERoutePaths, TRoutePageType } from './types';

export const RoutesList: TRoutePageType[] = [
	{
		path: ERoutePaths.Home,
		element: Home,
		title: 'Home',
		isPrivate: true,
	},
	{
		path: ERoutePaths.About,
		element: About,
		title: 'About',
		isPrivate: true,
	},
	{
		path: ERoutePaths.Book,
		element: Book,
		title: 'Book',
		isPrivate: true,
	},
	{
		path: ERoutePaths.Books,
		element: Books,
		title: 'Books',
		isPrivate: true,
	},
	{
		path: ERoutePaths.Author,
		element: Author,
		title: 'Author',
		isPrivate: true,
	},
	{
		path: ERoutePaths.Authors,
		element: Authors,
		title: 'Authors',
		isPrivate: true,
	},
	{
		path: ERoutePaths.Profile,
		element: Profile,
		title: 'Profile',
		isPrivate: true,
	},
	{
		path: ERoutePaths.Login,
		element: Login,
		title: 'Login',
	},
	{
		path: ERoutePaths.Register,
		element: Register,
		title: 'Register',
	},
];
