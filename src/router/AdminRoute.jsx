import { Navigate } from 'react-router';
import Loading from '../components/Loading/Loading';
import useAuth from '../hooks/useAuth';
import useUserRole from '../hooks/useUserRole';

export default function AdminRoute({ children }) {
  const { user, loading } = useAuth();
  const { isAdmin, isLoading } = useUserRole();

  if (loading || isLoading) {
    return <Loading />;
  }
  if (!user || !isAdmin) {
    return <Navigate to={'/forbidden'} />;
  }
  return children;
}
