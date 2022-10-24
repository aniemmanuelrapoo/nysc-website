import * as React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import ServiconLogo from '../../asset/image/logo2.png'
import NyscLogo from '../../asset/image/nysc.png'
import '../../asset/css/custom.css'
import '../../asset/css/bootstrap.min.css'
import { NavLink } from "react-router-dom";

interface ITopNavigationProps {
  pageTitle: string
}

const TopNavigation: React.FunctionComponent<ITopNavigationProps> = ({ pageTitle }) => {
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
      <title>{pageTitle}</title>
      <Navbar collapseOnSelect fixed="top" expand="lg" className={navBackground}>
      <Container>
    
        <Navbar.Brand className={`${navBarTitle} nav__sideOne`}><NavLink to="/" className={`${navBarTitle} nav__sideOne nav__sideLink`}> {navBarTitle === 'nav__titleScroll' ? <img src={ServiconLogo} alt='' width='20%' /> : <img src={NyscLogo} alt='' width='15%' />} NYSC CAMP ACTIVITIES</NavLink></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" className='nav__toggle' />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          </Nav>
          <Nav className='nav__sideTwo'>
            
            <Nav.Link><NavLink to="/home" className={({ isActive }) => (isActive ? 'active' : 'nav__list')}>HOME</NavLink></Nav.Link>
           
            <Nav.Link><NavLink to="/about" className={({ isActive }) => (isActive ? 'active' : 'nav__list')}>ABOUT</NavLink></Nav.Link>
          
            <Nav.Link><NavLink to="/services" className={({ isActive }) => (isActive ? 'active' : 'nav__list')}>SERVICES</NavLink></Nav.Link>
            
            <Nav.Link><NavLink to="/lectures" className={({ isActive }) => (isActive ? 'active' : 'nav__list')}>LECTURES</NavLink></Nav.Link>
        
            <Nav.Link><NavLink to="/activities" className={({ isActive }) => (isActive ? 'active' : 'nav__list')}>ACTIVITIES</NavLink></Nav.Link>
        
            <Nav.Link><NavLink to="/contact" className={({ isActive }) => (isActive ? 'active' : 'nav__list')}>CONTACT US</NavLink></Nav.Link>
        
            <NavDropdown title="PROFILE" id="collasible-nav-dropdown">
      
            <NavDropdown.Item><NavLink to="/profile" className='nav__list text-dark'>View Profile</NavLink></NavDropdown.Item>
        
              <NavDropdown.Divider />
          
              <NavDropdown.Item>
              <NavLink to="/" className='nav__list text-dark'>Log Out</NavLink>
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
