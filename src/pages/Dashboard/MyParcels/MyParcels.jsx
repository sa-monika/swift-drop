import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAuth from "../../../Hooks/UseAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const MyParcels = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { data: parcels = [] } = useQuery({
    queryKey: ["myParcels", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/parcels?email=${user.email}`);
      console.log(parcels);
      return res.data;
    },
  });
  return (
    <div>
      <h2 className="text-primary text-4xl  font-semibold text-center my-4">
        My Parcels : {parcels.length}
      </h2>

      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Parcel Name</th>
              <th>Cost</th>
              <th>Payment Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {parcels.map((parcel, index) => {
              <tr key={parcel._id}>
                <th>{index + 1}</th>
                <td>{parcel.parcelName}</td>
                <td>{parcel.cost}</td>
                <td>status</td>
                <td>Blue</td>
              </tr>;
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyParcels;
