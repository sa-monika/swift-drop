import React from "react";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const CompletedDeliveries = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const {} = useQuery({
    queryKey: [],
    queryFn: () => {
      const res = axiosSecure.get("");
      return res.data;
    },
  });

  return (
    <div>
      <div className="bg-white rounded-xl m-5 p-3">
        <h2 className="text-secondary text-4xl  font-bold ml-3 my-4">
          Completed Deliveries : {parcels.length}
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

                  {/* <td className="space-x-2 ">
                    {parcel.deliveryStatus === "driver_assigned" ? (
                      <>
                        <button
                          onClick={() =>
                            handleDeliveryStatusUpdate(parcel, "rider_arriving")
                          }
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
                  </td> */}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CompletedDeliveries;
