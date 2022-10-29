import axios from 'axios';
import * as React from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { ActivityHome } from '../../RestApi/AppUrl';

interface IRecentActivitiesProps {
}

interface IPost {
  id: number
  image_one: string
  image_two: string
  activity_name: string
  activity_description:string
  activity_features:string
  live_preview:string
}

const defaultPosts:IPost[] = [];

const RecentActivities: React.FunctionComponent<IRecentActivitiesProps> = (props) => {
  const [posts, setPosts]: [IPost[], (posts: IPost[]) => void] = React.useState(defaultPosts);
  const [loading, setLoading]: [boolean, (loading: boolean) => void] = React.useState<boolean>(true);
  const [error, setError]: [string, (error: string) => void] = React.useState("");

  React.useEffect(() => {
      axios
      .get<IPost[]>(`${ActivityHome}`, {
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
        <h1 className='service__title'>RECENT ACTIVITIES</h1>
        <div className="service__titleBottom"></div>
        <Row className='text-dark'>
        {loading ? ('loading') : error ? (error) : (
          posts.map((post) => (
          <Col lg={4} md={6} sm={12}>
            <Card className='activity__card'>
              <Card.Img variant="top" src={post.image_one} className='activity__img1' />
              <Card.Body>
                <Card.Title className='service__name'>{post.activity_name}</Card.Title>
                <Card.Text className='service__discription'>
                {post.activity_description}
                </Card.Text>
                <Button variant="primary"><Link to='/activitiesdetails' className="activities__link">View Activity</Link></Button>
              </Card.Body>
            </Card>
          </Col>
          ))
          )}
        </Row>
      </Container>
    </>
  ) ;
};

export default RecentActivities;
