import axios from 'axios';
import { useEffect } from 'react';
import useAuth from './useAuth';

const api = axios.create({
  baseURL: 'http://localhost:3000',
  //   timeout: 1000,
  //   headers: { 'X-Custom-Header': 'foobar' },
});

export default function useAxios() {
  const { user } = useAuth();
  useEffect(() => {
    const interceptor = api.interceptors.request.use(
      async (config) => {
        if (user) {
          const token = await user.getIdToken(); // Firebase ID Token
          config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
      },
      (error) => Promise.reject(error)
    );

    // cleanup (VERY IMPORTANT)
    return () => {
      api.interceptors.request.eject(interceptor);
    };
  }, [user]);
  return api;
}
