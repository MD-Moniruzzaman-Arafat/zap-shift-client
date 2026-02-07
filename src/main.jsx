import Aos from 'aos';
import 'aos/dist/aos.css';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import AuthProvider from './provider/AuthProvider.jsx';
import ReactQueryClientProvider from './provider/ReactQueryClientProvider.jsx';

Aos.init();
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <ReactQueryClientProvider>
        <App />
      </ReactQueryClientProvider>
    </AuthProvider>
  </StrictMode>
);
