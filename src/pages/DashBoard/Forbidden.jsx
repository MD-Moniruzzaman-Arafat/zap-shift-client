import { Link } from 'react-router';

export default function Forbidden() {
  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100 px-4">
        <div className="bg-white shadow-xl rounded-2xl p-10 max-w-md w-full text-center border border-slate-200">
          {/* Icon */}
          <div className="mx-auto w-20 h-20 flex items-center justify-center rounded-full bg-red-100 mb-6">
            <span className="text-red-500 text-4xl">🚫</span>
          </div>

          {/* Code */}
          <h1 className="text-6xl font-extrabold text-red-500">403</h1>

          {/* Title */}
          <h2 className="mt-3 text-xl font-semibold text-slate-800">
            Access Forbidden
          </h2>

          {/* Description */}
          <p className="mt-2 text-slate-500 text-sm leading-relaxed">
            You don’t have permission to access this page. Please contact the
            administrator if you believe this is a mistake.
          </p>

          {/* Actions */}
          <div className="mt-6 flex gap-3 justify-center">
            <Link
              to="/"
              className="px-5 py-2 rounded-lg bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 transition"
            >
              Go Home
            </Link>

            <Link
              to="/dash-board"
              className="px-5 py-2 rounded-lg border border-slate-300 text-slate-700 text-sm font-medium hover:bg-slate-100 transition"
            >
              Dashboard
            </Link>
          </div>

          {/* Footer text */}
          <p className="mt-6 text-xs text-slate-400">
            Error Code: 403 — Forbidden Access
          </p>
        </div>
      </div>
    </>
  );
}
