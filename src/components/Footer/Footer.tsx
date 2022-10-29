import * as React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import {faFacebook} from '@fortawesome/free-brands-svg-icons'
import {faYoutube} from '@fortawesome/free-brands-svg-icons'
import {faWhatsapp} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';
import { FooterData } from '../../RestApi/AppUrl';
import axios from 'axios';

interface IFooterProps {
}

interface IPost {
  id: number
  address: string
  email: string
  phone: string
  facebook: string
  youtube: string
  twitter: string
  footer_credit: string
}

const defaultPosts:IPost[] = [];

const Footer: React.FunctionComponent<IFooterProps> = (props) => {
  const [posts, setPosts]: [IPost[], (posts: IPost[]) => void] = React.useState(defaultPosts);
  const [loading, setLoading]: [boolean, (loading: boolean) => void] = React.useState<boolean>(true);
  const [error, setError]: [string, (error: string) => void] = React.useState("");

  React.useEffect(() => {
      axios
      .get<IPost[]>(`${FooterData}`, {
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
  return (
    <>
      <Container fluid className='footer__section'>
        <Row>
          <Col lg={3} md={6} sm={12} className='text-center footer__col'>
            <h2 className='footer__name text-center'>Follow Us</h2>
            <div className='footer__socialContainer'>
              <a href={loading ? 'loading' : error ? error : posts[0]['facebook']} rel='noreferrer noopener'>
              <FontAwesomeIcon icon={faFacebook} size="2x" className='footer__social facebook' />  
              </a>
              <a href={loading ? 'loading' : error ? error : posts[0]['youtube']} rel='noreferrer noopener'>
              <FontAwesomeIcon icon={faYoutube} size="2x" className='footer__social youtube' />  
              </a>
              <a href={loading ? 'loading' : error ? error : posts[0]['twitter']} rel='noreferrer noopener'>
              <FontAwesomeIcon icon={faWhatsapp} size="2x" className='footer__social whatsapp' />  
              </a>
            </div>
          </Col>
          <Col lg={3} md={6} sm={12} className='text-start footer__col'>
            <h2 className='footer__name'>Address</h2>
            <p className="footer__AddressDes">
            {loading ? 'loading' : error ? error : posts[0]['address']}<br></br>
              <FontAwesomeIcon icon={faEnvelope}  /> Email : {loading ? 'loading' : error ? error : posts[0]['email']}<br></br>
              <FontAwesomeIcon icon={faPhone}  /> Phone : {loading ? 'loading' : error ? error : posts[0]['phone']}<br></br>
          </p>
          </Col>
          <Col lg={3} md={6} sm={12} className='text-start footer__col'>
            <h2 className='footer__name'>Information</h2>
            <NavLink className="footer__link" to="/about" >About Us</NavLink><br></br>
            <NavLink  className="footer__link" to="/activities" >Activitie </NavLink><br></br>
            <NavLink  className="footer__link" to="/lectures" >Lectures </NavLink><br></br>
            <NavLink className="footer__link" to="/contact" >Contact Us</NavLink><br></br>
          </Col>
          <Col lg={3} md={6} sm={12} className='text-start footer__col'>
            <h2 className='footer__name'>Policy</h2>
            <NavLink className="footer__link" to="/nyscpolicy" >NYSC Policy</NavLink> <br></br>
            <NavLink className="footer__link" to="/termsandcondition" >Trems And Condition</NavLink> <br></br>
            <NavLink className="footer__link" to="/privacypolicy" >Privacy Policy</NavLink> <br></br>
          </Col>
        </Row>
      </Container>
      <Container fluid className="text-center copyright__section">
        <a className="copyright__link" href="https://aniemmanuelrapoo.netlify.app/">{loading ? 'loading' : error ? error : posts[0]['footer_credit']}</a>
      </Container>
    </>
  );
};

export default Footer;
