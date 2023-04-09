import React, { useState, useEffect, useContext } from "react";
import { DataContext } from "../../../App";
import { Button, Card, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

function SectionProductAll() {
  /* const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    fetch("./data/Data.json")
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
      <div>
        <Row lg={4} md={2} sm={2} xs={1} className="gy-3">
          {data.map((item: any) => (
            <Col key={item.id} as={Link} to={`/product-detail/${item.id}`} className="text-decoration-none">
              <Card border="light">
                <Card.Img
                  variant="top"
                  src={item.url}
                  style={{ height: "280px", objectFit: "cover" }}
                />
                <Card.Body className="d-flex justify-content-between">
                  <Card.Text className="text-center text-custom-primary my-auto">
                    {item.title}
                  </Card.Text>
                  <Card.Text className="text-center text-custom-yellow my-auto">
                    {item.price}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </>
  );
}

export default SectionProductAll;
