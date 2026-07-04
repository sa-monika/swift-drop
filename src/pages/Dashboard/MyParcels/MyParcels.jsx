import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAuth from "../../../Hooks/UseAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { FiEdit } from "react-icons/fi";
import { HiMiniMagnifyingGlass } from "react-icons/hi2";
import { AiFillDelete } from "react-icons/ai";
import Swal from "sweetalert2";
import { Link } from "react-router";

const MyParcels = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { data: parcels = [], refetch } = useQuery({
    queryKey: ["myParcels", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/parcels?email=${user.email}`);

      return res.data;
    },
  });

  const handleParcelDelete = (id) => {
    console.log(id);

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/parcels/${id}`).then((res) => {
          console.log(res.data);
          if (res.data.deletedCount) {
            // refresh the data in the ui
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Your parcel request has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };

  const handlePayment = async (parcel) => {
    const paymentInfo = {
      cost: parcel.cost,
      parcelId: parcel._id,
      senderEmail: parcel.senderEmail,
      parcelName: parcel.parcelName,
    };

    const res = await axiosSecure.post("/create-checkout-session", paymentInfo);
    console.log(res.data);

    window.location.assign(res.data.url);
  };

  return (
    <div className="bg-white rounded-xl m-5 p-3">
      <h2 className="text-secondary text-4xl  font-bold ml-3 my-4">
        My Parcels : {parcels.length}
      </h2>

      <div className="overflow-x-auto text-black">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Parcel Name</th>
              <th>Cost</th>
              <th>Payment</th>
              <th>Delivery Status</th>
              <th>Tracking Number</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {parcels.map((parcel, index) => (
              <tr key={parcel._id}>
                <th>{index + 1}</th>
                <td>{parcel.parcelName}</td>
                <td>{parcel.cost}</td>
                <td>
                  {parcel.paymentStatus === "paid" ? (
                    <span className="text-green-600 font-semibold">Paid</span>
                  ) : (
                    <button
                      onClick={() => handlePayment(parcel)}
                      className="btn btn-sm text-black btn-primary"
                    >
                      Pay
                    </button>
                  )}
                </td>
                <td>{parcel.deliveryStatus}</td>
                <td>
                  <Link to={`/parcel-track/${parcel.trackingId}`}>
                    {parcel.trackingId}
                  </Link>
                </td>
                <td className="space-x-2">
                  <button className="btn btn-square hover:bg-primary">
                    <FiEdit></FiEdit>
                  </button>
                  <button className="btn btn-square hover:bg-primary">
                    <HiMiniMagnifyingGlass />
                  </button>
                  <button
                    onClick={() => handleParcelDelete(parcel._id)}
                    className="btn btn-square hover:bg-primary"
                  >
                    <AiFillDelete />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyParcels;
