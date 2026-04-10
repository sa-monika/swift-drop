import React from "react";
import frame from "../../../assets/frame.png";
const Merchant = () => {
  return (
    <div className="mb-20 w-11/12 mx-auto relative rounded-xl">
      <div>
        <img className="w-full rounded-xl mx-auto h-auto" src={frame} alt="" />
      </div>
      <div className="absolute z-10 left-2/5 top-1/2 flex gap-5 flex-col transform -translate-x-1/2 -translate-y-1/2 px-4 sm:px-6 md:px-0">
        <h2 className="font-bold my-2 text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white">
          Merchant and Customer Satisfaction is Our First Priority
        </h2>
        <p className=" max-w-md text-gray-300  text-xs sm:text-sm md:text-base">
          We offer the lowest delivery charge with the highest value along with
          100% safety of your product. Pathao courier delivers your parcels in
          every corner of Bangladesh right on time.
        </p>

        <div className="flex flex-col sm:flex-row  items-center gap-2 mt-2">
          <button className="btn bg-primary hover:bg-secondary hover:text-white border-none">
            Become a Merchant
          </button>
          <button className="btn sm:w-auto">Earn with SwiftDrop Courier</button>
        </div>
      </div>
    </div>
  );
};

export default Merchant;
