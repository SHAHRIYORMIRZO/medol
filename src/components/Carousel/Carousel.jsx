import Carousel from "react-bootstrap/Carousel";
import Card from "./Card";
import img1 from "../assets/111.jpg";
import classes from "./Carousel.module.css";

function CarouselImages() {
  const text1 = "lorem";

  return (
    <Carousel>
      <Carousel.Item interval={1000}>
        <Card className={classes.carousel__card} />
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <Card className={classes.carousel__card} />
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselImages;
