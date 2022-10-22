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
                    An exemplary<br></br>
                    learning community 
                  </h2>
                  <Container>
                    <Row>
                      <Col lg={4} md={6} sm={12}>
                        <h1>test one </h1>
                      </Col>

                      <Col lg={4} md={6} sm={12}>
                        <h1>test one </h1>
                      </Col>

                      <Col lg={4} md={6} sm={12}>
                        <h1>test one </h1>
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
