import * as React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import '../../asset/css/custom.css'

interface ISliderProps {
}

const Slider: React.FunctionComponent<ISliderProps> = (props) => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100 imgWidth"
          src="https://cdn.vanguardngr.com/wp-content/uploads/2019/08/NYSC.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
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
      <Carousel.Item>
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
