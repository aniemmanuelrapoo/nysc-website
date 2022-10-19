import * as React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import ServiconLogo from '../../asset/image/logo2.png'
import NyscLogo from '../../asset/image/nysc.png'

interface ITopNavigationProps {
}

const TopNavigation: React.FunctionComponent<ITopNavigationProps> = (props) => {
  const [navBarTitle, setNavBarTitle] = React.useState('nav__title')
  
  React.useEffect(() => {
    const onScroll = () => {
      if(window.scrollY > 100){
        setNavBarTitle('nav__titleScroll')
      }else if(window.scrollY < 100){
        setNavBarTitle('nav__title')
      }
    }

    window.addEventListener('scroll', onScroll)

    return() => window.removeEventListener('scroll', onScroll)
  })
  return (
    <>
      <Navbar collapseOnSelect fixed="top" expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home" className={navBarTitle}> {navBarTitle === 'nav__titleScroll' ? <img src={ServiconLogo} alt='' width='10%' /> : <img src={NyscLogo} alt='' width='8%' />} NYSC IN CAMP ACTIVITIES</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          </Nav>
          <Nav>
            <Nav.Link href="#deets">HOME</Nav.Link>
            <Nav.Link href="#deets">ABOUT</Nav.Link>
            {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
            <Nav.Link href="#deets">SERVICES</Nav.Link>
            <Nav.Link href="#deets">COURSES</Nav.Link>
            <Nav.Link href="#deets">PORTFOLIO</Nav.Link>
            <Nav.Link href="#deets">CONTACT US</Nav.Link>
            {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
      </Navbar>
    </>
  );
};

export default TopNavigation;
