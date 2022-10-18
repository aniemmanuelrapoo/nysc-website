import * as React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import '../../asset/css/custom.css'
import '../../asset/css/bootstrap.min.css'

interface ITopBannerProps {
}

const TopBanner: React.FunctionComponent<ITopBannerProps> = (props) => {
  return (
    <>
      <Container className='top__fixedBanner p-0' fluid>
        <div className="top__bannerOverlay">
          <Container className='top__content'>
            <Row>
              <Col className='text-center'>
                <h1 className='top__title'>NYSC IN CAMP ACTIVITES</h1>
                <h4 className='top__subTitle'>All Update On Camp Activites</h4>
                <Button variant="primary">Explore All</Button>
              </Col>
            </Row>
          </Container>
        </div>
      </Container>
    </>
  )
};

export default TopBanner;
