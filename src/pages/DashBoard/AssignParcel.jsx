import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';
import AssignModal from '../../components/DashBoard/AssignModal/AssignModal';
import useAxios from '../../hooks/useAxios';

const statusColor = (status) => {
  const map = {
    Pending: {
      bg: 'bg-amber-100',
      text: 'text-amber-700',
      dot: 'bg-amber-400',
    },
    'In Transit': {
      bg: 'bg-blue-100',
      text: 'text-blue-700',
      dot: 'bg-blue-400',
    },
    Delivered: {
      bg: 'bg-emerald-100',
      text: 'text-emerald-700',
      dot: 'bg-emerald-400',
    },
    Cancelled: { bg: 'bg-red-100', text: 'text-red-700', dot: 'bg-red-400' },
  };
  return map[status] || map['Pending'];
};

const paymentColor = (status) =>
  ({
    paid: 'text-emerald-600 bg-emerald-50 border border-emerald-200',
    unpaid: 'text-rose-600 bg-rose-50 border border-rose-200',
  })[status] || 'text-gray-500 bg-gray-50';

const formatDate = (iso) =>
  new Date(iso).toLocaleDateString('en-GB', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  });

export default function AssignParcel() {
  const queryClient = useQueryClient();
  const [activeParcel, setActiveParcel] = useState(null);
  const [toast, setToast] = useState(null);
  const [filter, setFilter] = useState('All');
  const api = useAxios();
  const {
    data: parcels = [],
    isLoading: parcelsLoading,
    isError,
  } = useQuery({
    queryKey: ['parcels'],
    queryFn: async () => {
      const res = await api.get(
        '/parcel?deliveryStatus=Pending&paymentStatus=paid'
      );
      return res.data.data;
    },
  });

  const { data: riders = [], isLoading: ridersLoading } = useQuery({
    queryKey: ['riders'],
    queryFn: async () => {
      const res = await api.get('/riders');
      return res.data.data;
    },
    enabled: !!activeParcel,
  });

  const assignMutation = useMutation({
    mutationFn: async ({ parcelId, riderId, riderName }) => {
      const res = await api.post('/assign-parcel', {
        parcelId,
        riderId,
      });
      return res.data;
    },
    onSuccess: ({ riderName }) => {
      queryClient.invalidateQueries({ queryKey: ['parcels'] });
      setActiveParcel(null);
      // showToast(`Rider "${riderName}" assigned successfully!`);
    },
    // onError: () => showToast('Assignment failed. Try again.', 'error'),
  });
  console.log(riders);
  return (
    <>
      {activeParcel && (
        <AssignModal
          parcel={activeParcel}
          riders={ridersLoading ? [] : riders}
          onClose={() => setActiveParcel(null)}
          onAssign={assignMutation.mutate}
          isAssigning={assignMutation.isPending}
        />
      )}
      <div
        className="min-h-screen bg-slate-50"
        style={{ fontFamily: "'DM Sans', sans-serif" }}
      >
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />

        {/* Toast */}
        {toast && (
          <div
            className={`fixed top-5 right-5 z-50 px-5 py-3 rounded-xl shadow-lg text-sm font-semibold flex items-center gap-2 transition-all ${
              toast.type === 'error'
                ? 'bg-rose-500 text-white'
                : 'bg-emerald-500 text-white'
            }`}
          >
            <span>{toast.type === 'error' ? '✕' : '✓'}</span>
            {toast.msg}
          </div>
        )}

        {/* Page Header */}
        <div className="px-6 py-8 border-b border-gray-200 bg-white shadow-sm">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <p className="text-xs font-bold tracking-widest text-blue-500 uppercase mb-1">
                Logistics Panel
              </p>
              <h1 className="text-2xl font-extrabold text-gray-900">
                Assign Parcels
              </h1>
              <p className="text-sm text-gray-400 mt-0.5">
                Manage and assign delivery riders to pending parcels
              </p>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span className="text-gray-500">
                {parcels.filter((p) => p.deliveryStatus === 'Pending').length}{' '}
                parcels awaiting assignment
              </span>
            </div>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="max-w-7xl mx-auto px-6 pt-6">
          <div className="flex gap-2 flex-wrap">
            {/* {filters.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-4 py-1.5 rounded-full text-sm font-semibold transition-all border ${
                  filter === f
                    ? 'bg-slate-900 text-white border-slate-900'
                    : 'bg-white text-gray-500 border-gray-200 hover:border-gray-400'
                }`}
              >
                {f}
                {f !== 'All' && (
                  <span className="ml-1.5 text-xs opacity-60">
                    ({parcels.filter((p) => p.deliveryStatus === f).length})
                  </span>
                )}
              </button>
            ))} */}
          </div>
        </div>

        {/* Table */}
        <div className="max-w-7xl mx-auto px-6 py-5">
          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
            {parcelsLoading ? (
              <div className="flex flex-col items-center justify-center py-24 gap-3">
                <div className="w-10 h-10 rounded-full border-4 border-blue-100 border-t-blue-500 animate-spin"></div>
                <p className="text-sm text-gray-400 font-medium">
                  Loading parcels…
                </p>
              </div>
            ) : isError ? (
              <div className="text-center py-20 text-rose-500 font-semibold">
                Failed to load parcels.
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr
                      className="border-b border-gray-100"
                      style={{ background: '#f8fafc' }}
                    >
                      {[
                        'Tracking ID',
                        'Parcel',
                        'Sender → Receiver',
                        'Route',
                        'Weight',
                        'Cost',
                        'Payment',
                        'Status',
                        'Rider',
                        'Action',
                      ].map((h) => (
                        <th
                          key={h}
                          className="px-4 py-3.5 text-left text-xs font-bold text-gray-400 uppercase tracking-wider whitespace-nowrap"
                        >
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-50">
                    {!parcels ? (
                      <tr>
                        <td
                          colSpan={10}
                          className="text-center py-16 text-gray-300 font-medium"
                        >
                          No parcels found
                        </td>
                      </tr>
                    ) : (
                      parcels.map((parcel, i) => {
                        const sc = statusColor(parcel.deliveryStatus);
                        return (
                          <tr
                            key={parcel._id}
                            className="hover:bg-slate-50/70 transition-colors group"
                          >
                            {/* Tracking ID */}
                            <td className="px-4 py-4">
                              <span className="font-mono text-xs font-bold text-slate-600 bg-slate-100 px-2 py-1 rounded-lg">
                                {parcel.trackingId}
                              </span>
                            </td>
                            {/* Parcel */}
                            <td className="px-4 py-4">
                              <div className="flex items-center gap-2">
                                <div
                                  className="w-8 h-8 rounded-lg flex items-center justify-center text-base flex-shrink-0"
                                  style={{
                                    background:
                                      'linear-gradient(135deg,#dbeafe,#ede9fe)',
                                  }}
                                >
                                  {parcel.type === 'document' ? '📄' : '📦'}
                                </div>
                                <div>
                                  <p className="font-semibold text-gray-800 capitalize">
                                    {parcel.parcelName}
                                  </p>
                                  <p className="text-xs text-gray-400 capitalize">
                                    {parcel.type}
                                  </p>
                                </div>
                              </div>
                            </td>
                            {/* Sender → Receiver */}
                            <td className="px-4 py-4">
                              <div className="space-y-1">
                                <div className="flex items-center gap-1.5">
                                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0"></span>
                                  <span className="font-medium text-gray-700">
                                    {parcel.senderName}
                                  </span>
                                </div>
                                <div className="flex items-center gap-1.5">
                                  <span className="w-1.5 h-1.5 rounded-full bg-purple-400 flex-shrink-0"></span>
                                  <span className="font-medium text-gray-700">
                                    {parcel.receiverName}
                                  </span>
                                </div>
                              </div>
                            </td>
                            {/* Route */}
                            <td className="px-4 py-4">
                              <div className="flex items-center gap-1.5 whitespace-nowrap">
                                <span className="px-2 py-0.5 rounded-full text-xs font-bold bg-amber-100 text-amber-700">
                                  {parcel.yourDistrict}
                                </span>
                                <span className="text-gray-300 text-xs">→</span>
                                <span className="px-2 py-0.5 rounded-full text-xs font-bold bg-indigo-100 text-indigo-700">
                                  {parcel.receiverDistrict}
                                </span>
                              </div>
                            </td>
                            {/* Weight */}
                            <td className="px-4 py-4">
                              <span className="text-gray-700 font-medium">
                                {parcel.parcelWeight}{' '}
                                <span className="text-gray-400 text-xs">
                                  kg
                                </span>
                              </span>
                            </td>
                            {/* Cost */}
                            <td className="px-4 py-4">
                              <span className="font-bold text-gray-800">
                                ৳{parcel.cost.toLocaleString()}
                              </span>
                            </td>
                            {/* Payment */}
                            <td className="px-4 py-4">
                              <span
                                className={`px-2.5 py-1 rounded-full text-xs font-bold capitalize ${paymentColor(parcel.paymentStatus)}`}
                              >
                                {parcel.paymentStatus}
                              </span>
                            </td>
                            {/* Status */}
                            <td className="px-4 py-4">
                              <span
                                className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold ${sc.bg} ${sc.text}`}
                              >
                                <span
                                  className={`w-1.5 h-1.5 rounded-full ${sc.dot}`}
                                ></span>
                                {parcel.deliveryStatus}
                              </span>
                            </td>
                            {/* Rider */}
                            <td className="px-4 py-4">
                              {parcel.assignedRiderName ? (
                                <span className="text-xs font-semibold text-emerald-600">
                                  {parcel.assignedRiderName}
                                </span>
                              ) : (
                                <span className="text-xs text-gray-300 italic">
                                  Unassigned
                                </span>
                              )}
                            </td>
                            {/* Action */}
                            <td className="px-4 py-4">
                              <button
                                onClick={() => setActiveParcel(parcel)}
                                disabled={
                                  parcel.deliveryStatus === 'In Transit' ||
                                  parcel.deliveryStatus === 'Cancelled'
                                }
                                className="px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all whitespace-nowrap disabled:opacity-30 disabled:cursor-not-allowed"
                                style={
                                  parcel.assignedRider
                                    ? {
                                        background: '#f1f5f9',
                                        color: '#64748b',
                                      }
                                    : {
                                        background:
                                          'linear-gradient(135deg,#1e40af,#4f46e5)',
                                        color: 'white',
                                      }
                                }
                              >
                                {parcel.assignedRider
                                  ? 'Reassign'
                                  : 'Assign Rider'}
                              </button>
                            </td>
                          </tr>
                        );
                      })
                    )}
                  </tbody>
                </table>
              </div>
            )}

            {/* Table Footer */}
            {!parcelsLoading && (
              <div className="px-6 py-3.5 border-t border-gray-100 flex items-center justify-between bg-gray-50/50">
                <p className="text-xs text-gray-400">
                  Showing{' '}
                  <span className="font-semibold text-gray-600">
                    {/* {filtered.length} */}
                  </span>{' '}
                  of{' '}
                  <span className="font-semibold text-gray-600">
                    {parcels.length}
                  </span>{' '}
                  parcels
                </p>
                <div className="flex items-center gap-4 text-xs text-gray-400">
                  <span>
                    📦 Total:{' '}
                    <strong className="text-gray-600">{parcels.length}</strong>
                  </span>
                  <span>
                    ✅ Assigned:{' '}
                    <strong className="text-gray-600">
                      {parcels.filter((p) => p.assignedRiderId).length}
                    </strong>
                  </span>
                  <span>
                    ⏳ Pending:{' '}
                    <strong className="text-gray-600">
                      {parcels.filter((p) => !p.assignedRiderId).length}
                    </strong>
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
