import React from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
import naturalFood from "../../assets/img/Natural-Food.png";
import bannerL from "../../assets/img/banner-left.png";

var bgImage = {
  background: `url(${bannerL}) no-repeat`,
  height: "850px",
  backgroundSize: "cover"
};

function Banner() {
  return (
    <figure className="bg-custom-banner w-100 position-relative" style={{ height: "850px" }}>
      <Container>
        <Row>
          <Col className="position-absolute top-50" lg={3} md={6} sm={6}>
            <img src={naturalFood} alt="" />
            <h1 className="my-4 text-custom-primary">Choose the best healthier way of life</h1>
            <Button className="btn-custom-yellow text-custom-primary">
              Explore Now
            </Button>
          </Col>

          <Col
            lg={{ span: 8, offset: 4 }}
            md={{ span: 12, offset: 0 }}
            xs={{ span: 12, offset: 0 }}
            style={bgImage}
          >
          </Col>
        </Row>
      </Container>
    </figure>
  );
}

export default Banner;
