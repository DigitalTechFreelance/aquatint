import React from 'react';

const Home = React.lazy(() => import('./pages/Home'));
const AboutUs = React.lazy(() => import('./pages/AboutUs'));
const Services = React.lazy(() => import('./pages/Services'));
const WashingServices = React.lazy(() => import('./pages/WashingServices'));
const DetailingServices = React.lazy(() => import('./pages/DetailingServices'));
const CeramicCoating = React.lazy(() => import('./pages/CeramicCoating'));
const PaintProtectionFilm = React.lazy(() => import('./pages/PaintProtectionFilm'));
const ClarityCoat = React.lazy(() => import('./pages/ClarityCoat'));
const CustomisationService = React.lazy(() => import('./pages/CustomisationService'));
const FranchiseWithUs = React.lazy(() => import('./pages/FranchiseWithUs'));
const ContactUs = React.lazy(() => import('./pages/ContactUs'));
const ComprehensizePackage = React.lazy(() => import('./pages/ComprehensizePackage'));
const SignaturePackage = React.lazy(() => import('./pages/SignaturePackage'));
const EssentialPackage = React.lazy(() => import('./pages/EssentialPackage'));
const Packages = React.lazy(() => import('./pages/Packages'));
const IndexList = React.lazy(() => import('./temp/IndexList'));
// {
//   path: '/pages',
//   component: <IndexList />,
//   exact: true,
// },
// {
//   path: '/',
//   component: <IndexList />,
//   exact: true,
// },
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
  },
  {
    path: '/customisation-service',
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
    path: '/comprehensive-package',
    component: <ComprehensizePackage />,
    exact: true,
  },
  {
    path: '/signature-package',
    component: <SignaturePackage />,
    exact: true,
  },
  {
    path: '/essential-package',
    component: <EssentialPackage />,
    exact: true,
  },
  {
    path: '/premium-packages',
    component: <Packages />,
    exact: true,
  }
];

export default routes;
