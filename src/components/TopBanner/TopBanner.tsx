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
  const [title, setTitle]: [string, (title: string) => void] = React.useState(".....");
  const [subtitle, setSubtitle]: [string, (subtitle: string) => void] = React.useState("......");

  React.useEffect(() => {
    (async () => {
      await axios
      .get<IPost[]>(`${HomeTopTitle}`, {
          headers: {
            "Content-Type": "application/json"
          },
        })
      .then(response => {
        setPosts(response.data);
        setTitle(posts[0]['home_title'])
        setSubtitle(posts[0]['home_subtitle'])
      })
      .catch(err => {
        if(err.response.status === 404){
          setTitle('???')
          setSubtitle('????')
        }
      });
    })();
    }, [posts]);
  
  return (
    <>
      <Container className='top__fixedBanner p-0' fluid>
        <div className="top__bannerOverlay">
          <Container className='top__content'>
            <Row>
              <Col className='text-center'>
                <h1 className='top__title'>{title}</h1>
                <h4 className='top__subTitle'>{subtitle}</h4>
                <Button variant="primary"><Link to='/activitiesdetails' className="activities__link">All Activites</Link></Button>
              </Col>
            </Row>
          </Container>
        </div>
      </Container>
    </>
  )
};

export default TopBanner;
