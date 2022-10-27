import axios from 'axios';
import * as React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import updateIcon from '../../asset/image/updated.png';
import activitesIcon from '../../asset/image/mental-health.png';
import eventIcon from '../../asset/image/event.png';
import { MyServices } from '../../RestApi/AppUrl';

interface IServicesProps {
}
interface IPost {
  home_title: string
  home_subtitle: string
}

const defaultPosts:IPost[] = [];

const Services: React.FunctionComponent<IServicesProps> = (props) => {
  const [posts, setPosts]: [IPost[], (posts: IPost[]) => void] = React.useState(defaultPosts);
  const [title, setTitle]: [string, (title: string) => void] = React.useState(".....");
  const [subtitle, setSubtitle]: [string, (subtitle: string) => void] = React.useState("......");

  React.useEffect(() => {
    (async () => {
      await axios
      .get<IPost[]>(`${MyServices}`, {
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
  return(
    <>
      <Container className='text-center'>
        <h1 className='service__title'>OUR SERVICES</h1>
        <div className="service__titleBottom"></div>
        <Row>
          <Col lg={4} md={6} sm={12}>
            <div className='service__card'>
              <img className='service__img1' src={updateIcon} alt="" />
              <h2 className='service__name'>Recent Update</h2>
              <p className='service__discription'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem</p>
            </div>
          </Col>
          <Col lg={4} md={6} sm={12}>
            <div className='service__card'>
              <img className='service__img1' src={activitesIcon} alt="" />
              <h2 className='service__name'>All Camp Activites</h2>
              <p className='service__discription'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem</p>
            </div>
          </Col>
          <Col lg={4} md={6} sm={12}>
            <div className='service__card'>
              <img className='service__img1' src={eventIcon} alt="" />
              <h2 className='service__name'>Upcoming Events</h2>
              <p className='service__discription'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem</p>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  ) ;
};

export default Services;
