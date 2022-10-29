import * as React from 'react';
import { Col, Container, Row, Modal, Button  } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVideo} from '@fortawesome/free-solid-svg-icons';
import { HomeVideo } from '../../RestApi/AppUrl';
import axios from 'axios';
import parse from 'html-react-parser';

// const nyscVideo =  require("../../asset/image/anthem.mp4")

interface IVideosProps {
}

interface IPost {
  video_description: string
  video_url: string
}

const defaultPosts:IPost[] = [];

const Videos: React.FunctionComponent<IVideosProps> = (props) => {
  const [show, setShow] = React.useState(false);
  const [posts, setPosts]: [IPost[], (posts: IPost[]) => void] = React.useState(defaultPosts);
  const [loading, setLoading]: [boolean, (loading: boolean) => void] = React.useState<boolean>(true);
  const [error, setError]: [string, (error: string) => void] = React.useState("");

  React.useEffect(() => {
      axios
      .get<IPost[]>(`${HomeVideo}`, {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          timeout : 60000
        })
      .then(response => {
        setPosts(response.data);
        setLoading(false);
      })
      .catch(ex => {
        const err =
        ex.code === "ECONNABORTED"
          ? "A timeout has occurred"
          : ex.response.status === 404
            ? "Resource not found"
            : '';
        setError(err);
        setLoading(false);
      });
  }, []);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Container className='text-center'>
        <h1 className='service__title'>OUR VIDEO</h1>
        <div className="service__titleBottom"></div>
        <Row>
          <Col lg={6} md={6} sm={12} className='video__text'>
          {loading ? 'loading' : error ? error : parse(`${posts[0]['video_description']}`)}
          </Col>
          <Col lg={6} md={6} sm={12} className='video__card'>
            <FontAwesomeIcon icon={faVideo} className='summary__iconHead' onClick={handleShow} />
          </Col>
        </Row>
        <Modal size='lg' show={show} onHide={handleClose}>
          <Modal.Body className='video__play'>
          {loading ? 'loading' : error ? error :
            <iframe width="100%" height="315"
            src={posts[0]['video_url']} title="NYSC Anthem">
            </iframe>
          }
          </Modal.Body>
          <Modal.Footer className='video__play'>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </Container>
    </>
  );
};

export default Videos;
