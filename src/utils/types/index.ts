export type TFile = {
	id: string;
	url: string;
};

export type TGenre = {
	name: string;
	image: TFile;
};

export type TAuthor = {
	name: string;
	surname: string;
	about: string;
	birthday: Date;
	books: TBook[];
};

export type TReview = {
	text: string;
	rate: number;
	user: TUser;
	book: TBook;
	responses: TResponse[];
};

export type TResponse = {
	text: string;
	user: TUser;
	created_at: Date;
};

export type TBook = {
	name: string;
	description: string;
	short_description: string;
	image: TFile;
	file: TFile;
	rate: number;
	pages: number;
	quotes: string[];
	isCompleted: boolean;
	genre: TGenre;
	reviews: TReview;
	author: TAuthor;
	isUserAuthor: boolean;
	userAuthor: TUser;
	bookshelf: TBookshelf;
};

export type TBookshelf = {
	name: string;
	books: TBook[];
	isPrivate: boolean;
};

export type TUser = {
	name: string;
	surname: string;
	email: string;
	isAuthor: string;
	image: TFile;
	bookshelves: TBookshelf;
};
