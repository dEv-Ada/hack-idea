import React from "react";
import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import { useNavigate } from "react-router";

const Header = () => {
  const userName = sessionStorage.getItem("user_id");
  const navigate = useNavigate();
  const handleLogout = () => {
    sessionStorage.clear();
    navigate("/login");
  };
  return (
    <Navbar collapseOnSelect bg="primary" data-bs-theme="dark" expand="lg">
      <Container>
        <Navbar.Brand href="/">Hack-Idea</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/my-idea">My Ideas</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link className="avatar" eventKey={2} href="#memes">
              <NavDropdown
                className="avatar-name"
                title={userName !== null && userName[0].toUpperCase()}
                id="collapsible-nav-dropdown"
              >
                <NavDropdown.Item>{userName}</NavDropdown.Item>
                <NavDropdown.Item onClick={handleLogout}>
                  Logout
                </NavDropdown.Item>
              </NavDropdown>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
