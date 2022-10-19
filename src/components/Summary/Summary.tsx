import * as React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';

interface ISummaryProps {
}

const Summary: React.FunctionComponent<ISummaryProps> = (props) => {
  return(
    <>
      <Container className='top__fixedBanner1 p-0' fluid>
      <div className="top__bannerOverlay2">
        <Container>
          <Row>
            <Col lg={8} md={6} sm={12}>
              <Row>
                <Col>
                  <h1>One</h1>
                </Col>
                <Col>
                  <h1>Two</h1>
                </Col>
                <Col>
                  <h1>Three</h1>
                </Col>
              </Row>
            </Col>
            <Col lg={4} md={6} sm={12}>
              <h1>Four</h1>
            </Col>
          </Row>
        </Container>
      </div>
    </Container>
    </>
  ) ;
};

export default Summary;
