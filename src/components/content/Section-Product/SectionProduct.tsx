import React, { useState, useEffect, useContext } from "react";
import { DataContext } from "../../../App";
import { Button, Card, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

function SectionProduct({ category }:{category:string}) {
  /* const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    fetch(`./data/Data.json`)
      .then((response) => response.json())
      .then((res) => {
        setData(res);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  console.log(data); */

  const {data} = useContext(DataContext);

  return (
    <>
      <div className="d-flex justify-content-between align-items-center">
        <div>
          <h4 className="fst-italic text-custom-secondary">Offer</h4>
          <h2 className="text-white">We Offer Organic For You</h2>
        </div>
        <div>
          <Link role="button" to="/shop" className="btn btn-custom-yellow text-custom-primary">
            View all products
          </Link>
        </div>
      </div>
      <div className="mt-4">
        <Row lg={4} md={2} sm={2} xs={1} className="gy-3">
          {data.filter((item: any) => item.category === `${category}`).slice(0, 4).map((item: any) => (
              <Col key={item.id}>
                <Card>
                  <Card.Img
                    variant="top"
                    src={item.url}
                    style={{ height: "280px", objectFit: "cover" }}
                  />
                  <Card.Body>
                    <Card.Text className="text-center text-custom-primary">{item.title}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
        </Row>
      </div>
    </>
  );
}

export default SectionProduct;
