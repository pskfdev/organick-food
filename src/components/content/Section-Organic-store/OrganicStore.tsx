import React from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
import bg from "../../../assets/img/bg-organic-store.jpg";

function OrganicStore() {
  return (
    <Row lg={2} md={2} sm={1} xs={1} className="g-0">
      <Col
        style={{
          height: "700px",
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
          backgroundPosition: "bottom",
          backgroundRepeat: "no-repeat"
        }}
      ></Col>
      <Col className="d-flex align-items-center position-relative">
        <div className="bg-white rounded-5 p-5 col col-12 col-lg-9 ms-md-n5 ms-0 text-custom-primary">
          <h4 className="fst-italic text-custom-secondary">Eco friendly</h4>
          <h2 className="my-3">
            Econis is a Friendly <br /> Organic Store
          </h2>
          <p>
            <span className="fw-bold">Start with Our Company First</span>
            <br />
            Sed ut perspiciatis unde omnis iste natus error sit voluptat
            accusantium doloremque laudantium. Sed ut perspiciatis.
          </p>
          <p>
            <span className="fw-bold">Learn How to Grow Yourself</span>
            <br />
            Sed ut perspiciatis unde omnis iste natus error sit voluptat
            accusantium doloremque laudantium. Sed ut perspiciatis.
          </p>
          <p>
            <span className="fw-bold">Farming Strategies of Today</span>
            <br />
            Sed ut perspiciatis unde omnis iste natus error sit voluptat
            accusantium doloremque laudantium. Sed ut perspiciatis.
          </p>
        </div>
      </Col>
    </Row>
  );
}

export default OrganicStore;
