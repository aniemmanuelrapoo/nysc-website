import * as React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Information } from '../../RestApi/AppUrl';
import parse from 'html-react-parser';
import axios from 'axios';

interface IAboutDescriptionProps {
}

interface IPost {
  id: number
  about: string
}

const defaultPosts:IPost[] = [];

const AboutDescription: React.FunctionComponent<IAboutDescriptionProps> = (props) => {
  const [posts, setPosts]: [IPost[], (posts: IPost[]) => void] = React.useState(defaultPosts);
  const [loading, setLoading]: [boolean, (loading: boolean) => void] = React.useState<boolean>(true);
  const [error, setError]: [string, (error: string) => void] = React.useState("");

  React.useEffect(() => {
      axios
      .get<IPost[]>(`${Information}`, {
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
  return(
    <>
      <Container className='mt-5'>
        <Row>
          <Col sm={12} lg={12} md={12}>
            <h1 className='service__name'>Who We Are</h1>
            <hr />
            {loading ? 'loading' : error ? error : parse(`${posts[0]['about']}`)}
          </Col>
        </Row>
      </Container>
    </>
  ) ;
};

export default AboutDescription;
