import React from "react";
import { Button, Container, Form } from "react-bootstrap";
import bg from "../../../assets/img/bg-subscribe.jpg"

function Subscribe() {
  return (
    <div
      className="rounded-5 d-flex flex-md-row flex-column justify-content-md-between align-items-center px-5"
      style={{
        width: "100%",
        height: "300px",
        background: `url(${bg}) no-repeat`,
        backgroundSize: "cover",
      }}
    >
      <div className="my-sm-auto">
        <h2 className="text-white">Subscribe to <br /> our Newsletter</h2>
      </div>
      <div className="d-flex my-sm-auto">
        <Form.Control type="email" placeholder="Enter email" />
        <Button>Subscribe</Button>
      </div>
    </div>
  );
}

export default Subscribe;
