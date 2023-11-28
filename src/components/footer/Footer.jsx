import React from "react";
import classes from "./Footer.module.css";
import Buttons from "../Button/Button";
import img1 from "../assets/logong.png";

const Footer = () => {
  return (
    <>
      <div className={classes.container}>
        <footer className={classes.footer}>
          <div className={classes.navigation}>
            <ul className={classes.footer_nav}>
              <li className={classes.footer_nav__item}>
                <img src={img1} alt="" />
                <br />
                <br />
                <li className={classes.footer__title}>Contact</li>
              </li>
              <li className={classes.footer_nav__item}>
                Fergana Rishtan
                <li>sakbaraliyev8@gmail.com</li>
              </li>
              <li className={classes.footer_nav__item}>
                +998 97 272 77 80
                <br />
                <br />
                <li>
                  <Buttons />
                </li>
              </li>
              <li className={classes.footer_nav__item}>
                About us
                <br />
                <li>History</li>
                <li>Partners</li>
                <li>Vacancy</li>
              </li>
              <li className={classes.footer_nav__item}>
                Products
                <li></li>
                <li>Эндоваскулярная</li>
                <li>хирургия</li>
                <li>Аритмология</li>
                <li>Кардиохирургия</li>
              </li>
              <li className={classes.footer_nav__item}>
                Services
                <li>Service</li>
                <li>Registration</li>
                <li>Logistic service</li>
              </li>
            </ul>
          </div>
          <p className={classes.footer_text}>
            Created by <a href="https://t.me/mirzodev">Shohriyormirzo</a>
          </p>
        </footer>
      </div>
    </>
  );
};

export default Footer;
