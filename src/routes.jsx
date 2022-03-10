import React from 'react';

const Home = React.lazy(() => import('./pages/Home'));
const AboutUs = React.lazy(() => import('./pages/AboutUs'));
const Services = React.lazy(() => import('./pages/Services'));
const WashingServices = React.lazy(() => import('./pages/WashingServices'));
const DetailingServices = React.lazy(() => import('./pages/DetailingServices'));
const CeramicCoating = React.lazy(() => import('./pages/CeramicCoating'));
const PaintProtectionFilm = React.lazy(() => import('./pages/PaintProtectionFilm'));
const ClarityCoat = React.lazy(() => import('./pages/ClarityCoat'));


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
  },
  {
    path: '/about-us',
    component: <AboutUs />,
    exact: true,
  },
  {
    path: '/services',
    component: <Services />,
    exact: true,
  },
  {
    path: '/washing-services',
    component: <WashingServices />,
    exact: true,
  },
  {
    path: '/detailing-services',
    component: <DetailingServices />,
    exact: true,
  },
  {
    path: '/ceramic-coating',
    component: <CeramicCoating />,
    exact: true,
  },
  {
    path: '/paint-protection-film',
    component: <PaintProtectionFilm />,
    exact: true,
  },
  {
    path: '/clarity-coat',
    component: <ClarityCoat />,
    exact: true,
  }
  
];

export default routes;
