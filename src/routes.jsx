import React from 'react';

const Home = React.lazy(() => import('./pages/Home'));
const IndexList = React.lazy(() => import('./temp/IndexList'));

const routes = [
  {
    path: '/pages',
    component: <IndexList />,
    exact: true,
  },
  {
    path: '/',
    component: <Home />,
    exact: true,
  },
  {
    path: '/home',
    component: <Home />,
    exact: true,
  }
];

export default routes;
