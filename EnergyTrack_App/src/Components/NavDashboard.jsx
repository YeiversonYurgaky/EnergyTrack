import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import '../Styles/Navbar.css';
const NavDashboard = () => {
  const usuario = localStorage.getItem('username');
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Bienvenido {usuario}</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="http://localhost:5173/">
              Ir al inicio de sesión
            </Nav.Link>
            <Nav.Link href="#link">Configuración</Nav.Link>
            <NavDropdown title="Filtrar" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">
                Consumo más alto
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Consumo más bajo
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Más nuevos</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
                Más Antiguos
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavDashboard;
