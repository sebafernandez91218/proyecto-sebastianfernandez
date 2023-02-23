import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import React from 'react';
import CartWidget from './CartWidget';


const NavBar = () => {
  return (
    <>
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">DANIELA JOYAS</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">inicio</Nav.Link>
            <Nav.Link href="#link">contacto</Nav.Link>
            <NavDropdown title="Productos" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Anillos</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Pulseras
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Cadenas y conjuntos</NavDropdown.Item>
              
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
      <CartWidget/>
    </Navbar>
    
    </>
  )
}

export default NavBar