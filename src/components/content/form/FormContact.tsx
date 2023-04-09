import React from "react";
import { Form, Button } from "react-bootstrap";

type Props = {};

function FormContact({}: Props) {
  return (
    <Form>
      <div className="d-flex text-custom-primary">
        <Form.Group className="mb-3 w-100 me-3">
          <Form.Label>Full Name</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3 w-100">
          <Form.Label>Your Email</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
      </div>

      <div className="d-flex my-3 text-custom-primary">
        <Form.Group className="mb-3 w-100 me-3">
          <Form.Label>Company</Form.Label>
          <Form.Control type="email" placeholder="Enter company name" />
        </Form.Group>

        <Form.Group className="mb-3 w-100">
          <Form.Label>Subject</Form.Label>
          <Form.Control type="email" placeholder="How can we help" />
        </Form.Group>
      </div>

      <Form.Group className="mb-3 text-custom-primary">
        <Form.Label>Message</Form.Label>
        <Form.Control as="textarea" rows={3} placeholder="hello there, i would like to talk about how to..." />
      </Form.Group>

      <Button type="submit" size="lg" className="btn-custom-primary mt-3">
        Submit
      </Button>
    </Form>
  );
}

export default FormContact;
