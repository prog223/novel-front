import axios, { AxiosError, AxiosResponse } from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface IProps {
	children: React.ReactNode;
}

const baseUrl = process.env.VITE_BASE_URL;
const clienUrl = process.env.VITE_CLIENT_URL;

const instance = axios.create({
	baseURL: baseUrl,
	withCredentials: true,
	headers: {
		'Content-Type': 'application/json',
		'Access-Control-Allow-Origin': clienUrl,
	},
});

export const AxiosInterceptor: React.FC<IProps> = ({ children }: IProps) => {
	const navigate = useNavigate();
	const [isSet, setIsSet] = useState<boolean>(false);

	useEffect(() => {
		setIsSet(true);
		const resInterceptor = (response: AxiosResponse) => {
			return Promise.resolve(response);
		};

		const errInterceptor = (error: AxiosError) => {
			if (error.response && error.response.status === 401) {
				navigate('/login');
			} else if (error.response && error.response.status === 500) {
				navigate('/');
				// add error toast
			}
			return Promise.reject(error);
		};

		const interceptor = instance.interceptors.response.use(
			resInterceptor,
			errInterceptor
		);

		return () => instance.interceptors.response.eject(interceptor);
	}, []);

	return isSet && children;
};

export default instance;
