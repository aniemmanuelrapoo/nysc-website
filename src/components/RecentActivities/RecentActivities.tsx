import * as React from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';

interface IRecentActivitiesProps {
}

const RecentActivities: React.FunctionComponent<IRecentActivitiesProps> = (props) => {
  return(
    <>
      <Container className='text-center'>
        <h1 className='service__title'>RECENT ACTIVITIES</h1>
        <div className="service__titleBottom"></div>
        <Row className='text-dark'>
          <Col lg={4} md={6} sm={12}>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="https://img.freepik.com/free-photo/book-with-green-board-background_1150-3837.jpg?w=740&t=st=1666230708~exp=1666231308~hmac=23ff5dc5321b7ab8c9e7582d900b657c7a7bd8a4a9b7a3e10bde584ee3f0ee21" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={4} md={6} sm={12}>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="https://img.freepik.com/premium-photo/beautiful-young-african-woman-reading-book-library_219728-4340.jpg?w=740" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={4} md={6} sm={12}>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="https://img.freepik.com/free-photo/positive-college-student-has-dark-skin-carries-folders-book-points-with-cheerful-expression-aside-has-toothy-smile_273609-23704.jpg?w=740&t=st=1666230929~exp=1666231529~hmac=a117985d6e3473d1cdd532b2b58a705eb27a1a4cf56f172eccb9e1f5b62165f5" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  ) ;
};

export default RecentActivities;
