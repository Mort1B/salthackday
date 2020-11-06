import React from "react";
import { Navbar, Nav } from "react-bootstrap";

function Header() {
  return (
    <div>
  <Navbar bg="dark">
    <Navbar.Brand href="#home">
      <img
        src="/logo.svg"
        width="30"
        height="30"
        className="d-inline-block align-top"
        alt="React Bootstrap logo"
      />
    </Navbar.Brand>
  </Navbar>
    </div>
  );
}

export default Header;
