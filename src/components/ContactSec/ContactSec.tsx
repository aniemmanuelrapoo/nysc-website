import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { FooterData } from '../../RestApi/AppUrl';
import axios from 'axios';

interface IContactSecProps {
}

interface IPost {
  id: number
  address: string
  email: string
  phone: string
}

const defaultPosts:IPost[] = [];

const ContactSec: React.FunctionComponent<IContactSecProps> = (props) => {
  const [posts, setPosts]: [IPost[], (posts: IPost[]) => void] = React.useState(defaultPosts);
  const [loading, setLoading]: [boolean, (loading: boolean) => void] = React.useState<boolean>(true);
  const [error, setError]: [string, (error: string) => void] = React.useState("");

  React.useEffect(() => {
      axios
      .get<IPost[]>(`${FooterData}`, {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          timeout : 60000
        })
      .then(response => {
        setPosts(response.data);
        setLoading(false);
      })
      .catch(ex => {
        const err =
        ex.code === "ECONNABORTED"
          ? "A timeout has occurred"
          : ex.response.status === 404
            ? "Resource not found"
            : '';
        setError(err);
        setLoading(false);
      });
  }, []);
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
            {loading ? 'loading' : error ? error : posts[0]['address']} <br></br>
              <FontAwesomeIcon icon={faEnvelope}  /> Email : {loading ? 'loading' : error ? error : posts[0]['email']}<br></br>
              <FontAwesomeIcon icon={faPhone}  /> Phone : {loading ? 'loading' : error ? error : posts[0]['phone']}<br></br>
          </p>
          </Col>
        </Row>
      </Container>
    </>
  ) ;
};

export default ContactSec;
