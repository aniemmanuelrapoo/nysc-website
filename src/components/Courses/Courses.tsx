import * as React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

interface ICoursesProps {
}

const Courses: React.FunctionComponent<ICoursesProps> = (props) => {
  return(
    <>
      <Container className='text-center'>
        <h1 className='service__title'>OUR LECTURES</h1>
        <div className="service__titleBottom"></div>
        <Row>
          <Col lg={6} md={12} sm={12}>
            <Row>
              <Col lg={6} md={6} sm={12}></Col>
              <Col lg={6} md={6} sm={12}></Col>
            </Row>
          </Col>
          <Col lg={6} md={12} sm={12}>
            <Row>
              <Col lg={6} md={6} sm={12}></Col>
              <Col lg={6} md={6} sm={12}></Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  ) ;
};

export default Courses;
