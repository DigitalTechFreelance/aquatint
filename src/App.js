import React from 'react';
import './assets/css/icons.css';
import './styles/scss/production/style.scss';
import localRoutes from './routes';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import Flybutton from './components/common/Flybutton';
import axios from './axios-common';
import Loader from './components/common/Loader';
const DetailingServices = React.lazy(() => import('./pages/DetailingServices'));

const routes = [
  ...localRoutes
];
  
function App() {

  const [data, setData] = React.useState(null)
  const [activeTab, setActiveTab] = React.useState(0)

  React.useEffect(()=>{
		axios.get(`/global`)
		.then((res) => {
			setData(res.data)
		})
		.catch((error) => {
			// console.log("global error", error)
		})
	}, [])

  return (
    data!==null?(
      <Router>
          <React.Suspense
            fallback={
              <div>
                <Loader />
              </div>
            }
          >
          <Header data={data} activeTab={activeTab}/>
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
                  element={<DetailingServices setActiveTab={(value) => setActiveTab(value)}/>}
              />
            </Routes>
            <Footer data={data}/>
            <Flybutton/>
          </React.Suspense>
      </Router>
     ): <Loader/>

  );
}

export default App;
