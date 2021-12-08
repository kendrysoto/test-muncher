import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Navbar, Container, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const ContainerNav = styled.div`
  .navbar {
    background-color: #85144b;
  }

  a {
    color: white;
    text-decoration: none;
  }

  #muncher {
    color: white;
  }
`;

const SideMenu = ({}) => {
  return (
    <ContainerNav>
      <Navbar id="nav">
        <Container>
          <Navbar.Brand href="#home" id="muncher">
            Muncher
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link to="/Products">
              <Link to="/Home">Home</Link>
            </Nav.Link>
            <Nav.Link to="/Products">
              <Link to="/Products">Products</Link>
            </Nav.Link>
            <Nav.Link href="#pricing">
              <Link to="/Auth">Login</Link>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </ContainerNav>
  );
};
export default SideMenu;
