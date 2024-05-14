import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Routes } from './routes';
import { TRoutePageType } from './types';

interface IRouteControllerProps {
	isPrivate?: boolean;
	children: React.ReactNode;
	path: string;
}

const RouteController: React.FC<IRouteControllerProps> = ({
	isPrivate,
	children,
	path,
}: IRouteControllerProps) => {
   
	return <></>;
};

const Router = () => {
	const routes = Routes.map(
		({ element: Element, path, isPrivate }: TRoutePageType) => (
			<Route
				path={path}
				key={path}
				element={
					<RouteController
						isPrivate={isPrivate}
						path={path}
					>
						<Element />
					</RouteController>
				}
			/>
		)
	);
	return <BrowserRouter>{routes}</BrowserRouter>;
};

export default Router;
