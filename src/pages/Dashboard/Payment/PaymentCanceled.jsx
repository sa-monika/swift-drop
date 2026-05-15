import React from "react";
import { Link } from "react-router";

const PaymentCanceled = () => {
  return (
    <div>
      <h2>Payment is Canceled. Please try again</h2>
      <Link to="/dashboard/my-parcels">
        <button className="btn ">Try again</button>
      </Link>
    </div>
  );
};

export default PaymentCanceled;
