import * as React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

interface IAllCoursesProps {
}

const AllCourses: React.FunctionComponent<IAllCoursesProps> = (props) => {
  return(
    <>
      <Container className='text-center'>
        <h1 className='service__title'>ALL LECTURES</h1>
        <div className="service__titleBottom"></div>
        <Row>
          <Col lg={6} md={12} sm={12}>
            <Row>
              <Col lg={6} md={6} sm={12} className='p-2'>
                <img src="https://img.freepik.com/free-photo/brainstorm-meeting_1098-15871.jpg?w=740&t=st=1666236061~exp=1666236661~hmac=00948d668a53dfe31a8af42dcd7f361965059faa0901af0d1507a0b36b57de95" alt="" className='course__image' />
              </Col>
              <Col lg={6} md={6} sm={12} className='p-2'>
                <h5 className='service__name text-start course__name'>NYSC Rules And Regulation</h5>
                <p className='service__discription course__des'>All You Should Know About NYSC And How Not To Get Into Trouble During Your Service Yearr</p>
                <Link to="/lecturesdetails" className='float-start course__viewMore'>View Lecture</Link>
              </Col>

              <Col lg={6} md={6} sm={12} className='p-2'>
                <img src="https://img.freepik.com/premium-photo/reading-book_1098-9779.jpg?w=740" alt="" className='course__image' />
              </Col>
              <Col lg={6} md={6} sm={12} className='p-2'>
                <h5 className='service__name text-start course__name'>NYSC Rules</h5>
                <p className='service__discription course__des'>All You Should Know About NYSC And How Not To Get Into Trouble During Your Service Yearr</p>
                <Link to="/lecturesdetails" className='float-start course__viewMore'>View Lecture</Link>
              </Col>

              <Col lg={6} md={6} sm={12} className='p-2'>
                <img src="https://img.freepik.com/free-photo/discussing-plans_1098-14250.jpg" alt="" className='course__image' />
              </Col>
              <Col lg={6} md={6} sm={12} className='p-2'>
                <h5 className='service__name text-start course__name'>NYSC Rules</h5>
                <p className='service__discription course__des'>All You Should Know About NYSC And How Not To Get Into Trouble During Your Service Yearr</p>
                <Link to="/lecturesdetails" className='float-start course__viewMore'>View Lecture</Link>
              </Col>
            </Row>
          </Col>
          <Col lg={6} md={12} sm={12}>
            <Row>
              <Col lg={6} md={6} sm={12} className='p-2'>
                <img src="https://img.freepik.com/free-photo/homework_1098-16454.jpg?w=740&t=st=1666238082~exp=1666238682~hmac=5dacbe982c795949937f93967af90141f0c029f497dceec92b13b7be1b742beb" alt="" className='course__image' />
              </Col>
              <Col lg={6} md={6} sm={12}>
                <h5 className='service__name text-start course__name'>NYSC Rules</h5>
                <p className='service__discription course__des'>All You Should Know About NYSC And How Not To Get Into Trouble During Your Service Yearr</p>
                <Link to="/lecturesdetails" className='float-start course__viewMore'>View Lecture</Link>
              </Col>

              <Col lg={6} md={6} sm={12} className='p-2'>
                <img src="https://img.freepik.com/free-photo/confident-business-team-with-leader_1098-3228.jpg?w=740&t=st=1666238086~exp=1666238686~hmac=066deb81176c8c05d8794a57a8e030186f59d509e4340100daf8bd7ae026084e" alt="" className='course__image' />
              </Col>
              <Col lg={6} md={6} sm={12} className='p-2'>
                <h5 className='service__name text-start course__name'>NYSC Rules</h5>
                <p className='service__discription course__des'>All You Should Know About NYSC And How Not To Get Into Trouble During Your Service Yearr</p>
                <Link to="/lecturesdetails" className='float-start course__viewMore'>View Lecture</Link>
              </Col>

              <Col lg={6} md={6} sm={12} className='p-2'>
                <img src="https://img.freepik.com/free-photo/filling-medical-record_1098-18239.jpg" alt="" className='course__image' />
              </Col>
              <Col lg={6} md={6} sm={12} className='p-2'>
                <h5 className='service__name text-start course__name'>NYSC Rules</h5>
                <p className='service__discription course__des'>All You Should Know About NYSC And How Not To Get Into Trouble During Your Service Yearr</p>
                <Link to="/lecturesdetails" className='float-start course__viewMore'>View Lecture</Link>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  ) ;
};

export default AllCourses;
