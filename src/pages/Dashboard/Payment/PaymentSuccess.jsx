import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const PaymentSuccess = () => {
  const [searchParams] = useSearchParams();
  const [paymentInfo, setPaymentInfo] = useState({});
  const sessionId = searchParams.get("session_id");
  console.log(sessionId);
  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    if (sessionId) {
      axiosSecure
        .patch(`/payment-success?session_id=${sessionId}`)
        .then((res) => {
          console.log(res.data);
          setPaymentInfo({
            transactionId: res.data.transactionId,
            trackingId: res.data.trackingId,
          });
        });
    }
  }, [sessionId, axiosSecure]);
  return (
    <div className="text-black card ">
      <div className="text-center p-5 space-y-2">
        <h2 className="text-4xl text-center font-bold">Payment Successful</h2>
        <p>Transaction id: {paymentInfo.transactionId}</p>
        <p>Tracking id: {paymentInfo.trackingId}</p>
      </div>
    </div>
  );
};

export default PaymentSuccess;
