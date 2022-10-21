import * as React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import aboutImg from '../../asset/image/aboutus.webp'
import Typewriter from 'typewriter-effect';

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
          <Col lg={6} md={6} sm={12}>
            <div className='about__body'>
              <h2 className='about__details'>Hi There, We're</h2>
              <h2 className='about__title'>DoDeel CDS Group</h2>
              <h3 className='about__details'>We Work With <span className='about__span'>
              <Typewriter
                options={{
                  strings: ['SERVICOM', 'NYSC'],
                  autoStart: true,
                  loop: true,
                }}
              /></span></h3>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default AboutMe;
