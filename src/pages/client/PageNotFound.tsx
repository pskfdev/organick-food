import React from "react";
import { Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import bg from "../../assets/img/pagenotfound.png";

type Props = {}

function PageNotFound({}: Props) {
  return (
    <section
      style={{
        backgroundImage: `url(${bg})`,
        height: "90vh",
        backgroundPosition: "center",
        backgroundSize: "cover"
      }}
    >
      <Container className="d-flex justify-content-end align-items-center h-100">
        <div
          className="p-4 text-center"
          style={{ width: "auto", height: "auto" }}
        >
          <h1 className="fw-bolder text-custom-primary">404</h1>
          <h2 className="fw-bolder text-custom-primary">Page not found</h2>
          <p className="text-custom-dark">The page you are looking for doesn't exist or has been moved</p>
          <Link role="button" className="btn btn-custom-primary" to="/">
            Go to Homepage
          </Link>
        </div>
      </Container>
    </section>
  )
}

export default PageNotFound