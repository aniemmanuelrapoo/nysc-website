import * as React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

interface ISummaryProps {
}

const Summary: React.FunctionComponent<ISummaryProps> = (props) => {
  return(
    <>
      <Container className='top__fixedBanner1 p-0' fluid>
      <div className="top__bannerOverlay2">
        <Container className='text-center'>
          <Row >
            <Col lg={8} md={6} sm={12}>
              <Row className='count__section'>
                <Col>
                  <h1 className='count__number'>35000+</h1>
                  <h4 className='count__title'>Corpers Worldwide</h4>
                  <hr className='count__line' />
                </Col>
                <Col>
                  <h1 className='count__number'>40</h1>
                  <h4 className='count__title'>CDS Groups</h4>
                  <hr className='count__line' />
                </Col>
                <Col>
                  <h1 className='count__number'>500+</h1>
                  <h4 className='count__title'>Programs | Awards</h4>
                  <hr className='count__line' />
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
