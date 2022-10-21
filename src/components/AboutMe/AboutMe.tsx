import * as React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import aboutImg from '../../asset/image/aboutus.webp'

interface IAboutMeProps {
}

const AboutMe: React.FunctionComponent<IAboutMeProps> = (props) => {
  return (
    <>
      <Container className='text-center'>
        <h1 className='service__title'>ABOUT US</h1>
        <div className="service__titleBottom"></div>
        <Row>
          <Col lg={6} md={6} sm={12}>
            <div className='about__imageCon'>
            <img src={aboutImg} alt="" className='about__image' />
            </div>
          </Col>
          <Col lg={6} md={6} sm={12}></Col>
        </Row>
      </Container>
    </>
  );
};

export default AboutMe;
