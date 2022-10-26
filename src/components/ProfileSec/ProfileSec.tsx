import * as React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

interface IProfileSecProps {
}

const ProfileSec: React.FunctionComponent<IProfileSecProps> = (props) => {
  return(
    <>
      <Container className='mt-2'>
        <Row>
          <Col lg={6} md={6} s={12} className='mt-5'>
            <h1 className='service__name'>Update Profile</h1>
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
                <Form.Label>Your Phone Number</Form.Label>
                <Form.Control type="text" placeholder="Enter Your Phone Number" />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Your State Code</Form.Label>
                <Form.Control type="email" placeholder="Enter Your State Code" />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Your Call Up Number</Form.Label>
                <Form.Control type="email" placeholder="Enter Your Call Up Numbe" />
              </Form.Group>

              <Button variant="primary" type="submit">
                Update
              </Button>
            </Form>
          </Col>
          <Col lg={6} md={6} s={12} className='mt-5'>
            <h1 className='service__name'>Change Password</h1>
            <Form className='text-dark'>
              <Form.Group className="mb-3">
                <Form.Label>Your Old Password</Form.Label>
                <Form.Control type="text" placeholder="Enter Your Old Password" />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Your New Password</Form.Label>
                <Form.Control type="text" placeholder="Enter Your New Password" />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Confirm Your New Password</Form.Label>
                <Form.Control type="email" placeholder="Enter Your New Password Again" />
              </Form.Group>

              <Button variant="primary" type="submit">
                Update
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  ) ;
};

export default ProfileSec;
