import axios from 'axios';
import * as React from 'react';
import { Col, Row, Container } from 'react-bootstrap';
import { BarChart, ResponsiveContainer, Bar, XAxis, Tooltip } from 'recharts';
import { ChartData, HomePopularDesc } from '../../RestApi/AppUrl';
import parse from 'html-react-parser';

interface IAnalysisProps {
}

interface IPost {
  id: number
  Activitie: string
  Rating: string
}
interface IPopular {
  popular_description: string
}

const defaultPosts:IPost[] = [];

const defaultPopular:IPopular[] = [];

const Analysis: React.FunctionComponent<IAnalysisProps> = (props) => {
  const [posts, setPosts]: [IPost[], (posts: IPost[]) => void] = React.useState(defaultPosts);
  const [popular, setPopular]: [IPopular[], (popular: IPopular[]) => void] = React.useState(defaultPopular);
  const [loading, setLoading]: [boolean, (loading: boolean) => void] = React.useState<boolean>(true);
  const [error, setError]: [string, (error: string) => void] = React.useState("");

  React.useEffect(() => {
      axios
      .get<IPost[]>(`${ChartData}`, {
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

  React.useEffect(() => {
    axios
    .get<IPopular[]>(`${HomePopularDesc}`, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        timeout : 60000
      })
    .then(response => {
      setPopular(response.data);
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
  return (
    <>
      <Container className='text-center'>
      <h1 className='service__title'>POPULAR ACTIVITIES</h1>
        <div className="service__titleBottom"></div>
        <Row>
          
          <Col lg={6} md={12} sm={12}>
            {loading ? 'loading' : error ? error :
            <ResponsiveContainer width="100%" height="100%">
              <BarChart width={100} height={300} data={posts}>
                <XAxis dataKey="Activitie" />
                <Tooltip />
                <Bar dataKey="Rating" fill="#ee0047" />
              </BarChart>
            </ResponsiveContainer>
            }
          </Col> 
          
          <Col lg={6} md={12} sm={12}>
          {loading ? 'loading' : error ? error :
            <p className='text-start service__discription'>
              {parse(`${popular[0]['popular_description']}`)}
            </p>
            }
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Analysis;
