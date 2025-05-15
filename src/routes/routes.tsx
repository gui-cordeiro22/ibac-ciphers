// Dependencies
import { lazy } from 'react';
import type {FunctionComponent} from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

// Components
import { RouteValidator } from './route-validator';

// Pages
const Home = lazy(() => import('../pages/home'));
const SundayPage = lazy(() => import('../pages/sunday'));
const ThursdayPage = lazy(() => import('../pages/thursday'))

export const ApplicationRoutes: FunctionComponent = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RouteValidator component={Home} />} />

        <Route
          path="/domingo"
          element={<RouteValidator component={SundayPage} />}
        />

        <Route
          path="/quinta"
          element={<RouteValidator component={ThursdayPage} />}
        />

        <Route path="*" element={<Navigate to={{ pathname: '/' }} />} />
      </Routes>
    </BrowserRouter>
  );
};
