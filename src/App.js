import React from 'react';
import './assets/css/icons.css';
import './styles/scss/production/style.scss';
import localRoutes from './routes';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const routes = [
  ...localRoutes
];
// https://hakunaabataataa.com
  
function App() {
  return (
    <Router basename="/">
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
    </Router>
  );
}

export default App;
