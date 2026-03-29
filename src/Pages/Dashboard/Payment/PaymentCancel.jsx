import React from 'react';
import { Link } from 'react-router';

const PaymentCancel = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-base-200 p-4">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-md text-center">
        <div className="mb-4">
          <svg
            className="w-16 h-16 mx-auto text-red-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </div>
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Payment Cancelled</h2>
        <p className="text-gray-600 mb-6">Your payment was cancelled. Please try again or contact support if you need help.</p>
        <Link to="/dashboard/my-parcels">
          <button className="btn btn-primary text-black w-full">Back to My Parcels</button>
        </Link>
      </div>
    </div>
  );
};

export default PaymentCancel;