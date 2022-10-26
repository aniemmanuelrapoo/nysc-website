// import axios from 'axios';
import * as React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';

interface ITopBannerProps {
}

const TopBanner: React.FunctionComponent<ITopBannerProps> = (props) => {
  // const [result, setResult] = React.useState()
  // React.useEffect(() => {
  //   let ignore = false;
  //   axios.get('http://127.0.0.1:8000/api/homepage/title')
  //     .then(function (response) {
  //       if (!ignore){ 
  //         setResult(response.data)
  //         console.log(response.data);
  //       }
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     })
  
  //   return () => {
  //     ignore = true
  //   }
  // }, [])
  
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
