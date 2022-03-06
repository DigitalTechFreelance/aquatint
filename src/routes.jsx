import React from 'react';

const Home = React.lazy(() => import('./pages/Home'));

const routes = [
  {
    path: '/',
    component: <Home />,
    exact: true,
  },
  {
    path: '/home',
    component: <Home />,
    exact: true,
  },
];

export default routes;
