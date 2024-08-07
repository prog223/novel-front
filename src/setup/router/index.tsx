import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { TRoutePageType } from './types';
import { RoutesList } from './routes';
import { AxiosInterceptor } from '../../api/axios';

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
   return children;
};

const Router = () => {
   const routes = RoutesList.map(
      ({ element: Element, path, isPrivate }: TRoutePageType) => (
         <Route
            path={path}
            key={path}
            element={
               <RouteController isPrivate={isPrivate} path={path}>
                  <Element />
               </RouteController>
            }
         />
      ),
   );
   return (
      <BrowserRouter>
         <AxiosInterceptor>
            <Routes>{routes}</Routes>
         </AxiosInterceptor>
      </BrowserRouter>
   );
};

export default Router;
