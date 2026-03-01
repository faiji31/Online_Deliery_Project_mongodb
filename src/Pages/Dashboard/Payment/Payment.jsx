import React from "react";
import { useParams } from "react-router";
import { useQuery } from "@tanstack/react-query";
import Useaxiossecure from "../../../hooks/Useaxiossecure";

const Payment = () => {
  const { parcelId } = useParams();
  const axiosSecure = Useaxiossecure();

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
      <h2 className="text-2xl font-bold mb-4">Payment Page</h2>

     
        <h3 className="text-xl font-semibold">
          Parcel Name: {parcel.parcelname}
        </h3>
        <button className="btn btn-primary text-black">Pay</button>
       
     

       
      </div>
 
  );
};

export default Payment;