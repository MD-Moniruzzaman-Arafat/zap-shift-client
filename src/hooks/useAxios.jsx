import axios from 'axios';
import { useEffect } from 'react';
import { useNavigate } from 'react-router';
import useAuth from './useAuth';

const api = axios.create({
  baseURL: 'https://zap-shift-server-blond.vercel.app',
  //   timeout: 1000,
  //   headers: { 'X-Custom-Header': 'foobar' },
});

export default function useAxios() {
  const { user, userLogOut } = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    const requestInterceptor = api.interceptors.request.use(
      async (config) => {
        if (user) {
          const token = await user.getIdToken(); // Firebase ID Token
          config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
      },
      (error) => Promise.reject(error)
    );

    const responseInterceptor = api.interceptors.response.use(
      (response) => response,
      (error) => {
        const status = error.response?.status;
        if (status === 403) {
          // Handle unauthorized or forbidden responses globally
          navigate('/forbidden');
        } else if (status === 401) {
          // Handle unauthorized responses globally (e.g., token expired)
          userLogOut();
          navigate('/login');
        }
        return Promise.reject(error);
      }
    );

    // cleanup (VERY IMPORTANT)
    return () => {
      api.interceptors.request.eject(requestInterceptor);
      api.interceptors.response.eject(responseInterceptor);
    };
  }, [user, navigate]);
  return api;
}
