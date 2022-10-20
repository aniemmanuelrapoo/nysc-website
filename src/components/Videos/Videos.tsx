import * as React from 'react';
import { Col, Container, Row, Modal, Button  } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVideo} from '@fortawesome/free-solid-svg-icons';

interface IVideosProps {
}

const Videos: React.FunctionComponent<IVideosProps> = (props) => {
  const [show, setShow] = React.useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Container className='text-center'>
        <h1 className='service__title'>OUR VIDEO</h1>
        <div className="service__titleBottom"></div>
        <Row>
          <Col lg={6} md={6} sm={12} className='video__text'>
            <p className='text-start service__discription'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit possimus assumenda aperiam incidunt alias quis natus quia mollitia aliquid. Nisi facere doloribus incidunt corporis! Reprehenderit <br /><br /><br />
              
              nihil perspiciatis ipsam veritatis itaque ut beatae velit, iste ex laboriosam quidem nobis repellendus blanditiis amet! Quas, illum? Tempore nostrum at eligendi commodi cum impedit a odio accusantium ipsam ea fugit distinctio praesentium temporibus obcaecati beatae, velit saepe. Porro tempora corporis rerum tenetur <br /><br /><br />
              
              fugiat ullam officiis laboriosam sint corrupti! Perspiciatis quis error id nihil. Delectus mollitia quae ut, fugit quasi, quaerat, soluta inventore perspiciatis adipisci magnam impedit sit iusto illo necessitatibus vel? Veritatis, architecto facilis.
            </p>
          </Col>
          <Col lg={6} md={6} sm={12} className='video__card'>
            <FontAwesomeIcon icon={faVideo} className='summary__iconHead' onClick={handleShow} />
          </Col>
        </Row>
        <Modal size='lg' show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </Container>
    </>
  );
};

export default Videos;
