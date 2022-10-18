import * as React from 'react';
import { Container } from 'react-bootstrap';
import '../../asset/css/custom.css'

interface ITopBannerProps {
}

const TopBanner: React.FunctionComponent<ITopBannerProps> = (props) => {
  return (
    <>
      <Container className='topFixedBanner' fluid>
        
      </Container>
    </>
  )
};

export default TopBanner;
