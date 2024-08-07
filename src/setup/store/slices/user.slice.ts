import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IUser } from '../../../utils/types';
import { RootState } from '../store';
import {
	getUser,
	getUsers,
	login,
	logout,
	register,
	resetPassword,
	resetPasswordRequest,
	updatePassword,
} from '../actions/user.action';

interface IUserState {
	user: {
		data: IUser | null;
		isLoading: boolean;
		isSuccess: boolean;
		error: string | null;
	};
	users: {
		data: IUser[] | null;
		isLoading: boolean;
		isSuccess: boolean;
		error: string | null;
	};
	auth: {
		data: IUser | null;
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
	users: {
		data: null,
		isLoading: false,
		isSuccess: false,
		error: null,
	},
	auth: {
		data: null,
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
		builder
			// REGISTER
			.addCase(register.pending, (state) => {
				state.auth.isLoading = true;
			})
			.addCase(register.fulfilled, (state, action: PayloadAction<any>) => {
				state.auth.isLoading = false;
				state.auth.isSuccess = true;

				//TO DO: add toast
			})
			.addCase(register.rejected, (state, action: PayloadAction<any>) => {
				state.auth.isSuccess = false;
				state.auth.isLoading = false;
				state.auth.error = action.payload;
				//TO DO: add toast
			})

			// LOGIN
			.addCase(login.pending, (state) => {
				state.auth.isLoading = true;
			})
			.addCase(login.fulfilled, (state, action: PayloadAction<any>) => {
				state.auth.isLoading = false;
				state.auth.isSuccess = true;
				state.auth.isAuthenticated = true;
				state.auth.data = action.payload.data;
			})
			.addCase(login.rejected, (state, action: PayloadAction<any>) => {
				state.auth.isSuccess = false;
				state.auth.isLoading = false;
				state.auth.error = action.payload;
				//TO DO: add toast
			})

			// LOGOUT
			.addCase(logout.pending, (state) => {
				state.auth.isLoading = true;
			})
			.addCase(logout.fulfilled, (state) => {
				state.auth.isLoading = false;
				state.auth.isSuccess = true;
				state.auth.isAuthenticated = false;
				state.auth.data = null;
			})
			.addCase(logout.rejected, (state, action: PayloadAction<any>) => {
				state.auth.isSuccess = false;
				state.auth.isLoading = false;
				state.auth.isAuthenticated = false;
				state.auth.error = action.payload;
				state.auth.data = null;
			})

			// RESET PASSWORD REQUEST
			.addCase(resetPasswordRequest.pending, (state) => {
				state.auth.isLoading = true;
			})
			.addCase(resetPasswordRequest.fulfilled, (state) => {
				state.auth.isLoading = false;
				state.auth.isSuccess = true;

				//TO DO: add toast
			})
			.addCase(
				resetPasswordRequest.rejected,
				(state, action: PayloadAction<any>) => {
					state.auth.isSuccess = false;
					state.auth.isLoading = false;
					state.auth.error = action.payload;
				}
			)

			// RESET PASSWORD
			.addCase(resetPassword.pending, (state) => {
				state.auth.isLoading = true;
			})
			.addCase(resetPassword.fulfilled, (state) => {
				state.auth.isLoading = false;
				state.auth.isSuccess = true;

				//TO DO: add toast
			})
			.addCase(
				resetPassword.rejected,
				(state, action: PayloadAction<any>) => {
					state.auth.isSuccess = false;
					state.auth.isLoading = false;
					state.auth.error = action.payload;
				}
			)

			// UPDATE PASSWORD
			.addCase(updatePassword.pending, (state) => {
				state.auth.isLoading = true;
			})
			.addCase(updatePassword.fulfilled, (state) => {
				state.auth.isLoading = false;
				state.auth.isSuccess = true;

				//TO DO: add toast
			})
			.addCase(
				updatePassword.rejected,
				(state, action: PayloadAction<any>) => {
					state.auth.isSuccess = false;
					state.auth.isLoading = false;
					state.auth.error = action.payload;
				}
			)

			// GET USER
			.addCase(getUser.pending, (state) => {
				state.user.isLoading = true;
			})
			.addCase(getUser.fulfilled, (state, action: PayloadAction<any>) => {
				state.user.isLoading = false;
				state.user.isSuccess = true;
				state.user.data = action.payload.data;
			})
			.addCase(getUser.rejected, (state, action: PayloadAction<any>) => {
				state.user.isSuccess = false;
				state.user.isLoading = false;
				state.user.error = action.payload;
			})

			// GET USERS
			.addCase(getUsers.pending, (state) => {
				state.users.isLoading = true;
			})
			.addCase(getUsers.fulfilled, (state, action: PayloadAction<any>) => {
				state.users.isLoading = false;
				state.users.isSuccess = true;
				state.users.data = action.payload.data;
			})
			.addCase(getUsers.rejected, (state, action: PayloadAction<any>) => {
				state.users.isSuccess = false;
				state.users.isLoading = false;
				state.users.error = action.payload;
			});
	},
});

export const selectUser = (state: RootState) => state.user.user;
export const selectUsers = (state: RootState) => state.user.users;
export const selectAuth = (state: RootState) => state.user.auth;

export default userSlice.reducer;
