import React, { useState } from "react";
import { Button, Container, Navbar, Nav, Form, Badge } from "react-bootstrap";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { FiSearch, FiShoppingCart } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../store/store";
import Search from "./Search";

function Navigation() {
  const { cart } = useSelector((state: RootState) => ({ ...state }));

  return (
    <>
      <Navbar bg="light" expand="lg" sticky="top" className="py-4">
        <Container>
          <Navbar.Brand as={Link} to="/">
            <span className="text-custom-primary">Organick</span>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse>
            <Nav className="mx-auto">
              <Nav.Link as={NavLink} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={NavLink} to="/about">
                About
              </Nav.Link>
              <Nav.Link as={NavLink} to="/shop">
                Shop
              </Nav.Link>
              <Nav.Link as={NavLink} to="/contact">
                Contact
              </Nav.Link>
            </Nav>

            <div className="seach-cart d-flex">
              <Search />

              <Link
                role="button"
                to="/cart"
                className="btn btn-custom-primary rounded-pill position-relative"
              >
                <FiShoppingCart />
                <Badge bg="danger position-absolute top-0">
                  {cart.length ? cart.length : ""}
                </Badge>
              </Link>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Navigation;
