import * as React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import designIcon from '../../asset/image/design.png';
import ecommIcon from '../../asset/image/ecommerce.png';
import webIcon from '../../asset/image/web.png';

interface IServicesProps {
}

const Services: React.FunctionComponent<IServicesProps> = (props) => {
  return(
    <>
      <Container>
        <Row>
          <Col lg={4} md={6} sm={12}>
            <div>
              <img className='service__img1' src={designIcon} alt="" />
            </div>
          </Col>
          <Col lg={4} md={6} sm={12}>
            <div>
              <img className='service__img1' src={ecommIcon} alt="" />
            </div>
          </Col>
          <Col lg={4} md={6} sm={12}>
            <div>
              <img className='service__img1' src={webIcon} alt="" />
            </div>
          </Col>
        </Row>
      </Container>
    </>
  ) ;
};

export default Services;
