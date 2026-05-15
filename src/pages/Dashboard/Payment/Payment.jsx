import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useParams } from "react-router";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { PropagateLoader } from "react-spinners";

const Payment = () => {
  const { parcelId } = useParams();

  const axiosSecure = useAxiosSecure();
  const { isLoading, data: parcel = [] } = useQuery({
    queryKey: ["parcels", parcelId],
    queryFn: async () => {
      const res = await axiosSecure.get(`/parcels/${parcelId}`);
      return res.data;
    },
  });

  const handlePayment = async () => {
    const paymentInfo = {
      cost: parcel.cost,
      senderEmail: parcel.senderEmail,
      parcelId: parcel._id,
      parcelName: parcel.parcelName,
    };
    const res = await axiosSecure.post("/create-checkout-session", paymentInfo);

    console.log(res.data);
    // for navigation
    window.location.assign(res.data.url);
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <PropagateLoader color="#ffaf13" />
      </div>
    );
  }
  return (
    <div className="p-10">
      <div className="card text-black max-w-xl mx-auto p-8 space-y-1 shadow-xl">
        <h2>
          Please pay $ {parcel.cost} for {parcel.parcelName}
        </h2>

        <button
          onClick={handlePayment}
          className="btn btn-success text-white  mt-2"
        >
          Pay
        </button>
      </div>
    </div>
  );
};

export default Payment;
