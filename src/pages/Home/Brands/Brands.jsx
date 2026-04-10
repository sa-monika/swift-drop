import React from "react";
import "swiper/css";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
// import amazon from "../../../assets/brands/amazon.png";
import amazon2 from "../../../assets/brands/amazon_vector.png";
import casio from "../../../assets/brands/amazon.png";
import moonstar from "../../../assets/brands/moonstar.png";
import randstad from "../../../assets/brands/randstad.png";
import star from "../../../assets/brands/star.png";
import startPeople from "../../../assets/brands/start_people.png";
import tracking from "../../../assets/tracking.png";
import safe from "../../../assets/safe.png";
import call from "../../../assets/call.png";
const Brands = () => {
  const serves = [
    {
      image: tracking,
      name: "Live Parcel Tracking",
      des: "Stay updated in real-time with our live parcel tracking feature. From pick-up to delivery, monitor your shipment's journey and get instant status updates for complete peace of mind.",
    },
    {
      image: safe,
      name: "100% Safe Delivery",
      des: "We ensure your parcels are handled with the utmost care and delivered securely to their destination. Our reliable process guarantees safe and damage-free delivery every time.",
    },
    {
      image: call,
      name: "24/7 Call Center Support",
      des: "Our dedicated support team is available around the clock to assist you with any questions, updates, or delivery concerns—anytime you need us.",
    },
  ];

  const brands = [casio, moonstar, randstad, amazon2, star, startPeople];

  return (
    <div className="max-w-11/12 mx-auto mb-20 ">
      <h1 className="text-secondary text-center text-4xl font-bold ">
        We've helped thousands of sales teams
      </h1>
      <Swiper
        slidesPerView={4}
        centeredSlides={true}
        spaceBetween={30}
        grabCursor={true}
        pagination={{
          clickable: true,
        }}
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper my-20"
      >
        {brands.map((b) => (
          <SwiperSlide>
            <img src={b} alt="" />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="flex-col flex gap-5 p-12">
        {serves.map((s) => (
          <div className="p-8  shadow-xl rounded-lg bg-gray-100 flex items-center">
            <div>
              <img src={s.image} className="w-20 h-20 object-cover" />
            </div>
            <div className="border border-secondary border-dashed ml-10 h-20"></div>
            <div className="p-10">
              <h1 className="font-bold my-2 text-[18px] text-secondary">
                {s.name}
              </h1>
              <p className="text-sm text-gray-500 ">{s.des}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Brands;
