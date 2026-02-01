import { createBrowserRouter } from 'react-router';
import Root from '../Layout/Root';
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
