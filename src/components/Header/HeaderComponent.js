import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import { useAuth } from "../../provider/AuthProvide";
const HeaderComponent = () => {
  const auth = useAuth();

  return (
    <>
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">CTC</Navbar.Brand>
          <Nav>
            <Nav.Link onClick={() => auth.logout()}>Salir</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default HeaderComponent;
