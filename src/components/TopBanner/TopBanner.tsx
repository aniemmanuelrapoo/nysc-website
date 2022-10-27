import axios from 'axios';
import * as React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HomeTopTitle } from '../../RestApi/AppUrl';

interface ITopBannerProps {
}

interface IPost {
  home_title: string
  home_subtitle: string
}

const defaultPosts:IPost[] = [];

const TopBanner: React.FunctionComponent<ITopBannerProps> = (props) => {
  const [posts, setPosts]: [IPost[], (posts: IPost[]) => void] = React.useState(defaultPosts);
  const [loading, setLoading]: [boolean, (loading: boolean) => void] = React.useState<boolean>(true);
  const [error, setError]: [string, (error: string) => void] = React.useState("");

  React.useEffect(() => {
      axios
      .get<IPost[]>(`${HomeTopTitle}`, {
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
    }, [posts]);
  
  return (
    <>
      <Container className='top__fixedBanner p-0' fluid>
        <div className="top__bannerOverlay">
          <Container className='top__content'>
              <Row>
                {loading ? ('loading') : error ? (error) : (
                  posts.map((post, index) => (
                    <Col className='text-center' key={index}>
                      <h1 className='top__title'>{post.home_title}</h1>
                      <h4 className='top__subTitle'>{post.home_subtitle}</h4>
                      <Button variant="primary"><Link to='/activities' className="activities__link">All Activity</Link></Button>
                    </Col>
                    ))
                  )}
              </Row>
          </Container>
        </div>
      </Container>
    </>
  )
};

export default TopBanner;
