import React from "react";
import { useParams } from "react-router";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import Useaxiossecure from "../../../hooks/Useaxiossecure";

const Payment = () => {
  const { parcelId } = useParams();
  const axiosSecure = Useaxiossecure();
  const [isProcessing, setIsProcessing] = React.useState(false);

  const {
    data: parcel,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["parcel", parcelId],
    enabled: !!parcelId,
    queryFn: async () => {
      const res = await axiosSecure.get(`/parcels/${parcelId}`);
      return res.data;
    },
  });

  const handlePayment = async () => {
    try {
      setIsProcessing(true);

      const PaymentInfo = {
        cost: parcel.cost,
        parcelId: parcel._id,
        parcelname: parcel.parcelname,
        senderemail: parcel.senderemail,
      };

      console.log("Payment Info Sent:", PaymentInfo);

      const res = await axiosSecure.post("/create-checkout-session", PaymentInfo);
      
      console.log("Checkout Session Response:", res.data);

      if (res.data?.sessionId) {
        // Old method - if backend returns sessionId
        const stripe = window.Stripe("your_publishable_key");
        stripe.redirectToCheckout({ sessionId: res.data.sessionId });
      } else if (res.data?.url) {
        // Redirect to checkout URL
        window.location.href = res.data.url;
      } else {
        throw new Error("No session ID or checkout URL received from server");
      }
    } catch (error) {
      console.error("Payment Error:", error);
      Swal.fire({
        icon: "error",
        title: "Payment Error",
        text: error.response?.data?.message || error.message || "Failed to create payment session. Please try again.",
      });
    } finally {
      setIsProcessing(false);
    }
  };

  if (isLoading) {
    return (
      <div className="flex justify-center mt-10">
        <span className="loading loading-dots loading-xl"></span>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="text-center mt-10 text-red-500">
        Error: {error.message}
      </div>
    );
  }

  if (!parcel) {
    return <h2 className="text-center mt-10">No Parcel Found</h2>;
  }

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">Payment Page</h2>

      <div className="bg-white rounded-lg shadow-md p-6 max-w-md">
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-4">Order Details</h3>
          <div className="space-y-3 text-gray-700">
            <div className="flex justify-between">
              <span className="font-medium">Parcel Name:</span>
              <span>{parcel.parcelname}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium">Parcel Type:</span>
              <span className="badge badge-info">{parcel.parcelType === "document" ? "Document" : "Non-Document"}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium">Weight:</span>
              <span>{parcel.parcelweight} KG</span>
            </div>
            <hr className="my-4" />
            <div className="flex justify-between text-lg font-bold">
              <span>Total Amount:</span>
              <span className="text-green-600">$ {parcel.cost}</span>
            </div>
          </div>
        </div>

        <button
          onClick={handlePayment}
          disabled={isProcessing}
          className="btn btn-primary w-full text-black"
        >
          {isProcessing ? (
            <>
              <span className="loading loading-spinner loading-sm"></span>
              Processing...
            </>
          ) : (
            "Pay with Stripe"
          )}
        </button>
      </div>
    </div>
  );
};

export default Payment;