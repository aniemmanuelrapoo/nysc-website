import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

interface IContactSecProps {
}

const ContactSec: React.FunctionComponent<IContactSecProps> = (props) => {
  return(
    <>
      <Container className='mt-5'>
        <Row>
          <Col lg={6} md={6} s={12}>
            <h1 className='service__name'>Quick Connect</h1>
            <Form className='text-dark'>
              <Form.Group className="mb-3">
                <Form.Label>Your Name</Form.Label>
                <Form.Control type="text" placeholder="Enter Your Name" />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Your Email</Form.Label>
                <Form.Control type="email" placeholder="Enter Your Email" />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" rows={3} />
              </Form.Group>

              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
          <Col lg={6} md={6} s={12}>
            <h1 className='service__name'>Discuss Now</h1>
            <p className="service__discription">
              NYSC Orentation Camp Sibry Taraba State <br></br>
              <FontAwesomeIcon icon={faEnvelope}  /> Email : Support@gmail.com<br></br>
              <FontAwesomeIcon icon={faPhone}  /> Phone : +2348036636819<br></br>
          </p>
          </Col>
        </Row>
      </Container>
    </>
  ) ;
};

export default ContactSec;
