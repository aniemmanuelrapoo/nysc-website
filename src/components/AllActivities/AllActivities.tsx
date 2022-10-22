import * as React from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

interface IAllActivitiesProps {
}

const AllActivities: React.FunctionComponent<IAllActivitiesProps> = (props) => {
  return(
    <>
      <Container className='text-center'>
        <h1 className='service__title'>RECENT ACTIVITIES</h1>
        <div className="service__titleBottom"></div>
        <Row className='text-dark'>
          <Col lg={4} md={6} sm={12}>
            <Card className='activity__card'>
              <Card.Img variant="top" src="https://img.freepik.com/free-photo/book-with-green-board-background_1150-3837.jpg?w=740&t=st=1666230708~exp=1666231308~hmac=23ff5dc5321b7ab8c9e7582d900b657c7a7bd8a4a9b7a3e10bde584ee3f0ee21" />
              <Card.Body>
                <Card.Title className='service__name'>Activity One</Card.Title>
                <Card.Text className='service__discription'>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <Button variant="primary"><Link to='/activitiesdetails' className="activities__link">View Activity</Link></Button>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={4} md={6} sm={12}>
            <Card className='activity__card'>
              <Card.Img variant="top" src="https://img.freepik.com/premium-photo/beautiful-young-african-woman-reading-book-library_219728-4340.jpg?w=740" />
              <Card.Body>
                <Card.Title className='service__name'>Activity Two</Card.Title>
                <Card.Text className='service__discription'>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <Button variant="primary"><Link to='/activitiesdetails' className="activities__link">View Activity</Link></Button>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={4} md={6} sm={12}>
            <Card className='activity__card'>
              <Card.Img variant="top" src="https://img.freepik.com/free-photo/positive-college-student-has-dark-skin-carries-folders-book-points-with-cheerful-expression-aside-has-toothy-smile_273609-23704.jpg?w=740&t=st=1666230929~exp=1666231529~hmac=a117985d6e3473d1cdd532b2b58a705eb27a1a4cf56f172eccb9e1f5b62165f5" />
              <Card.Body>
                <Card.Title className='service__name'>Activity Three</Card.Title>
                <Card.Text className='service__discription'>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <Button variant="primary"><Link to='/activitiesdetails' className="activities__link">View Activity</Link></Button>
              </Card.Body>
            </Card>
          </Col>

          <Col lg={4} md={6} sm={12}>
            <Card className='activity__card'>
              <Card.Img variant="top" src="https://img.freepik.com/free-photo/close-up-workplace-with-digital-tablet-statistics_1098-1382.jpg?t=st=1666332153~exp=1666332753~hmac=8440aaa847caaa52357077ff0d4b23703f361f43115607611062e113203b85e0" />
              <Card.Body>
                <Card.Title className='service__name'>Activity Four</Card.Title>
                <Card.Text className='service__discription'>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <Button variant="primary"><Link to='/activitiesdetails' className="activities__link">View Activity</Link></Button>
              </Card.Body>
            </Card>
          </Col>

          <Col lg={4} md={6} sm={12}>
            <Card className='activity__card'>
              <Card.Img variant="top" src="https://img.freepik.com/free-photo/working-code_1098-19858.jpg?w=740&t=st=1666361537~exp=1666362137~hmac=66f6d0c028e44a4f63d12216e603a3c2567ad8a58e825cc79dc3d7b1680284be" />
              <Card.Body>
                <Card.Title className='service__name'>Activity Five</Card.Title>
                <Card.Text className='service__discription'>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <Button variant="primary"><Link to='/activitiesdetails' className="activities__link">View Activity</Link></Button>
              </Card.Body>
            </Card>
          </Col>

          <Col lg={4} md={6} sm={12}>
            <Card className='activity__card'>
              <Card.Img variant="top" src="https://img.freepik.com/free-photo/entrepreneur-working-with-bills_1098-20001.jpg?t=st=1666359693~exp=1666360293~hmac=04fa3c4ecf139fbf278318d7e96b743d05618cef1d5818de408b543e870e31e4" />
              <Card.Body>
                <Card.Title className='service__name'>Activity Six</Card.Title>
                <Card.Text className='service__discription'>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <Button variant="primary"><Link to='/activitiesdetails' className="activities__link">View Activity</Link></Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  ) ;
};

export default AllActivities;
