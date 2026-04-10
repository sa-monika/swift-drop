import React from "react";
import { FaTruckPickup } from "react-icons/fa";
import { FaHandHoldingDollar } from "react-icons/fa6";
import { MdOutlineCorporateFare } from "react-icons/md";
import { TbTruckDelivery } from "react-icons/tb";

const Works = () => {
  const item = [
    {
      icon: <FaTruckPickup size={40} color="orange" />,
      name: "Booking Pick & Drop",
      para: "Easily schedule your pickup and drop-off by entering the required details. Our system ensures a smooth and quick booking process for your deliveries.",
    },
    {
      icon: <FaHandHoldingDollar size={40} color="orange" />,
      name: "Cash On Delivery",
      para: "Enjoy flexible payment with our cash on delivery option. Pay securely when your package reaches its destination.",
    },
    {
      icon: <TbTruckDelivery size={40} color="orange" />,
      name: "Delivery Hub",
      para: "Our delivery hubs efficiently manage and route your packages, ensuring faster processing and timely delivery.",
    },
    {
      icon: <MdOutlineCorporateFare size={40} color="orange" />,
      name: "Booking SME & Corporate",
      para: "We offer tailored delivery solutions for small businesses and corporate clients, making bulk and regular deliveries simple and reliable.",
    },
  ];

  return (
    <div className="my-20 w-11/12 mx-auto">
      <h1 className="text-5xl font-bold text-secondary">How It Works</h1>
      <div className=" p-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {item.map((i) => (
          <div className="rounded-lg shadow-md bg-gray-100 p-5 hover:bg-white">
            <div>{i.icon}</div>
            <h2 className="font-bold my-2 text-[18px] text-secondary">
              {i.name}
            </h2>
            <p className="text-sm text-gray-500">{i.para}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Works;
