import { createBrowserRouter } from 'react-router';
import DashBoard from '../Layout/DashBoard';
import Root from '../Layout/Root';
import AboutUsPage from '../pages/AboutUsPage';
import BeaRiderPage from '../pages/BeaRiderPage';
import CoveragePage from '../pages/CoveragePage';
import AllParcelPage from '../pages/DashBoard/AllParcelPage';
import Forbidden from '../pages/DashBoard/Forbidden';
import MakeAdminPage from '../pages/DashBoard/MakeAdminPage';
import MyParcelPaymentHistoryPage from '../pages/DashBoard/MyParcelPaymentHistoryPage';
import RidersInfoPage from '../pages/DashBoard/RidersInfoPage';
import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import PricingPage from '../pages/PricingPage';
import RegisterPage from '../pages/RegisterPage';
import SendParcelPage from '../pages/SendParcelPage';
import ServicePage from '../pages/ServicePage';
import Payment from '../provider/Payment/Payment';
import AdminRoute from './AdminRoute';
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
        path: 'forbidden',
        element: <Forbidden />,
      },
      {
        path: '/be-a-rider',
        element: <BeaRiderPage />,
      },
      {
        path: '/send-parcel',
        element: (
          <PrivateRoute>
            <SendParcelPage />
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: '/dash-board',
    element: (
      <PrivateRoute>
        <DashBoard />
      </PrivateRoute>
    ),
    children: [
      {
        index: true,
        // path: 'parcel',
        element: <AllParcelPage />,
      },
      {
        path: 'payment/:id',
        element: <Payment />,
      },

      {
        path: 'my-payment-history',
        element: <MyParcelPaymentHistoryPage />,
      },
      {
        path: 'pending-riders',
        element: <RidersInfoPage />,
      },
      {
        path: 'make-admin',
        element: (
          <AdminRoute>
            <MakeAdminPage />
          </AdminRoute>
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
