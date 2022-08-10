import React from 'react';
import './assets/css/icons.css';
import './styles/scss/production/style.scss';
import localRoutes from './routes';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import Flybutton from './components/common/Flybutton';
import axios from './axios-common';

const routes = [
  ...localRoutes
];
  
function App() {

  const [data, setData] = React.useState(null)

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
          <Header data={data}/>
          <React.Suspense
            fallback={
              <div>
                {/* <PageLoader /> */}
              </div>
            }
          >
            <Routes>
              {routes.map((route) => (
                <Route
                  key={route.path}
                  path={route.path}
                  element={route.component}
                  exact={route.exact}
                />
              ))}
            </Routes>
          </React.Suspense>
          <Footer data={data}/>
        <Flybutton/>
    </Router>
     ): null

  );
}

export default App;
