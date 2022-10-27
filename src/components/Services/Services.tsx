import axios from 'axios';
import * as React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
// import updateIcon from '../../asset/image/updated.png';
// import activitesIcon from '../../asset/image/mental-health.png';
// import eventIcon from '../../asset/image/event.png';
import { MyServices } from '../../RestApi/AppUrl';

interface IServicesProps {
}
interface IPost {
  id: number
  service_name: string
  service_discription: string
  service_logo:string
}

const defaultPosts:IPost[] = [];

const Services: React.FunctionComponent<IServicesProps> = (props) => {
  const [posts, setPosts]: [IPost[], (posts: IPost[]) => void] = React.useState(defaultPosts);
  const [loading, setLoading]: [boolean, (loading: boolean) => void] = React.useState<boolean>(true);
  const [error, setError]: [string, (error: string) => void] = React.useState("");

  React.useEffect(() => {
      axios
      .get<IPost[]>(`${MyServices}`, {
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
  return(
    <>
      <Container className='text-center'>
        <h1 className='service__title'>OUR SERVICES</h1>
        <div className="service__titleBottom"></div>
        <Row>
          {loading ? ('loading') : error ? (error) : (
            posts.map((post) => (
              <Col lg={4} md={6} sm={12} key={post.id}>
                <div className='service__card'>
                  <img className='service__img1' src={post.service_logo} alt="" />
                  <h2 className='service__name'>{post.service_name}</h2>
                  <p className='service__discription'>{post.service_discription}</p>
                </div>
              </Col>
            ))
          )}
          
        </Row>
      </Container>
    </>
  ) ;
};

export default Services;
