import { createSlice } from '@reduxjs/toolkit';
import { TUser } from '../../../utils/types';
import { RootState } from '../store';

interface IUserState {
	user: {
		data: TUser | null;
		isLoading: boolean;
		isSuccess: boolean;
		error: string | null;
	};
	auth: {
		isAuthenticated: boolean;
		isLoading: boolean;
		isSuccess: boolean;
		error: string | null;
	};
}

const initialState: IUserState = {
	user: {
		data: null,
		isLoading: false,
		isSuccess: false,
		error: null,
	},
	auth: {
		isAuthenticated: false,
		isLoading: false,
		isSuccess: false,
		error: null,
	},
};

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder;
		// Register
	},
});

export const selectUser = (state: RootState) => state.user.user;
export const selectAuth = (state: RootState) => state.user.auth;

export default userSlice.reducer;
