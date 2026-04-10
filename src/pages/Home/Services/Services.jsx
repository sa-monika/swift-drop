import React from "react";
import { MdOutlineMiscellaneousServices } from "react-icons/md";

const Services = () => {
  const items = [
    {
      icon: <MdOutlineMiscellaneousServices size={40} color="orange" />,
      iName: "Express  & Standard Delivery",
      iPara:
        "We deliver parcels within 24-72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka within 4-6 hours from pick-up to drop-off.",
    },
    {
      icon: <MdOutlineMiscellaneousServices size={40} color="orange" />,
      iName: "Nationwide Delivery",
      iPara:
        "We deliver parcels nationwide with home delivery in every district, ensuring your products reach customers within 48-72 hours.",
    },
    {
      icon: <MdOutlineMiscellaneousServices size={40} color="orange" />,
      iName: "Fulfillment Solution",
      iPara:
        "We also offer customized service with inventory management support, online order processing, packaging, and after sales support.",
    },
    {
      icon: <MdOutlineMiscellaneousServices size={40} color="orange" />,
      iName: "Cash on Home Delivery",
      iPara:
        "100% cash on delivery anywhere in Bangladesh with guaranteed safety of your product.",
    },
    {
      icon: <MdOutlineMiscellaneousServices size={40} color="orange" />,
      iName: "Corporate Service / Contract In Logistics",
      iPara:
        "Customized corporate services which includes warehouse and inventory management support.",
    },
    {
      icon: <MdOutlineMiscellaneousServices size={40} color="orange" />,
      iName: "Parcel Return",
      iPara:
        "Through our reverse logistics facility we allow end customers to return or exchange their products with online business merchants.",
    },
  ];

  return (
    <div className="w-11/12 mx-auto bg-secondary p-6 rounded-xl text-white mb-20">
      <div className="my-3">
        <h1 className=" text-5xl font-bold text-center">Our Services</h1>
        <p className=" text-center mt-4">
          Enjoy fast, reliable parcel delivery with real-time tracking and zero
          hassle. From personal packages to <br /> business shipments — we
          deliver on time, every time.
        </p>
      </div>
      <div className="p-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
        {items.map((item) => (
          <div className="rounded-lg shadow-md bg-gray-100 p-5 hover:bg-primary">
            <div className="flex justify-center ">{item.icon}</div>
            <h2 className="font-bold my-2 text-[18px] text-secondary text-center hover:text-white">
              {item.iName}
            </h2>
            <p className="text-sm text-gray-500 hover:text-white">
              {item.iPara}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
