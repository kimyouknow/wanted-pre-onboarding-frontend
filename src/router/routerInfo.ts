import { ElementType } from 'react';

import Main from '~/pages/Main';
import SignIn from '~/pages/SignIn';
import SignUp from '~/pages/SignUp';

export const ROUTE = {
  HOME: '/',
  SIGN_IN: '/signin',
  SIGN_UP: '/signup',
  A: '/a',
  B: '/b',
} as const;

export interface RouterInfo {
  label: string;
  path: (typeof ROUTE)[keyof typeof ROUTE];
  element: ElementType;
  withAuthorization: boolean;
  restricted: boolean;
  isInGnb: boolean;
  withLayoutHeader: boolean;
}

export const routerInfoList: RouterInfo[] = [
  {
    label: 'HOME',
    path: ROUTE.HOME,
    element: Main,
    withAuthorization: false,
    restricted: false,
    isInGnb: true,
    withLayoutHeader: true,
  },
  {
    label: 'SIGN IN',
    path: ROUTE.SIGN_IN,
    element: SignIn,
    withAuthorization: false,
    restricted: true,
    isInGnb: true,
    withLayoutHeader: false,
  },

  {
    label: 'SIGN UP',
    path: ROUTE.SIGN_UP,
    element: SignUp,
    withAuthorization: false,
    restricted: true,
    isInGnb: true,
    withLayoutHeader: false,
  },
];

const withPrivate = (routerInfo: RouterInfo) =>
  routerInfo.withAuthorization || !routerInfo.restricted;

const withPublic = (routerInfo: RouterInfo) => !routerInfo.withAuthorization;

const withLayoutHeader = (routerInfo: RouterInfo) =>
  routerInfo.withLayoutHeader;

const withLayoutFullPage = (routerInfo: RouterInfo) =>
  !routerInfo.withLayoutHeader;

const withInGnb = (routerInfo: RouterInfo) => routerInfo.isInGnb;

export const gnbLinks = (isLogin: boolean) =>
  isLogin
    ? applyFilters(routerInfoList, [withInGnb, withPrivate])
    : applyFilters(routerInfoList, [withInGnb, withPublic]);

export const routesWithHeaderPrivate = applyFilters(routerInfoList, [
  withPrivate,
  withLayoutHeader,
]);

export const routesWithFullPagePrivate = applyFilters(routerInfoList, [
  withPrivate,
  withLayoutFullPage,
]);

export const routesWithHeaderPublic = applyFilters(routerInfoList, [
  withPublic,
  withLayoutHeader,
]);

export const routesWithFullPagePublic = applyFilters(routerInfoList, [
  withPublic,
  withLayoutFullPage,
]);
