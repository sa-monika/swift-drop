import React from "react";
import { FaQuoteLeft } from "react-icons/fa";

const ReviewCard = ({ review }) => {
  return (
    <div className="card bg-base-200 shadow-xl rounded-2xl p-6 max-w-md">
      {/* Quote Icon */}
      <FaQuoteLeft className="text-4xl text-primary mb-4" />

      {/* Text */}
      <p className="text-gray-500 text-sm  mb-6">{review.review}</p>

      {/* Divider */}
      <div className="border-t border-dashed border-gray-400 mb-4"></div>

      {/* Profile */}
      <div className="flex items-center gap-4">
        <div className="">
          <img
            className="w-12 h-12 rounded-full "
            src={review.user_photoURL}
            alt=""
          />
        </div>
        <div>
          <h3 className="font-bold text-secondary">{review.userName}</h3>
          <p className="text-sm text-gray-500">Senior Product Designer</p>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
