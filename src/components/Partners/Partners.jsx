import React from "react";
import img1 from "../assets/partner2.jpg";
import img2 from "../assets/partner1.jpg";
import img3 from "../assets/partner3.jpg";
import img4 from "../assets/partner4.jpg";
import img5 from "../assets/partner5.jpg";
import img6 from "../assets/partner6.jpg";
import img7 from "../assets/partner7.jpg";
import img8 from "../assets/partner8.jpg";

import classes from "./Partners.module.css";

const Partners = () => {
  return (
    <div className={classes.partners__section}>
      <div className={classes.partners__grid}>
        <div>
          <img src={img1} text="nima gap" />
        </div>
        <div>
          <img src={img2} alt="" />
        </div>
        <div>
          <img src={img3} alt="" />
        </div>
        <div>
          <img src={img4} alt="" />
        </div>
        <div>
          <img src={img5} alt="" />
        </div>
        <div>
          <img src={img6} alt="" />
        </div>
        <div>
          <img src={img7} alt="" />
        </div>
        <div>
          <img src={img8} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Partners;
