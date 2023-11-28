import React from "react";
import classes from "./Navbar.module.css";
import img from "../assets/remove.png";
const Navbar = () => {
  return (
    <>
      <div className={classes.container}>
        <div className={classes.navbar}>
          <ul className={classes.navbar_items}>
            <li className={classes.navbar__item}>
              <span></span>Do'kon
            </li>
            <li className={classes.navbar__item}>
              <span></span>Biz haqimizda
            </li>
            <li className={classes.navbar__item}>
              <span></span>Mahsulotlar
            </li>
            <li className={classes.navbar__item}>
              <span></span>Xizmatlar
            </li>
            <li className={classes.navbar__item}>
              <span></span>yangiliklar
            </li>
            <li className={classes.navbar__item}>
              <span></span>Contact
            </li>
          </ul>
        </div>
        <div>
          <div className={classes.flex}>
            <div className={classes.text}>
              <h1>Анализатор ABL800 FLEX</h1>
              <p>
                Ориентированный на среднюю или высокую производительность
                тестов, анализатор ABL800 FLEX измеряет полный набор параметров,
                включая pH, газы крови, электролиты, метаболиты и показатели
                оксиметрии
              </p>
              <button className={classes.submit}>Submit</button>
            </div>
            <div className={classes.image}>
              <img src={img} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
