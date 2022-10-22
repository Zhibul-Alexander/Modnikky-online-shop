import React from 'react';

import MainPage from '../pages/MainPage/MainPage';
import Product from '../pages/Product/Product';
import Bag from '../pages/Bag/Bag';
import Login from '../pages/Login/Login';
import CategoryPage from '../pages/CategoryPage/CategoryPage';

export interface IRoute {
  path: string;
  exact: boolean;
  name: string;
  element: React.ComponentType;
}

enum RouteNames {
  MAIN_PAGE = '/home',
  PRODUCT = '/product/:productId',
  BAG = '/bag',
  LOGIN = '/login',
  CATEGORY_PAGE = '/categories/:category',
}

export const publicRoutes: IRoute[] = [
  {path: RouteNames.MAIN_PAGE, exact: true, name: 'MainPage', element: MainPage},
  {path: RouteNames.PRODUCT, exact: true, name: 'Product', element: Product},
  {path: RouteNames.BAG, exact: true, name: 'Bag', element: Bag},
  {path: RouteNames.LOGIN, exact: true, name: 'Login', element: Login},
  {path: RouteNames.CATEGORY_PAGE, exact: true, name: 'CategoryPage', element: CategoryPage},
];

export const requireAuth: IRoute[] = [];

export const routes = [...requireAuth, ...publicRoutes];

export default routes;