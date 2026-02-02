import { createBrowserRouter } from 'react-router';
import Root from '../Layout/Root';
import AboutUsPage from '../pages/AboutUsPage';
import BeaRiderPage from '../pages/BeaRiderPage';
import CoveragePage from '../pages/CoveragePage';
import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import PricingPage from '../pages/PricingPage';
import RegisterPage from '../pages/RegisterPage';
import ServicePage from '../pages/ServicePage';
import PrivateRoute from './PrivateRoute';

export let router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: '/service',
        element: (
          <PrivateRoute>
            <ServicePage />
          </PrivateRoute>
        ),
      },
      {
        path: '/coverage',
        element: <CoveragePage />,
      },
      {
        path: '/about-us',
        element: <AboutUsPage />,
      },
      {
        path: '/pricing',
        element: <PricingPage />,
      },
      {
        path: '/be-a-rider',
        element: <BeaRiderPage />,
      },
    ],
  },
  {
    path: '/login',
    Component: LoginPage,
  },
  {
    path: '/register',
    Component: RegisterPage,
  },
]);
