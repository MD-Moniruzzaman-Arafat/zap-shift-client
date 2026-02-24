import { useQuery } from '@tanstack/react-query';
import useAuth from './useAuth';
import useAxios from './useAxios';

export default function useUserRole() {
  const { user, loading: authLoading } = useAuth(); // firebase/auth context
  const api = useAxios();

  const {
    data: roleData,
    isLoading,
    isError,
    error,
    refetch,
  } = useQuery({
    queryKey: ['user-role', user?.email],
    enabled: !authLoading && !!user?.email, // only run when user exists
    queryFn: async () => {
      const res = await api.get(`/users/${user.email}/role`);
      return res.data.data; // { role: 'admin' }
    },
  });

  return {
    role: roleData?.role || 'user',
    isAdmin: roleData?.role === 'admin',
    isModerator: roleData?.role === 'moderator',
    isUser: roleData?.role === 'user',
    isLoading: isLoading || authLoading,
    isError,
    error,
    refetch,
  };
}
