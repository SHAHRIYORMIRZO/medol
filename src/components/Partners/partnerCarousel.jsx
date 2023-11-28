import Carousel from "react-bootstrap/Carousel";
import Partners from "./Partners";
import { CarouselItem } from "react-bootstrap";

function partnerCarousel() {
  return (
    <>
      <Carousel>
        <CarouselItem interval={1000}>
          <Partners />
        </CarouselItem>
      </Carousel>
    </>
  );
}

export default partnerCarousel;
