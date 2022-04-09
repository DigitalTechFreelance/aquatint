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
	const [error, setError] = React.useState(null)

  React.useEffect(()=>{
		axios.get(`api/global?populate=*`)
		.then((res) => {
			// console.log("global result",res)
			setData(res.data.data.attributes)
		})
		.catch((error) => {
			setError(error)
			// console.log("global error", error)
		})
	}, [])
console.log("data global", data)
  return (
    <Router>
      {data!==null?(
        <>
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
        </>
      ): null}
     
    </Router>
  );
}

export default App;
