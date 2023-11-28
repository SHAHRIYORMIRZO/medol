import React from "react";
import img1 from "../assets/1-removebg-preview.png";
import img2 from "../assets/2-removebg-preview.png";
import img3 from "../assets/3-removebg-preview.png";
import img4 from "../assets/4-removebg-preview.png";
import img5 from "../assets/5-removebg-preview.png";
import img6 from "../assets/6-removebg-preview.png";
import classes from "./Card.module.css";
import Buttons from '../Button/Button'

const Card = () => {
  return (
    <>
      <div className={classes.wrapping}>
        <div className={classes.product_grid}>
          <div className={classes.product_card}>
            <div>
              <img src={img1} alt="" />
              <p>Эндоваскулярная хирургия</p>
              <Buttons />
            </div>
          </div>
          <div className={classes.product_card}>
            <div>
              <img src={img2} alt="" />
              <p>Лабораторная диагностика</p>
              <Buttons />
            </div>
          </div>
          <div className={classes.product_card}>
            <div>
              <img src={img3} alt="" />
              <p>Кардиохирургия</p>
              <Buttons />
            </div>
          </div>
          <div className={classes.product_card}>
            <div>
              <img src={img4} alt="" />
              <p>ДИАБЕТ</p>
              <Buttons />
            </div>
          </div>
          <div className={classes.product_card}>
            <div>
              <img src={img5} alt="" />
              <p>ЭНДОУРОЛОГИЯ</p>
              <Buttons />
            </div>
          </div>
          <div className={classes.product_card}>
            <div>
              <img src={img6} alt="" />
              <p>АРИТМОЛОГИЯ</p>
              <Buttons />
            </div>
          </div>
        </div>
        <p className={classes.paragraph}>
          Перейти в каталог нашей продукции
          <i class="fa-regular fa-chevrons-right"></i>
        </p>
      </div>
    </>
  );
};

export default Card;
