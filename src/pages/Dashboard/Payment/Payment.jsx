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

  if (isLoading) {
    return (
      <div className="">
        <PropagateLoader className="max-w-11/12 mx-auto" color="#ffaf13" />
      </div>
    );
  }
  return (
    <div className="p-10">
      <div className="card text-black max-w-xl mx-auto p-8 space-y-1 shadow-xl">
        <h2>Please pay for : {parcel.parcelName}</h2>
        <h2>Please pay for : {parcel.cost}</h2>
        <button className="btn btn-primary mt-2">Pay</button>
      </div>
    </div>
  );
};

export default Payment;
