import React from 'react';

const Home = React.lazy(() => import('./pages/Home'));
const AboutUs = React.lazy(() => import('./pages/AboutUs'));
const Services = React.lazy(() => import('./pages/Services'));
const WashingServices = React.lazy(() => import('./pages/WashingServices'));
// const DetailingServices = React.lazy(() => import('./pages/DetailingServices'));
const PaintProtectionFilm = React.lazy(() => import('./pages/PaintProtectionFilm'));
const CoatingDetail = React.lazy(() => import('./pages/CoatingDetail'));
const CustomisationService = React.lazy(() => import('./pages/CustomisationService'));
const FranchiseWithUs = React.lazy(() => import('./pages/FranchiseWithUs'));
const ContactUs = React.lazy(() => import('./pages/ContactUs'));
const PackageDetail = React.lazy(() => import('./pages/PackageDetail'));
// const IndexList = React.lazy(() => import('./temp/IndexList'));
const Packages = React.lazy(() => import('./pages/Packages'));

const routes = [
  // {
  //   path: '/pages',
  //   component: <IndexList />,
  //   exact: true,
  // },
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
    path: '/services/:slug',
    component: <WashingServices />,
    exact: true,
  },
  {
    path: '/premium-packages/:slug',
    component: <PackageDetail />,
    exact: true,
  },
  // {
  //   path: '/services/:slug/:type',
  //   component: <DetailingServices />,
  //   exact: true,
  // },
  {
    path: '/services/paint-protection-film',
    component: <PaintProtectionFilm />,
    exact: true,
  },
  {
    path: '/coatings/:slug',
    component: <CoatingDetail />,
    exact: true,
  },
  {
    path: '/services/customisation-service',
    component: <CustomisationService />,
    exact: true,
  },
  {
    path: '/franchise-with-us',
    component: <FranchiseWithUs />,
    exact: true,
  },
  {
    path: '/contact-us',
    component: <ContactUs />,
    exact: true,
  },
  {
    path: '/premium-packages',
    component: <Packages />,
    exact: true,
  }
];

export default routes;
