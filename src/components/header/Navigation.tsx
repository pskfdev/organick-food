import React, { useState } from "react";
import { Button, Container, Navbar, Nav, Form, Badge } from "react-bootstrap";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { FiSearch, FiShoppingCart } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../store/store";

function Navigation() {
  const { cart } = useSelector((state: RootState) => ({ ...state }));
  const navigate = useNavigate();

  const [search, setSearch] = useState<string | null>();

  const handleChange = (e: any) => {
    setSearch(e.target.value);
  };

  const searchSubmit = (e: any) => {
    e.preventDefault();
    switch (true) {
      case search === "product" || search === "pro":
        navigate("/shop");
        break;
      case search === "cart":
        navigate("/cart");
        break;
      case search === "apple":
        navigate("/product-detail/0");
        break;
      case search === "mung bean":
        navigate("/product-detail/1");
        break;
      case search === "onion":
        navigate("/product-detail/3");
        break;
      case search === "cabbage":
        navigate("/product-detail/4");
        break;
      case search === "banana":
        navigate("/product-detail/5");
        break;
      case search === "broccoli":
        navigate("/product-detail/7");
        break;
      case search === "corn":
        navigate("/product-detail/8");
        break;
      case search === "tomato":
        navigate("/product-detail/11");
        break;
      default:
        navigate("*");
    }
  };

  return (
    <>
      <Navbar bg="light" expand="lg" sticky="top" className="py-4">
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img src="/public/salad.ico" alt="logo" style={{ width: "30px" }} />{" "}
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

            <Form className="seach-cart d-flex">
              <Form.Group className="position-relative me-2">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="rounded-pill"
                  onChange={handleChange}
                />
                <Button
                  className="rounded-circle position-absolute end-0 top-0 btn-custom-secondary"
                  onClick={searchSubmit}
                >
                  <FiSearch className="text-white" />
                </Button>
              </Form.Group>

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
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Navigation;
