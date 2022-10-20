import * as React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

interface IVideosProps {
}

const Videos: React.FunctionComponent<IVideosProps> = (props) => {
  return (
    <>
      <Container className='text-center'>
        <h1 className='service__title'>OUR VIDEO</h1>
        <div className="service__titleBottom"></div>
        <Row>
          <Col lg={6} md={6} sm={12}>
            <p className='text-start service__discription'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit possimus assumenda aperiam incidunt alias quis natus quia mollitia aliquid. Nisi facere doloribus incidunt corporis! Reprehenderit <br /><br /><br />
              
              nihil perspiciatis ipsam veritatis itaque ut beatae velit, iste ex laboriosam quidem nobis repellendus blanditiis amet! Quas, illum? Tempore nostrum at eligendi commodi cum impedit a odio accusantium ipsam ea fugit distinctio praesentium temporibus obcaecati beatae, velit saepe. Porro tempora corporis rerum tenetur <br /><br /><br />
              
              fugiat ullam officiis laboriosam sint corrupti! Perspiciatis quis error id nihil. Delectus mollitia quae ut, fugit quasi, quaerat, soluta inventore perspiciatis adipisci magnam impedit sit iusto illo necessitatibus vel? Veritatis, architecto facilis.
            </p>
          </Col>
          <Col lg={6} md={6} sm={12}>
            <h1>Video</h1>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Videos;
