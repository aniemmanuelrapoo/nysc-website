import * as React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import {faFacebook} from '@fortawesome/free-brands-svg-icons'
import {faYoutube} from '@fortawesome/free-brands-svg-icons'
import {faWhatsapp} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

interface IFooterProps {
}

const Footer: React.FunctionComponent<IFooterProps> = (props) => {
  return (
    <>
      <Container fluid className='footer__section'>
        <Row>
          <Col lg={3} md={6} sm={12}>
            <h2 className='footer__name'>Follow Us</h2>
            <a href="https://web.facebook.com/officialnysc" rel='noreferrer noopener'>
            <FontAwesomeIcon icon={faFacebook} size="2x" />  
            </a>
            <a href="https://www.youtube.com/channel/UCkcNL0AbD0RbPjuwofbIMNQ" rel='noreferrer noopener'>
            <FontAwesomeIcon icon={faYoutube} size="2x" />  
            </a>
            <a href="https://wa.me/+2348036636819" rel='noreferrer noopener'>
            <FontAwesomeIcon icon={faWhatsapp} size="2x" />  
            </a> 
          </Col>
          <Col lg={3} md={6} sm={12}><h2 className='footer__name'>Address</h2></Col>
          <Col lg={3} md={6} sm={12}><h2 className='footer__name'>Information</h2></Col>
          <Col lg={3} md={6} sm={12}><h2 className='footer__name'>Policy</h2></Col>
        </Row>
      </Container>
    </>
  );
};

export default Footer;
