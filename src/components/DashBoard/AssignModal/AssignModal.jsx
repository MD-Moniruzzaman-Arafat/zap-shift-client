import { useState } from 'react';

export default function AssignModal({
  parcel,
  riders,
  onClose,
  onAssign,
  isAssigning,
}) {
  const [selectedRider, setSelectedRider] = useState(null);
  const availableRiders = riders.filter((r) => r.status === 'approved');
  console.log(availableRiders);
  return (
    <>
      <div
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
        style={{
          background: 'rgba(10,10,20,0.55)',
          backdropFilter: 'blur(4px)',
        }}
      >
        <div
          className="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden"
          style={{ fontFamily: "'DM Sans', sans-serif" }}
        >
          {/* Header */}
          <div
            className="px-6 py-5 border-b border-gray-100"
            style={{
              background: 'linear-gradient(135deg,#0f172a 0%,#1e3a5f 100%)',
            }}
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-semibold tracking-widest text-blue-300 uppercase mb-1">
                  Assign Rider
                </p>
                <h3 className="text-white font-bold text-lg">
                  {parcel.parcelName}
                </h3>
                <p className="text-blue-200 text-xs mt-0.5">
                  {parcel.trackingId}
                </p>
              </div>
              <button
                onClick={onClose}
                className="text-blue-300 hover:text-white transition-colors text-xl font-light w-8 h-8 flex items-center justify-center rounded-full hover:bg-white/10"
              >
                ✕
              </button>
            </div>
          </div>

          {/* Route */}
          <div className="px-6 py-4 bg-slate-50 border-b border-gray-100">
            <div className="flex items-center gap-3">
              <div className="text-center">
                <div className="text-xs text-gray-400 mb-1">From</div>
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-amber-100 text-amber-700">
                  {parcel.yourDistrict}
                </span>
              </div>
              <div className="flex-1 flex items-center gap-1 justify-center">
                <div className="h-px flex-1 bg-gray-300"></div>
                <span className="text-gray-400 text-sm">✈</span>
                <div className="h-px flex-1 bg-gray-300"></div>
              </div>
              <div className="text-center">
                <div className="text-xs text-gray-400 mb-1">To</div>
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-indigo-100 text-indigo-700">
                  {parcel.receiverDistrict}
                </span>
              </div>
            </div>
          </div>

          {/* Rider list */}
          <div className="px-6 py-4">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">
              Available Riders ({availableRiders.length})
            </p>
            <div className="space-y-2 max-h-52 overflow-y-auto pr-1">
              {availableRiders.map((rider) => (
                <button
                  key={rider._id}
                  onClick={() => setSelectedRider(rider)}
                  className={`w-full flex items-center gap-3 p-3 rounded-xl border-2 transition-all text-left ${
                    selectedRider?._id === rider._id
                      ? 'border-blue-500 bg-blue-50'
                      : 'border-gray-100 hover:border-gray-300 bg-white'
                  }`}
                >
                  <div
                    className="w-9 h-9 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0"
                    style={{
                      background: 'linear-gradient(135deg,#3b82f6,#6366f1)',
                    }}
                  >
                    {rider.name.charAt(0)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-gray-800 text-sm">
                      {rider.name}
                    </p>
                    <p className="text-gray-400 text-xs">{rider.phone}</p>
                  </div>
                  <span className="text-xs font-medium text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">
                    Free
                  </span>
                  {selectedRider?._id === rider._id && (
                    <span className="text-blue-500 text-lg">✓</span>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Footer */}
          <div className="px-6 py-4 bg-gray-50 border-t border-gray-100 flex gap-3">
            <button
              onClick={onClose}
              className="flex-1 py-2.5 rounded-xl border-2 border-gray-200 text-gray-600 font-semibold text-sm hover:border-gray-300 transition-colors"
            >
              Cancel
            </button>
            <button
              disabled={!selectedRider || isAssigning}
              onClick={() =>
                onAssign({
                  parcelId: parcel._id,
                  riderId: selectedRider._id,
                  riderName: selectedRider.name,
                })
              }
              className="flex-1 py-2.5 rounded-xl font-semibold text-sm text-white transition-all disabled:opacity-40 disabled:cursor-not-allowed"
              style={{
                background:
                  selectedRider && !isAssigning
                    ? 'linear-gradient(135deg,#1e40af,#4f46e5)'
                    : '#94a3b8',
              }}
            >
              {isAssigning ? 'Assigning…' : 'Confirm Assign'}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
