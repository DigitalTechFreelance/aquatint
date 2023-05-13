import React from 'react';
import './assets/css/icons.css';
import './styles/scss/production/style.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import axios from './axios-common';
import Loader from './components/common/LoaderRounded';
const DetailingServices = React.lazy(() => import('./pages/DetailingServices'));
const Home = React.lazy(() => import('./pages/Home'));
const AboutUs = React.lazy(() => import('./pages/AboutUs'));
const Services = React.lazy(() => import('./pages/Services'));
const WashingServices = React.lazy(() => import('./pages/WashingServices'));
const PaintProtectionFilm = React.lazy(() => import('./pages/PaintProtectionFilm'));
const CoatingDetail = React.lazy(() => import('./pages/CoatingDetail'));
const CustomisationService = React.lazy(() => import('./pages/CustomisationService'));
const FranchiseWithUs = React.lazy(() => import('./pages/FranchiseWithUs'));
const ContactUs = React.lazy(() => import('./pages/ContactUs'));
const PackageDetail = React.lazy(() => import('./pages/PackageDetail'));
const Packages = React.lazy(() => import('./pages/Packages'));

function App() {

  const [data, setData] = React.useState(null)
  const [activeTab, setActiveTab] = React.useState(0)

  React.useEffect(() => {
      axios.get(`/global`)
        .then((res) => {
          setData(res.data)
        })
        .catch((error) => {
          // console.log("global error", error)
        })
  }, [])
  return (
    <Router>
      <React.Suspense
        fallback={
            <Loader />
        }
      >
        <Routes>
        <Route
            path={'/'}
            element={<Home globalData={data} activeTab={activeTab} />}
            exact={true}
          />
            <Route
            path={'/home'}
            element={<Home globalData={data} activeTab={activeTab}/>}
            exact={true}

          />

        <Route
            path={'/about-us'}
            element={<AboutUs globalData={data} activeTab={activeTab} />}
            exact={true}

          />
            <Route
            path={'/services'}
            element={<Services globalData={data} activeTab={activeTab}/>}
            exact={true}

          />

        <Route
            path={'/services/:slug'}
            element={<WashingServices globalData={data} activeTab={activeTab} />}
            exact={true}

          />
            <Route
            path={'/premium-packages/:slug'}
            element={<PackageDetail globalData={data} activeTab={activeTab}/>}
            exact={true}

          />
        <Route
            path={'/services/paint-protection-film'}
            element={<PaintProtectionFilm globalData={data} activeTab={activeTab} />}
            exact={true}

          />
            <Route
            path={'/coatings/:slug'}
            element={<CoatingDetail globalData={data} activeTab={activeTab}/>}
            exact={true}

          />
        <Route
            path={'/services/customisation-service'}
            element={<CustomisationService globalData={data} activeTab={activeTab} />}
            exact={true}

          />
            <Route
            path={'/franchise-with-us'}
            element={<FranchiseWithUs globalData={data} activeTab={activeTab}/>}
            exact={true}

          />
        <Route
            path={'/contact-us'}
            element={<ContactUs globalData={data} activeTab={activeTab} />}
            exact={true}

          />
            <Route
            path={'/premium-packages'}
            element={<Packages globalData={data} activeTab={activeTab}/>}
            exact={true}

          />
          
          <Route
            path={'/services/:slug/:type'}
            element={<DetailingServices setActiveTab={(value) => setActiveTab(value)} globalData={data} activeTab={activeTab} />}
            exact={true}

          />
        </Routes>
       
      </React.Suspense>
    </Router>
  );
}

export default App;
