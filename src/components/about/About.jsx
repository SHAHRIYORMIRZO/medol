import React from "react";
import img from "../assets/logong.png";
import Button from "../Button/Button";

import classes from "./About.module.css";

const About = () => {
  return (
    <>
      <div>
        <h1 className={classes.about__title}>Biz Haqimizda</h1>
        <div className={classes.about_grid}>
          <div className={classes.support_div}></div>
          <div className={classes.ellipses}>
            <div className={classes.ellipes1}>
              <div className={classes.ellipes2}>
                <div className={classes.ellipes3}>
                  <img src={img} alt="Logotip for website" />
                  <div className={classes.image__logo}></div>
                </div>
              </div>
            </div>
          </div>
          <div className={classes.content}>
            <p>
              Группа компаний MEDOL создавалась высококвалифицированными
              специалистами в сфере медицины, инженерии и экономики, за плечами
              которых значительный опыт на рынке высоких медицинских технологий,
              которая имеет свои представительства в разных уголках Земли. В
              2011 году MEDOL зарегистрировал в Узбекистане ИП ООО “Medical
              Online Services". Цель компании построить прозрачный долгосрочный
              бизнес, принести пользу обществу путем развития и внедрения
              передовых технологий в систему здравоохранения Республики
              Узбекистан.
            </p>
            <Button />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
