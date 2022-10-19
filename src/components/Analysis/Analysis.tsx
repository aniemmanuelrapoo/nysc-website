import * as React from 'react';
import { Col, Row, Container } from 'react-bootstrap';
import { BarChart, ResponsiveContainer, Bar, XAxis, Tooltip } from 'recharts';

interface IAnalysisProps {
}
const dataObject = [
  {Activitie: 'LECTURE', Rating: 70},
  {Activitie: 'SAED', Rating: 50},
  {Activitie: 'SPORT', Rating: 85},
  {Activitie: 'PARADE', Rating: 40},
  {Activitie: 'FOOD', Rating: 100},
  {Activitie: 'GAMES', Rating: 80},
  {Activitie: 'SOCIALS', Rating: 100},
]
const Analysis: React.FunctionComponent<IAnalysisProps> = (props) => {
  const [data] = React.useState(dataObject)
  return (
    <>
      <Container className='text-center'>
      <h1 className='service__title'>POPULAR ACTIVITIES</h1>
        <div className="service__titleBottom"></div>
        <Row>
          <Col lg={6} md={12} sm={12}>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart width={100} height={300} data={data}>
                <XAxis dataKey="Activitie" />
                <Tooltip />
                <Bar dataKey="Rating" fill="#ee0047" />
              </BarChart>
            </ResponsiveContainer>
          </Col>
          <Col lg={6} md={12} sm={12}>
            <p className='text-start service__discription'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit possimus assumenda aperiam incidunt alias quis natus quia mollitia aliquid. Nisi facere doloribus incidunt corporis! Reprehenderit <br /><br /><br />
              
              nihil perspiciatis ipsam veritatis itaque ut beatae velit, iste ex laboriosam quidem nobis repellendus blanditiis amet! Quas, illum? Tempore nostrum at eligendi commodi cum impedit a odio accusantium ipsam ea fugit distinctio praesentium temporibus obcaecati beatae, velit saepe. Porro tempora corporis rerum tenetur <br /><br /><br />
              
              fugiat ullam officiis laboriosam sint corrupti! Perspiciatis quis error id nihil. Delectus mollitia quae ut, fugit quasi, quaerat, soluta inventore perspiciatis adipisci magnam impedit sit iusto illo necessitatibus vel? Veritatis, architecto facilis.
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Analysis;
