import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import Loading from '../../components/Loading/Loading';
import useAuth from '../../hooks/useAuth';
import useAxios from '../../hooks/useAxios';

export default function RidersInfoPage() {
  const [selectedRider, setSelectedRider] = useState(null);
  const api = useAxios();
  const { user } = useAuth();
  const { isPending, isError, data, error, refetch } = useQuery({
    queryKey: ['riders'],
    queryFn: async () => {
      const res = await api.get('/riders');
      return res.data;
    },
  });

  const handleApprove = async (riderId) => {
    try {
      const res = await api.patch(`/riders/${riderId}/status`, {
        status: 'approved',
        email: user.email,
      });
      refetch();
      setSelectedRider(null);
      console.log(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleReject = async (riderId) => {
    try {
      const res = await api.patch(`/riders/${riderId}/status`, {
        status: 'rejected',
      });
      refetch();
      setSelectedRider(null);
      console.log(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  if (isPending) {
    return <Loading />;
  }
  console.log(data?.data);
  return (
    <>
      <div className="bg-white m-5 p-5 rounded-md">
        {/* ================= Pending Riders ================= */}
        <div className="bg-white rounded-xl shadow-md p-4 md:p-6">
          <h2 className="text-xl font-semibold mb-4 text-orange-500">
            🕒 Pending Riders
          </h2>

          <div className="overflow-x-auto">
            <table className="min-w-full text-sm text-left">
              <thead className="bg-orange-100 text-gray-700">
                <tr>
                  <th className="px-4 py-3">Name</th>
                  <th className="px-4 py-3">Email</th>
                  <th className="px-4 py-3">Region</th>
                  <th className="px-4 py-3">District</th>
                  <th className="px-4 py-3">Applied</th>
                  <th className="px-4 py-3 text-center">Action</th>
                </tr>
              </thead>

              <tbody>
                {data?.data
                  ?.filter((f) => f.status === 'pending')
                  .map(
                    (rider) => (
                      console.log(rider),
                      (
                        <tr
                          key={rider._id}
                          className="border-b hover:bg-orange-50 transition"
                        >
                          <td className="px-4 py-3 font-medium">
                            {rider.name}
                          </td>
                          <td className="px-4 py-3">{rider.email}</td>
                          <td className="px-4 py-3">{rider.yourRegion}</td>
                          <td className="px-4 py-3">{rider.yourDistrict}</td>
                          <td className="px-4 py-3">
                            {new Date(rider.created_at).toLocaleDateString()}
                          </td>

                          <td className="px-4 py-3">
                            <div className="flex flex-wrap gap-2 justify-center">
                              <button
                                onClick={() => setSelectedRider(rider)}
                                className="px-3 py-1 rounded-md bg-blue-500 text-white text-xs hover:bg-blue-600"
                              >
                                View
                              </button>
                              <button
                                onClick={() => handleApprove(rider._id)}
                                className="px-3 py-1 rounded-md bg-green-500 text-white text-xs hover:bg-green-600"
                              >
                                Approve
                              </button>
                              <button
                                onClick={() => handleReject(rider._id)}
                                className="px-3 py-1 rounded-md bg-red-500 text-white text-xs hover:bg-red-600"
                              >
                                Reject
                              </button>
                            </div>
                          </td>
                        </tr>
                      )
                    )
                  )}
              </tbody>
            </table>
          </div>
        </div>

        {/* ================= Approved Riders ================= */}
        <div className="bg-white rounded-xl shadow-md p-4 md:p-6">
          <h2 className="text-xl font-semibold mb-4 text-green-600">
            ✅ Approved Riders
          </h2>

          <div className="overflow-x-auto">
            <table className="min-w-full text-sm text-left">
              <thead className="bg-green-100 text-gray-700">
                <tr>
                  <th className="px-4 py-3">Name</th>
                  <th className="px-4 py-3">Email</th>
                  <th className="px-4 py-3">Region</th>
                  <th className="px-4 py-3">District</th>
                  <th className="px-4 py-3">Approved Date</th>
                </tr>
              </thead>

              <tbody>
                {data?.data
                  ?.filter((f) => f.status === 'approved')
                  .map((rider) => (
                    <tr
                      key={rider._id}
                      className="border-b hover:bg-green-50 transition"
                    >
                      <td className="px-4 py-3 font-medium">{rider.name}</td>
                      <td className="px-4 py-3">{rider.email}</td>
                      <td className="px-4 py-3">{rider.yourRegion}</td>
                      <td className="px-4 py-3">{rider.yourDistrict}</td>
                      <td className="px-4 py-3 font-semibold text-green-600">
                        {new Date(rider.approveDate).toLocaleDateString()}
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {selectedRider && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl w-full max-w-lg p-6 relative animate-scaleIn">
            {/* Close */}
            <button
              onClick={() => setSelectedRider(null)}
              className="absolute top-3 right-3 text-gray-500 hover:text-red-500 text-xl"
            >
              ✕
            </button>

            <h3 className="text-xl font-semibold mb-4 text-blue-600">
              Rider Details
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
              <Detail label="Name" value={selectedRider.name} />
              <Detail label="Email" value={selectedRider.email} />
              <Detail label="Phone" value={selectedRider.phone} />
              <Detail label="Region" value={selectedRider.yourRegion} />
              <Detail label="District" value={selectedRider.yourDistrict} />
              <Detail
                label="Applied Date"
                value={new Date(selectedRider.created_at).toLocaleDateString()}
              />
              <Detail label="NID" value={selectedRider.nid} />
              <Detail label="Bike Status" value={selectedRider.status} />
              <Detail
                label="Bike Brand, Model & Year"
                value={selectedRider.bikeBrandModelAndYear}
              />
              <Detail
                label="Bike Registration Number"
                value={selectedRider.bikeRegistrationNumber}
              />
              <Detail
                label="Bike Driving License Number"
                value={selectedRider.drivingLicenseNumber}
              />
              <Detail label="Yourself" value={selectedRider.Yourself} />
            </div>

            <div className="mt-6 flex justify-end gap-3">
              <button
                onClick={() => setSelectedRider(null)}
                className="px-4 py-2 rounded-md border text-gray-600 hover:bg-gray-100"
              >
                Close
              </button>
              <button
                onClick={() => handleApprove(selectedRider._id)}
                className="px-4 py-2 rounded-md bg-green-500 text-white hover:bg-green-600"
              >
                Approve Rider
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
function Detail({ label, value }) {
  return (
    <div className="bg-gray-50 rounded-md p-3">
      <p className="text-gray-500 text-xs">{label}</p>
      <p className="font-medium">{value}</p>
    </div>
  );
}
