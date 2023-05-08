import Carousel from "react-bootstrap/Carousel";
import silde1 from "../image/黑米.jpg";
import silde2 from "../image/黑米果五行堅果橫.jpg";

const MyCarousel = () => {
  return (
    <div className="container mb-3">
    <Carousel>
      <Carousel.Item interval={5000}>
        <img
          className="d-flex container w-100"
          src={silde1}
          alt="First slide"

        />
      </Carousel.Item>
      <Carousel.Item interval={5000}>
        <img
          className="d-flex container w-100"
          src={silde2}
          alt="Second slide"

        />
      </Carousel.Item>
    </Carousel>
    </div>
  );
}

export default MyCarousel