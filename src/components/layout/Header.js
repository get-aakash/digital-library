import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <Navbar expand="md border" bg='none' >
      <Container>
        <Navbar.Brand href="#home"><Link to="/">DL</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto gap-4 fs-4">
          <Link to="/" title='Home'><i class="fa-solid fa-house"></i></Link>
            <Link to="/signup" title='SignUp'><i className="fa-solid fa-user-pen"></i></Link>
            <Link to="/signin" title='SignIn'><i className="fa-solid fa-right-to-bracket"></i></Link>

            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header
