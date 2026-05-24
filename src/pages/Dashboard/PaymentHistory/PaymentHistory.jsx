import React from "react";

const PaymentHistory = () => {
  return (
    <div className=" m-4 p-3 bg-white rounded-xl">
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
              <th>Tracking Number</th>
              <th>Payment Info</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <th>1</th>
              <td>{}</td>
              <td>{}</td>
              <td>{}</td>
              <td>{}</td>
              <td>
                <button className="btn bg-amber-100">View</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PaymentHistory;
