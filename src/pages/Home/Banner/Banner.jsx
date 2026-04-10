import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import banner1 from "../../../assets/banner1.png";
import banner2 from "../../../assets/banner2.png";
import banner3 from "../../../assets/banner3.png";
const Banner = () => {
  return (
    <Carousel autoPlay={true} infiniteLoop={true}>
      {/* one  */}

      <div className="flex justify-between items-center p-10 ">
        <div className="flex-2">
          <p className="text-6xl font-bold max-w-168 leading-20 text-left">
            We Make Sure Your
            <span className="text-primary"> Parcel Arrives</span> On Time - No
            Fuss.
          </p>
          <p className="text-[18px] text-left text-gray-500 my-5 max-w-150">
            Enjoy fast, reliable parcel delivery with real-time tracking and
            zero hassle. From personal packages to business shipments — we
            deliver on time, every time.
          </p>
          <div className="flex gap-5 items-center ">
            <button className="btn bg-primary border-none hover:bg-secondary hover:text-white">
              Track Your Parcel
            </button>
            <button className="btn">Be A Rider</button>
          </div>
        </div>
        <div className="flex-1">
          <div>
            <img className="object-cover w-100 h-100" src={banner1} />
          </div>
        </div>
      </div>

      {/* two  */}

      <div className="flex justify-between items-center p-10 ">
        <div className="">
          <p className="text-6xl font-bold max-w-168 leading-20 text-left">
            <span className="text-primary"> Delivering</span> Convenience,{" "}
            <br />
            <span className="text-primary">One Click</span> at a Time
          </p>
          <p className="text-[18px] text-left text-gray-500 my-5 max-w-150">
            Enjoy fast, reliable parcel delivery with real-time tracking and
            zero hassle. From personal packages to business shipments — we
            deliver on time, every time.
          </p>
          <div className="flex gap-5 items-center ">
            <button className="btn bg-primary border-none hover:bg-secondary hover:text-white">
              Track Your Parcel
            </button>
            <button className="btn">Be A Rider</button>
          </div>
        </div>
        <div className="">
          <div>
            <img
              className="object-cover rounded-full w-100 h-100"
              src={banner3}
            />
          </div>
        </div>
      </div>

      {/* three  */}

      <div className="flex justify-between items-center p-10 ">
        <div className="">
          <p className="text-6xl font-bold max-w-168 leading-20 text-left">
            Fastest
            <span className="text-primary">
              <br /> Delivery{" "}
            </span>{" "}
            & Easy{" "}
            <span className="text-primary">
              <br />
              Pickup
            </span>
          </p>
          <p className="text-[18px] text-left text-gray-500 my-5 max-w-150">
            Enjoy fast, reliable parcel delivery with real-time tracking and
            zero hassle. From personal packages to business shipments — we
            deliver on time, every time.
          </p>
          <div className="flex gap-5 items-center ">
            <button className="btn bg-primary border-none hover:bg-secondary hover:text-white">
              Track Your Parcel
            </button>
            <button className="btn">Be A Rider</button>
          </div>
        </div>
        <div className="">
          <div>
            <img
              className="object-cover rounded-full w-80 h-80"
              src={banner2}
            />
          </div>
        </div>
      </div>
    </Carousel>
  );
};

export default Banner;
