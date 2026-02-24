import { useMutation, useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import Swal from 'sweetalert2';
import useAxios from '../../hooks/useAxios';

export default function MakeAdminPage() {
  const [emailQuery, setEmailQuery] = useState('');
  const api = useAxios();

  // 🔄 Fetch users
  const { data, isFetching, isError, refetch } = useQuery({
    queryKey: ['users', emailQuery],
    enabled: emailQuery.length > 2,
    queryFn: async () => {
      const res = await api.get(`/users/search?email=${emailQuery}`);
      return res.data.data;
    },
  });
  console.log(data);

  // 🛡 Make admin mutation
  const { mutateAsync: makeAdminMutation } = useMutation({
    mutationFn: async ({ userId, role }) => {
      return await api.patch(`/users/${userId}/role`, { role });
    },
    onSuccess: () => {
      refetch(); // Refresh users list after making admin
    },
  });

  //   🔍 Search filter
  //   const filteredUsers = data?.filter((user) =>
  //     user.email?.toLowerCase().includes(emailQuery.toLowerCase())
  //   );

  // 🎯 Handler
  const handleMakeAdmin = async (user) => {
    const newRole = user.role === 'admin' ? 'user' : 'admin';
    const result = await Swal.fire({
      title: 'Make Admin?',
      text: `Are you sure you want to make ${user.email} an ${newRole}?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#16a34a',
      cancelButtonColor: '#dc2626',
      confirmButtonText: 'Yes, Make Admin',
    });

    if (result.isConfirmed) {
      try {
        await makeAdminMutation({ userId: user._id, role: newRole });

        Swal.fire({
          title: 'Success!',
          text: `User is now a ${newRole}`,
          icon: 'success',
          timer: 1500,
          showConfirmButton: false,
        });
      } catch (err) {
        Swal.fire({
          title: 'Error!',
          text: 'Failed to make admin',
          icon: 'error',
        });
      }
    }
  };

  //   if (isFetching) {
  //     return <div className="p-6 text-center">Loading users...</div>;
  //   }

  //   if (isError) {
  //     return (
  //       <div className="p-6 text-center text-red-500">Failed to load users</div>
  //     );
  //   }

  return (
    <>
      <div className="p-4 md:p-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
          <h2 className="text-xl font-semibold text-blue-600">👑 Make Admin</h2>

          {/* Search */}
          <input
            type="text"
            placeholder="Search by email..."
            value={emailQuery}
            onChange={(e) => setEmailQuery(e.target.value)}
            className="w-full md:w-72 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Table */}
        <div className="bg-white rounded-xl shadow-md overflow-x-auto">
          <table className="min-w-full text-sm">
            <thead className="bg-blue-100 text-gray-700">
              <tr>
                <th className="px-4 py-3 text-left">Email</th>
                <th className="px-4 py-3 text-left">Created At</th>
                <th className="px-4 py-3 text-left">Role</th>
                <th className="px-4 py-3 text-center">Action</th>
              </tr>
            </thead>

            <tbody>
              {data?.length > 0 ? (
                data.map((user) => (
                  <tr
                    key={user._id}
                    className="border-b hover:bg-blue-50 transition"
                  >
                    <td className="px-4 py-3 font-medium">{user.email}</td>

                    <td className="px-4 py-3">
                      {user.create_at
                        ? new Date(user.create_at).toLocaleString()
                        : 'N/A'}
                    </td>

                    <td className="px-4 py-3">
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-semibold ${
                          user.role === 'admin'
                            ? 'bg-green-100 text-green-600'
                            : 'bg-gray-100 text-gray-600'
                        }`}
                      >
                        {user.role || 'user'}
                      </span>
                    </td>

                    <td className="px-4 py-3 text-center">
                      {user.role === 'admin' ? (
                        <span className="text-green-600 font-semibold text-xs">
                          Admin
                        </span>
                      ) : (
                        <button
                          disabled={makeAdminMutation.isLoading}
                          onClick={() => handleMakeAdmin(user)}
                          className="px-3 py-1 rounded-md bg-blue-500 text-white text-xs hover:bg-blue-600 disabled:opacity-50"
                        >
                          {makeAdminMutation.isLoading
                            ? 'Processing...'
                            : 'Make Admin'}
                        </button>
                      )}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4" className="text-center py-6 text-gray-500">
                    No users found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
