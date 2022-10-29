import axios from 'axios';
import * as React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { CourseHome } from '../../RestApi/AppUrl';

interface ICoursesProps {
}

interface IPost {
  id: number
  short_title: string
  short_description: string
  small_image: string
}

const defaultPosts:IPost[] = [];

const Courses: React.FunctionComponent<ICoursesProps> = (props) => {
  const [posts, setPosts]: [IPost[], (posts: IPost[]) => void] = React.useState(defaultPosts);
  const [loading, setLoading]: [boolean, (loading: boolean) => void] = React.useState<boolean>(true);
  const [error, setError]: [string, (error: string) => void] = React.useState("");

  React.useEffect(() => {
      axios
      .get<IPost[]>(`${CourseHome}`, {
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
      <Container className='text-center'>
        <h1 className='service__title'>OUR LECTURES</h1>
        <div className="service__titleBottom"></div>
        <Row>
        {loading ? ('loading') : error ? (error) : (
          posts.map((post) => (
          <Col lg={6} md={12} sm={12} key={post.id}>
            <Row>
              <Col lg={6} md={6} sm={12} className='p-2'>
                <img src={post.small_image} alt="" className='course__image' />
              </Col>
              <Col lg={6} md={6} sm={12} className='p-2'>
                <h5 className='service__name text-start course__name'>{post.short_title}</h5>
                <p className='service__discription course__des'>{post.short_description}</p>
                <Link to="/lecturesdetails" className='float-start course__viewMore'>View Lecture</Link>
              </Col>
            </Row>
          </Col>
           ))
           )}
        </Row>
      </Container>
    </>
  ) ;
};

export default Courses;
