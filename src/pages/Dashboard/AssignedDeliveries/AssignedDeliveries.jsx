import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";

const AssignedDeliveries = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { refetch, data: parcels = [] } = useQuery({
    queryKey: ["parcels", user.email, "driver_assigned"],
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/parcels/rider?riderEmail=${user.email}&deliveryStatus=driver_assigned`,
      );

      return res.data;
    },
  });

  const handleAcceptDelivery = (parcel) => {
    const statusInfo = { deliveryStatus: "rider_arriving" };
    axiosSecure
      .patch(`/parcels/${parcel._id}/status`, statusInfo)
      .then((res) => {
        if (res.data.modifiedCount) {
          refetch();
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Thank you for accepting.",
            showConfirmButton: false,
            timer: 2500,
          });
        }
      });
  };

  // const handleRejectDelivery = (parcel) => {};
  return (
    <div>
      <div className="bg-white rounded-xl m-5 p-3">
        <h2 className="text-secondary text-4xl  font-bold ml-3 my-4">
          Parcels Pending Pickup : {parcels.length}
        </h2>

        <div className="overflow-x-auto text-black">
          <table className="table table-zebra">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Parcel Name</th>
                <th>Receiver Email</th>
                <th>Receiver District</th>
                <th>Receiver Address</th>
                <th>Delivery Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {parcels.map((parcel, index) => (
                <tr key={parcel._id}>
                  <th>{index + 1}</th>
                  <td>{parcel.parcelName}</td>
                  <td>{parcel.receiverEmail}</td>
                  <td>{parcel.receiverDistrict}</td>
                  <td>{parcel.receiverAddress}</td>
                  <td>{parcel.deliveryStatus}</td>

                  <td className="space-x-2 ">
                    {parcel.deliveryStatus === "driver_assigned" ? (
                      <>
                        <button
                          onClick={() => handleAcceptDelivery(parcel)}
                          className="btn bg-green-500 text-white"
                        >
                          Accept
                        </button>
                        <button
                          // onClick={() => handleRejectDelivery(parcel)}
                          className="btn text-white bg-red-600"
                        >
                          Reject
                        </button>
                      </>
                    ) : (
                      <span className="text-secondary text-bold text-[18px]">
                        Accepted
                      </span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AssignedDeliveries;
