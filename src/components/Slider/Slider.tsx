import * as React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import '../../asset/css/custom.css'
import imgage from '../../asset/image/Banner2.png'

interface ISliderProps {
}

const Slider: React.FunctionComponent<ISliderProps> = (props) => {
  return (
    <Carousel className='carosel__conMain'>
      <Carousel.Item className='carosel__con'>
        <img
          className="d-block w-100 imgWidth"
          src={imgage}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='carosel__con'>
        <img
          className="d-block w-100 imgWidth"
          src="https://guardian.ng/wp-content/uploads/2021/09/NYSC.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='carosel__con'>
        <img
          className="d-block w-100 imgWidth"
          src="https://tribuneonlineng.com/wp-content/uploads/2021/08/unnamed-650x430.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Slider;
