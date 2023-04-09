import React from "react";
import { Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

function ProductInformation() {
  return (
    <>
      <Container className="px-lg-7">
        <div className="d-flex justify-content-center text-custom-primary">
          <Link role="button" to="/shop" className="me-2 btn btn-custom-primary text-white">
            Back to shop
          </Link>
          <Link role="button" to="/cart" className="btn btn-custom-success text-custom-primary fw-bold">Go to cart</Link>
        </div><br />
        <p className="text-center text-custom-primary">
          Welcome to the world of natural and organic. Here you can discover the
          bounty of nature. We have grown on the principles of health, ecology,
          and care. We aim to give our customers a healthy chemical-free meal
          for perfect nutrition. It offers about 8-10% carbs. Simple sugars —
          such as glucose and fructose — make up 70% and 80% of the carbs in
          raw.
        </p>
      </Container>
    </>
  );
}

export default ProductInformation;
