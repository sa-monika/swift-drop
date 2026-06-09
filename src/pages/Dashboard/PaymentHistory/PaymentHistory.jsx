import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const PaymentHistory = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: payments = [] } = useQuery({
    queryKey: ["payments", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/payments?email=${user.email}`);
      console.log(res.data);
      return res.data;
    },
  });

  return (
    <div className=" m-5 p-3 bg-white rounded-xl">
      <h2 className="text-secondary text-4xl  font-bold ml-3 my-4">
        Payment History
      </h2>
      <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100 m-4">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Parcel Info</th>
              <th>Recipient Info</th>
              <th>Paid Time</th>
              <th>Tracking Number</th>
              <th>Payment Info</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {payments.map((payment, index) => (
              <tr key={payment._id}>
                <th>{index + 1}</th>
                <td>{payment.parcelName}</td>
                <td>{payment.customerEmail}</td>
                <td>{payment.paidAt}</td>
                <td>{payment.trackingId}</td>
                <td>
                  {payment.amount} {payment.currency}
                </td>
                <td>
                  <button className="btn bg-amber-100">View</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PaymentHistory;
