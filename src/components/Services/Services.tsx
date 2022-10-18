import * as React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import updateIcon from '../../asset/image/updated.png';
import activitesIcon from '../../asset/image/mental-health.png';
import eventIcon from '../../asset/image/event.png';
import '../../asset/css/custom.css'
import '../../asset/css/bootstrap.min.css'

interface IServicesProps {
}

const Services: React.FunctionComponent<IServicesProps> = (props) => {
  return(
    <>
      <Container className='text-center'>
        <h1 className='service__title'>OUR SERVICES</h1>
        <div className="service__titleBottom"></div>
        <Row>
          <Col lg={4} md={6} sm={12}>
            <div className='service__card'>
              <img className='service__img1' src={updateIcon} alt="" />
              <h2 className='service__name'>Recent Update</h2>
              <p className='service__discription'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem</p>
            </div>
          </Col>
          <Col lg={4} md={6} sm={12}>
            <div className='service__card'>
              <img className='service__img1' src={activitesIcon} alt="" />
              <h2 className='service__name'>All Camp Activites</h2>
              <p className='service__discription'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem</p>
            </div>
          </Col>
          <Col lg={4} md={6} sm={12}>
            <div className='service__card'>
              <img className='service__img1' src={eventIcon} alt="" />
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
