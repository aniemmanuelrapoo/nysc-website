import * as React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import StateCord from '../../asset/image/SC1-1.jpg'
import SheduleOfficer from '../../asset/image/officer.jpeg'

interface IReviewsProps {
}

const Reviews: React.FunctionComponent<IReviewsProps> = (props) => {
  return(
    <>
      <Container className='review__slide' fluid>
        <h1 className='service__title p-3'>TESTIMONIAL</h1>
        <div className="service__titleBottom review__titleBottom"></div>
        <Row className='text-center justify-content-center'>
          <Col lg={6} md={6} sm={12}>
            <img src={StateCord} alt="" className='circle__image' />
            <h2 className='service__name'>Mr. Anthony M, Nzoka</h2>
            <small>State Coordinator NYSC Taraba State</small>
              <p className='service__discription'>I love your creativity. The minimal and abstract aesthetic you used in this platform is really effective in encompassing the NYSC's motto.</p>
          </Col>
        </Row>
      </Container>
    </>
  ) ;
};

export default Reviews;
