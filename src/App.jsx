import { RouterProvider } from 'react-router';
import './App.css';
import Loading from './components/Loading/Loading';
import useAuth from './hooks/useAuth';
import { router } from './router/Router';

function App() {
  const { loading } = useAuth();
  if (loading) {
    return <Loading />;
  }
  return <RouterProvider router={router} />;
}

export default App;
