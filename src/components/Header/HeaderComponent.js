import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useAuth } from "../../provider/AuthProvide";
import axios from "axios";

const HeaderComponent = () => {
  const auth = useAuth();
  //Funciones para generar reporte api ruby on rails
  const getPopular = () => {
    axios
      .get("http://127.0.0.1:3001/popularTask")
      .then((response) => {
        console.log(response);
      })
      .catch((error) => console.log(error));
  };

  const getReport = () => {
    axios
      .get("http://127.0.0.1:3001/report")
      .then((response) => {
        console.log(response);
      })
      .catch((error) => console.log(error));
  };
  // END

  return (
    <>
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">CTC</Navbar.Brand>
          <Nav className="me-auto">
            <NavDropdown title="Reportes" id="navbarScrollingDropdown">
              <NavDropdown.Item onClick={getReport}>
                Pendiente-Terminado
              </NavDropdown.Item>
              <NavDropdown.Item onClick={getPopular}>
                Reporte Popular
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link onClick={() => auth.logout()}>Salir</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default HeaderComponent;
