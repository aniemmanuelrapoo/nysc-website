import * as React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import designIcon from '../../asset/image/design.png';
import ecommIcon from '../../asset/image/ecommerce.png';
import webIcon from '../../asset/image/web.png';
import '../../asset/css/custom.css'
import '../../asset/css/bootstrap.min.css'

interface IServicesProps {
}

const Services: React.FunctionComponent<IServicesProps> = (props) => {
  return(
    <>
      <Container>
        <Row>
          <Col lg={4} md={6} sm={12}>
            <div className='service__card'>
              <img className='service__img1' src={designIcon} alt="" />
              <h2 className='service__name'>Recent Update</h2>
              <p className='service__discription'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem</p>
            </div>
          </Col>
          <Col lg={4} md={6} sm={12}>
            <div className='service__card'>
              <img className='service__img1' src={ecommIcon} alt="" />
              <h2 className='service__name'>All Camp Activites</h2>
              <p className='service__discription'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem</p>
            </div>
          </Col>
          <Col lg={4} md={6} sm={12}>
            <div className='service__card'>
              <img className='service__img1' src={webIcon} alt="" />
              <h2 className='service__name'>Upcoming Events</h2>
              <p className='service__discription'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem</p>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  ) ;
};

export default Services;
