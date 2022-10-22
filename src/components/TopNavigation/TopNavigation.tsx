import * as React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import ServiconLogo from '../../asset/image/logo2.png'
import NyscLogo from '../../asset/image/nysc.png'
import '../../asset/css/custom.css'
import '../../asset/css/bootstrap.min.css'
import { NavLink } from "react-router-dom";

interface ITopNavigationProps {
}

const TopNavigation: React.FunctionComponent<ITopNavigationProps> = (props) => {
  const [navBarTitle, setNavBarTitle] = React.useState('nav__title')
  const [navBackground, setnavBackground] = React.useState('nav__background')
  
  React.useEffect(() => {
    const onScroll = () => {
      if(window.scrollY > 100){
        setNavBarTitle('nav__titleScroll')
        setnavBackground('nav__backgroundScroll')
      }else if(window.scrollY < 100){
        setNavBarTitle('nav__title')
        setnavBackground('nav__background')
      }
    }

    window.addEventListener('scroll', onScroll)

    return() => window.removeEventListener('scroll', onScroll)
  })
  return (
    <>
      <Navbar collapseOnSelect fixed="top" expand="lg" className={navBackground}>
      <Container>
    
        <Navbar.Brand href="#home" className={`${navBarTitle} nav__sideOne`}> {navBarTitle === 'nav__titleScroll' ? <img src={ServiconLogo} alt='' width='20%' /> : <img src={NyscLogo} alt='' width='15%' />} NYSC CAMP ACTIVITIES</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" className='nav__toggle' />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          </Nav>
          <Nav className='nav__sideTwo'>
            
            <Nav.Link><NavLink to="/" className='nav__list'>HOME</NavLink></Nav.Link>
           
            <Nav.Link><NavLink to="/about" className='nav__list'>ABOUT</NavLink></Nav.Link>
          
            <Nav.Link><NavLink to="/services" className='nav__list'>SERVICES</NavLink></Nav.Link>
            
            <Nav.Link><NavLink to="/lectures" className='nav__list'>LECTURES</NavLink></Nav.Link>
        
            <Nav.Link><NavLink to="/activities" className='nav__list'>ACTIVITIES</NavLink></Nav.Link>
        
            <Nav.Link><NavLink to="/contact" className='nav__list'>CONTACT US</NavLink></Nav.Link>
        
            <NavDropdown title="PROFILE" id="collasible-nav-dropdown">
      
            <NavDropdown.Item href="#action/3.1"><NavLink to="/contact" className='nav__list text-dark'>View Profile</NavLink></NavDropdown.Item>
            
              {/* <NavDropdown.Item href="#action/3.2">
              <NavLink to="/contact" className='nav__list text-dark'>Another action</NavLink>
              </NavDropdown.Item> */}
        
              <NavDropdown.Divider />
          
              <NavDropdown.Item href="#action/3.4">
              <NavLink to="/contact" className='nav__list text-dark'>Log Out</NavLink>
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
      </Navbar>
    </>
  );
};

export default TopNavigation;
