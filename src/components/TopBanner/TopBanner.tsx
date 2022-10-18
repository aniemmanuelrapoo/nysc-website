import * as React from 'react';
import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/esm/Row';

interface ITopBannerProps {
}

const TopBanner: React.FunctionComponent<ITopBannerProps> = (props) => {
  return (
    <>
      <Container>
        <Row></Row>
      </Container>
    </>
  )
};

export default TopBanner;
