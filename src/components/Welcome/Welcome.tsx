import * as React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import pageone from '../../asset/image/page1.png';
import pagetwo from '../../asset/image/page2.png';
import pagethree from '../../asset/image/page3.png';
import imgone from '../../asset/image/19.png';
import imgtwo from '../../asset/image/20.png';
import imgthree from '../../asset/image/21.png';

interface IWelcomeProps {
}

const Welcome: React.FunctionComponent<IWelcomeProps> = (props) => {
  return(
    <>
      <div className="intro-area--top"> 
        <Container>
          <Row>
            <Col lg={12} md={12} sm={12}>
              <div className="section-title text-center">
                <div className="intro-area-inner">
                  <h6 className="sub-title double-line">WELCOME</h6>
                  <h2 className="maintitle">
                    We're Here<br></br>
                    To Serve You Specially
                  </h2>
                  <Container className='mt-5 text-center'>
                    <Row>
                      <Col lg={4} md={6} sm={12}>
                        <img src={pageone} alt='' />
                        <h1 className="service__name">Easy As it Gets </h1>
                        <p className="service__discription">Lorem ipsum dolor</p>
                      </Col>

                      <Col lg={4} md={6} sm={12}>
                        <img src={pagetwo} alt='' />
                        <h1 className="service__name">Teach The way you want</h1>
                        <p className="service__discription">Lorem ipsum dolor</p>
                      </Col>

                      <Col lg={4} md={6} sm={12}>
                        <img src={pagethree} alt='' />
                        <h1 className="service__name">The small matter</h1>
                        <p className="service__discription">Lorem ipsum dolor</p>
                      </Col>
                    </Row>

                    <Row className="intro-footer bg-base text-center mt-5">
                      <Col lg={4} md={6} sm={12}>
                        <Row>
                          <Col lg={6} md={6} sm={12}>
                            <img className="sideImg" src={imgone} alt='' />
                          </Col>

                          <Col lg={6} md={6} sm={12}>
                            <h5 className="homeIntro welcome__text">Development</h5>
                            <p className="service__discription welcome__text">Lorem ipsum dolor</p>
                          </Col>
                        </Row>
                      </Col>

                      <Col lg={4} md={6} sm={12}>
                        <Row>
                          <Col lg={6} md={6} sm={12}>
                            <img className="sideImg" src={imgtwo} alt='' />
                          </Col>

                          <Col lg={6} md={6} sm={12}>
                            <h5 className="homeIntro welcome__text">Web Design</h5>
                            <p className="service__discription welcome__text">Lorem ipsum dolor</p>
                          </Col>
                        </Row>
                      </Col>
                      <Col lg={4} md={6} sm={12}>
                        <Row>
                          <Col lg={6} md={6} sm={12}>
                            <img className="sideImg" src={imgthree} alt='' />
                          </Col>
                          <Col lg={6} md={6} sm={12}>
                            <h5 className="homeIntro welcome__text">Ecommerce</h5>
                            <p className="service__discription welcome__text">Lorem ipsum dolor</p>
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                  </Container>
                </div>
              </div> 
            </Col>
          </Row>
        </Container>
      </div>
    </>
  ) ;
};

export default Welcome;
