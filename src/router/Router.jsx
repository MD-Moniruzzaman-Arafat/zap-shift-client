import { createBrowserRouter } from 'react-router';
import App from '../App';
import HomePage from '../pages/HomePage';

export let router = createBrowserRouter([
  {
    path: '/',
    Component: App,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
    ],
  },
]);
