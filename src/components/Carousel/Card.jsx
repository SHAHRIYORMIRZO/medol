import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import img1 from "../assets/111.jpg";
import Buttons from "../Button/Button";

import classes from "./Carousel.module.css";

function BasicExample() {
  return (
    <>
      <div className={classes.container}>
        <Card className={classes.card}>
          <div className={classes.grid}>
            <div className={classes.grid_item}>
              <Card.Img variant="top" src={img1} />
              <Card.Body>
                <Card.Title>
                  <a href="#">
                    Mастер-класс в исполнении Галлямова Эдуарда Абдулхаевича
                    <br />
                    <br /> 26.07.2021
                  </a>
                </Card.Title>
                <Card.Text>
                  С 19 по 21 апреля в АО «РСНПМЦУ» (Республиканский
                  Специализированный Научно-Практический Медицинский Центр
                  Урологии) при поддержке компаний Ethicon Endo Surgery
                  (Johnson&Johnson) и ИП ООО «Medical Online Services» был
                  проведен мастер-класс в исполнении...
                </Card.Text>
                <Buttons />
              </Card.Body>
            </div>
            <div className={classes.grid_item}>
              <Card.Img variant="top" src={img1} />
              <Card.Body>
                <Card.Title>
                  {" "}
                  <a href="#">
                    Mастер-класс в исполнении Галлямова Эдуарда Абдулхаевича
                    <br />
                    <br />
                    26.07.2021
                  </a>
                </Card.Title>
                <Card.Text>
                  С 19 по 21 апреля в АО «РСНПМЦУ» (Республиканский
                  Специализированный Научно-Практический Медицинский Центр
                  Урологии) при поддержке компаний Ethicon Endo Surgery
                  (Johnson&Johnson) и ИП ООО «Medical Online Services» был
                  проведен мастер-класс в исполнении...
                </Card.Text>
                <Buttons />
              </Card.Body>
            </div>
            <div className={classes.grid_item}>
              <Card.Img variant="top" src={img1} />
              <Card.Body>
                <Card.Title>
                  {" "}
                  <a href="#">
                    Mастер-класс в исполнении Галлямова Эдуарда Абдулхаевича
                    <br />
                    <br />
                    26.07.2021
                  </a>
                </Card.Title>
                <Card.Text>
                  С 19 по 21 апреля в АО «РСНПМЦУ» (Республиканский
                  Специализированный Научно-Практический Медицинский Центр
                  Урологии) при поддержке компаний Ethicon Endo Surgery
                  (Johnson&Johnson) и ИП ООО «Medical Online Services» был
                  проведен мастер-класс в исполнении...
                </Card.Text>
                <Buttons />
              </Card.Body>
            </div>
          </div>
        </Card>
      </div>
    </>
  );
}

export default BasicExample;
