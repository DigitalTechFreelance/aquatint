import React from 'react';
import './assets/css/icons.css';
import './styles/scss/production/style.scss';
import localRoutes from './routes';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import Flybutton from './components/common/Flybutton';
import axios from './axios-common';
import Loader from './components/common/LoaderRounded';
const DetailingServices = React.lazy(() => import('./pages/DetailingServices'));

const routes = [
  ...localRoutes
];

function App() {

  const [data, setData] = React.useState(null)
  const [activeTab, setActiveTab] = React.useState(0)

  React.useEffect(() => {
    setTimeout(() => {
      axios.get(`/global`)
        .then((res) => {
          setData(res.data)
        })
        .catch((error) => {
          // console.log("global error", error)
        })
    }, 500)

  }, [])

  return (
    <Router>
      <React.Suspense
        fallback={
            <Loader />
        }
      >
        {data !== null && <Header data={data} activeTab={activeTab} />}
        <Routes>
          {routes.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              element={route.component}
              exact={route.exact}
            />
          ))}
          <Route
            path={'/services/:slug/:type'}
            element={<DetailingServices setActiveTab={(value) => setActiveTab(value)} />}
          />
        </Routes>
        {data !== null && (
          <>
            <Footer data={data} />
            <Flybutton />
          </>)

        }
      </React.Suspense>
    </Router>
  );
}

export default App;
