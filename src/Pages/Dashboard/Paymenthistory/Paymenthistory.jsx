import React from "react";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/Useaxiossecure";

const Paymenthistory = () => {
  const { user, loading: authLoading } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: payments = [], isLoading, error } = useQuery({
    queryKey: ["payments", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/payment?email=${user?.email}`);
      return res.data;
    },
    enabled: !!user?.email,
  });

  if (authLoading || isLoading) {
    return <div className="text-center py-8">Loading...</div>;
  }

  if (error) {
    return <div className="text-center py-8 text-red-500">Error loading payments: {error.message}</div>;
  }

  if (!user) {
    return <div className="text-center py-8">Please log in to view your payment history</div>;
  }

  return (
    <div>
      <h2 className="text-3xl mb-6">Payments History: {payments.length}</h2>

      {payments.length === 0 ? (
        <div className="text-center py-8 text-gray-500">No payments found</div>
      ) : (
        <div className="overflow-x-auto">
          <table className="table table-zebra">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Parcel Name</th>
                <th>Amount</th>
                <th>Transaction Id</th>
                 <th>Paid Time</th>
                <th>Status</th>
                <th>Tracking ID</th>
              </tr>
            </thead>
            <tbody>
              {payments.map((payment, index) => (
                <tr key={payment._id}>
                  <th>{index + 1}</th>
                  <td>{payment.parcelName || "N/A"}</td>
                  <td>${payment.amount || 0}</td>
                  <td>{payment.transactionId || "N/A"}</td>
                    <td>{payment.paidTime}</td>
                  <td>
                    <span className={`badge ${payment.paymentStatus === 'paid' ? 'badge-success' : 'badge-warning'}`}>
                      {payment.paymentStatus || "Pending"}
                    </span>
                  </td>
                  <td>{payment.trackingId || "N/A"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Paymenthistory;
