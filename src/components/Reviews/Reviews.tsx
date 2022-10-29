import axios from 'axios';
import * as React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
// import StateCord from '../../asset/image/SC1-1.jpg'
import { ClientReview } from '../../RestApi/AppUrl';

interface IReviewsProps {
}

interface IPost {
  id: number
  client_image: string
  client_title: string
  client_subtitle: string
  client_description: string
}

const defaultPosts:IPost[] = [];

const Reviews: React.FunctionComponent<IReviewsProps> = (props) => {
  const [posts, setPosts]: [IPost[], (posts: IPost[]) => void] = React.useState(defaultPosts);
  const [loading, setLoading]: [boolean, (loading: boolean) => void] = React.useState<boolean>(true);
  const [error, setError]: [string, (error: string) => void] = React.useState("");

  React.useEffect(() => {
      axios
      .get<IPost[]>(`${ClientReview}`, {
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
      <Container className='review__slide' fluid>
        <h1 className='service__title p-3'>TESTIMONIAL</h1>
        <div className="service__titleBottom review__titleBottom"></div>
        {loading ? ('loading') : error ? (error) : (
          posts.map((post) => (
        <Row className='text-center justify-content-center'>
          <Col lg={6} md={6} sm={12}>
            <img src={post.client_image} alt="" className='circle__image' />
            <h2 className='service__name'>{post.client_title}</h2>
            <small>{post.client_subtitle}</small>
              <p className='service__discription'>{post.client_description}</p>
          </Col>
        </Row>
         ))
         )}
      </Container>
    </>
  ) ;
};

export default Reviews;
