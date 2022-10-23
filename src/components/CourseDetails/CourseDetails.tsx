import * as React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

interface ICourseDetailsProps {
}

const CourseDetails: React.FunctionComponent<ICourseDetailsProps> = (props) => {
  return (
    <>
      <Container>
        <Row>
          <Col lg={8} md={6} sm={12}>
            <h1>Course Details</h1>
          </Col>
          <Col lg={4} md={6} sm={12}>
            <h1>Course Details</h1>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default CourseDetails;
