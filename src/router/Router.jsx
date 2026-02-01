import { createBrowserRouter } from 'react-router';
import Root from '../Layout/Root';
import BeaRiderPage from '../pages/BeaRiderPage';
import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
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
        element: <div>Coverage Page</div>,
      },
      {
        path: '/about-us',
        element: <div>About Us Page</div>,
      },
      {
        path: '/pricing',
        element: <div>Pricing Page</div>,
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
