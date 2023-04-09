import React from "react";
import {
  Button,
  Container,
  Row,
  Col,
  Table,
  Card,
  Image,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../store/store";
import { ADD_TO_CART } from "../../store/cartSlice";
import Listitems from "../../components/content/cart/List-items";

type Props = {};

function Cart({}: Props) {
  const { cart } = useSelector((state: RootState) => ({ ...state }));

  const sumTotal = () => {
    return cart.reduce((currentValue, nextValue) => {
      return currentValue + nextValue.count * nextValue.price;
    }, 0);
  };

  return (
    <Container className="py-5">
      <h2 className="text-center mb-5 text-custom-primary">
        YOUR CART : {cart.length} ITEMS
      </h2>
      <Row md={1} sm={1} xs={1}>
        <Col lg="9">
          <Table striped className="align-middle text-center position-relative">
            <thead className="bg-custom-secondary">
              <tr>
                <th>Image</th>
                <th>Name</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
            {cart.length ? (
              cart.map((item, idx) => <Listitems key={item.id} item={item} idx={idx} />)
            ) : (
              <td className="text-center my-5 position-relative">
                ------- No item in cart -------
              </td>
            )}
            </tbody>
          </Table>
        </Col>
        <Col xs lg="3">
          <Card border="custom-secondary">
            <Card.Body>
              <Card.Title>Order Summary</Card.Title>
              <hr />
              {cart.map((item) => (
                <div className="d-flex justify-content-between" key={item.id}>
                  <p>
                    {item.title} x {item.count}
                  </p>
                  <p>{`$${item.price * item.count}`}</p>
                </div>
              ))}
              <hr />
              <p>Total : ${sumTotal()}</p>
              <hr />
              <Button className="btn-custom-secondary text-white">
                Check out
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Cart;
