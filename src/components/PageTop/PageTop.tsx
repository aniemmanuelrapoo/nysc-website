import * as React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

interface IPageTopProps {
  pageTitle: string
}

const PageTop: React.FunctionComponent<IPageTopProps> = ({ pageTitle }) => {
  return(
    <>
      <Container className='top__fixedPage p-0' fluid>
        <div className="top__pageOverlay">
          <Container className='top__content'>
            <Row>
              <Col className='text-center'>
                <h4 className='top__pageTitle'>{pageTitle}</h4>
              </Col>
            </Row>
          </Container>
        </div>
      </Container>
    </>
  ) ;
};

export default PageTop;
