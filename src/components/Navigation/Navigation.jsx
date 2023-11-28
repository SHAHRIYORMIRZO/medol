import React from "react";
import classes from "./Navigation.module.css";
import img from "../assets/logong.png";
const Navigation = () => {
  return (
    <React.Fragment>
      <div className={classes.container}>
        <div className={classes.navigation}>
          <ul>
            <i class="fa-sharp fa-solid fa-location-dot"></i>
            <li className={classes.navigation_item}>Fergana, Rishtan</li>
            <i class="fa-solid fa-phone-volume"></i>
            <li className={classes.navigation_item}>+ 99897 272 77 80</li>
            <img className={classes.imagesss} src={img} alt="Logo image" />
            <i class="fa-solid fa-magnifying-glass"></i>
            <li className={classes.navigation_item}>Search</li>
            <i class="fa-brands fa-facebook-f"></i>
            <li className={classes.navigation_item}>Facebook</li>
          </ul>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Navigation;
