import Carousel from 'react-bootstrap/Carousel';
import image1 from "../../../assets/image1.jpg";
import image2 from "../../../assets/image2.jpg";
import image3 from "../../../assets/image3.jpg";
function DarkVariantExample() {
  return (
    <Carousel data-bs-theme="dark" >
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100 h-25"
          src={image1}
          alt="First slide"
        />
        <Carousel.Caption>
          <div className='hero-main-img'>
          <h2>Welcome to Digital Library</h2>
          <p>Digital library for all of your favorite books!!</p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100 h-25"
          src={image2}
          alt="Second slide"
        />
        <Carousel.Caption >
          {/* <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100 h-25"
          src={image3}
          alt="Third slide"
        />
        <Carousel.Caption>
          {/* <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p> */}
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default DarkVariantExample;