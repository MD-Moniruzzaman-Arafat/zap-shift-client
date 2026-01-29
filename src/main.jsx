import Aos from 'aos';
import 'aos/dist/aos.css';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router';
import './index.css';
import AuthProvider from './provider/AuthProvider.jsx';
import { router } from './router/Router.jsx';

Aos.init();
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
