import React from "react";
import Navigation from "../Navigation/Navigation";
import Navbar from "../Navigation/Navbar";
import Products from "../Products/Products";
import Services from "../services/Services";
import About from "../about/About";
import Footer from "../footer/Footer";
import CarouselImages from "../Carousel/Carousel";
import Partners from "../Partners/Partners";

import classes from "./Banner.module.css";

const Banner = () => {
  return (
    <div className={classes.banner}>
      <Navigation />
      <Navbar />
      <Products />
      <Services />
      <About />
      <CarouselImages />
      <Partners />
      <Footer />
    </div>
  );
};

export default Banner;
