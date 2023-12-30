import React, { useState } from 'react';
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  Collapse,
  NavbarToggler,
} from 'reactstrap';

const MyHeader = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavItem>
          <NavbarBrand href="/">
            <img
              src="/logo.png" // Replace with your image path
              alt="Image"
              className="img-fluid"
            />
          </NavbarBrand>
        </NavItem>
        {/* <NavbarBrand href="/">
        <img
          src="/brandname.png" // Replace with your image path
          alt="Image"
          className="img-fluid"
        />
      </NavbarBrand> */}
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              {/* <NavLink href="/about">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/Lessons">Feature</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/contact">Downloads</NavLink>
            </NavItem> */}

              {/* <NavItem>
              <NavLink href="/about">About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/Lessons">FAQ</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/contact">Blog</NavLink> */}
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default MyHeader;
