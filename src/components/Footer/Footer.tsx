import * as React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import {faFacebook} from '@fortawesome/free-brands-svg-icons'
import {faYoutube} from '@fortawesome/free-brands-svg-icons'
import {faWhatsapp} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

interface IFooterProps {
}

const Footer: React.FunctionComponent<IFooterProps> = (props) => {
  return (
    <>
      <Container fluid className='footer__section'>
        <Row>
          <Col lg={3} md={6} sm={12} className='p-5 text-center'>
            <h2 className='footer__name'>Follow Us</h2>
            <div className='footer__socialContainer'>
              <a href="https://web.facebook.com/officialnysc" rel='noreferrer noopener'>
              <FontAwesomeIcon icon={faFacebook} size="2x" className='footer__social facebook' />  
              </a>
              <a href="https://www.youtube.com/channel/UCkcNL0AbD0RbPjuwofbIMNQ" rel='noreferrer noopener'>
              <FontAwesomeIcon icon={faYoutube} size="2x" className='footer__social youtube' />  
              </a>
              <a href="https://wa.me/+2348036636819" rel='noreferrer noopener'>
              <FontAwesomeIcon icon={faWhatsapp} size="2x" className='footer__social whatsapp' />  
              </a>
            </div>
          </Col>
          <Col lg={3} md={6} sm={12} className='p-5 text-start'>
            <h2 className='footer__name'>Address</h2>
            <p className="footer__AddressDes">
              NYSC Orentation Camp Sibry Taraba State <br></br>
              <FontAwesomeIcon icon={faEnvelope}  /> Email : Support@gmail.com<br></br>
              <FontAwesomeIcon icon={faPhone}  /> Phone : +2348036636819<br></br>
          </p>
          </Col>
          <Col lg={3} md={6} sm={12} className='p-5 text-start'>
            <h2 className='footer__name'>Information</h2>
          </Col>
          <Col lg={3} md={6} sm={12} className='p-5 text-start'>
            <h2 className='footer__name'>Policy</h2>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Footer;
