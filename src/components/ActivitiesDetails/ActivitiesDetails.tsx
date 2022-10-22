import * as React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

interface IActivitiesDetailsProps {
}

const ActivitiesDetails: React.FunctionComponent<IActivitiesDetailsProps> = (props) => {
  return(
    <>
      <Container>
        <Row>
          <Col>
            <h1>Activities Details</h1>
          </Col>
        </Row>
      </Container>
    </>
  ) ;
};

export default ActivitiesDetails;
