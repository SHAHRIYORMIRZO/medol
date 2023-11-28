import React from "react";
import img3 from "../assets/111.jpg";
import img2 from "../assets/222.jpg";
import img1 from "../assets/333.jpg";

import classes from "./Services.module.css";

const Services = () => {
  return (
    <>
      <h1 className={classes.title}>Services</h1>
      <div className={classes.services}>
        <div className={classes.grid__services}>
          <div className={classes.services__card}>
            <div>
              <div>
                <img src={img1} alt="" />
                <h1 className={classes.card_title}>СЕРВИС ОБОРУДОВАНИЯ</h1>
                <p>
                  Компания предоставляет сервисное обслуживание по всем
                  предоставляемым продуктам. У наших инженеров имеется опыт и
                  сертификаты фирм производителей......
                </p>
                <button>Submit</button>
              </div>
            </div>
          </div>
          <div className={classes.services__card}>
            <div>
              <div>
                <img src={img2} alt="" />
                <h1 className={classes.card_title}>РЕГИСТРАЦИИ</h1>
                <p>
                  Обеспечение получения разрешительных документов,
                  регистрационного удостоверения на изделия медицинского
                  назначения Подготовка объектов к проведению ....
                </p>
                <button>Submit</button>
              </div>
            </div>
          </div>
          <div className={classes.services__card}>
            <div>
              <div>
                <img src={img3} alt="" />
                <h1 className={classes.card_title}>УСЛУГИ ЛОГИСТИКИ</h1>
                <p>
                  Компания предоставляет сервисное обслуживание по всем
                  предоставляемым продуктам. У наших инженеров имеется опыт и
                  сертификаты фирм производителей.....
                </p>
                <button className={classes.button__submit}>Submit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
