import React from "react";
import Banner from "../Banner/Banner";
import Works from "../Works/Works";
import Services from "../Services/Services";
import Brands from "../Brands/Brands";
import Merchant from "../Merchant/Merchant";
import Reviews from "../Reviews/Reviews";
import Faq from "../Faq/Faq";

const reviewsPromise = fetch("/reviews.json").then((res) => res.json());
const Home = () => {
  return (
    <div className="w-11/12 mx-auto">
      <Banner></Banner>
      <Works></Works>
      <Services></Services>
      <Brands></Brands>
      <Merchant></Merchant>
      <Reviews reviewsPromise={reviewsPromise}></Reviews>
      <Faq></Faq>
    </div>
  );
};

export default Home;
