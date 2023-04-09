import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import {
  Button,
  Form,
  Row,
  Col,
  Placeholder,
  Container,
} from "react-bootstrap";
import ProductInformation from "../../components/content/Section-Product/ProductInformation";
import { useDispatch, useSelector } from "react-redux";
import { ADD_TO_CART } from "../../store/cartSlice";
import type { RootState } from "../../store/store";
import _ from "lodash";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SectionProduct from "../../components/content/Section-Product/SectionProduct";
import Subscribe from "../../components/content/SectionSubscribe/Subscribe";

function ProductDetail() {
  const { id } = useParams();
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const { cart } = useSelector((state: RootState) => ({ ...state }));
  
  const [count, setCount] = useState(1);

  const handleChange = (e:any) => {
    setCount(e.target.value < 1 ? 1 : parseInt(e.target.value));
  };

  const handleAddToCart = () => {
    let cart = [];
    if (localStorage.getItem("cart")) {
      cart = JSON.parse(localStorage.getItem("cart") || "");
    }
    if (cart.length === 0) {
      cart.push({
        ...data[0],
        count: count,
      });
    } else {
      const found = cart.find((el: any) => el.id == id);
      if (found) {
        found.count += count;
      } else {
        cart.push({
          ...data[0],
          count: count
        });
      }
    }
    let unique = _.uniqWith(cart, _.isEqual);
    //update to localStorage
    localStorage.setItem("cart", JSON.stringify(unique));
    //update to store redux
    dispatch(ADD_TO_CART(unique));
    toast.success(`Add ${data[0].title} to cart success!`, { theme: "colored" });
  };

  const loadProduct = () => {
    fetch("../data/Data.json")
      .then((response) => response.json())
      .then((res) => {
        setData(res.filter((item: any) => item.id == id));
        setLoading(false);
      })
      .catch((err) => {
        console.log(err.message);
        setLoading(false);
      });
  };

  useEffect(() => {
    loadProduct();
  }, [id]);

  return (
    <>
      <section className="py-7">
      <ToastContainer />
        <Container>
          {data.map((item) => (
            <Row key={item.id} lg={2} md={2} sm={1} xs={1} className="gy-5">
              <Col className="">
                {loading ? (
                  <Placeholder
                    xs={5}
                    size="lg"
                    style={{ height: "500px", width: "100%" }}
                  />
                ) : (
                  <img
                    src={item.url}
                    alt={item.title}
                    className=""
                    style={{
                      height: "500px",
                      width: "100%",
                      objectFit: "cover",
                    }}
                  />
                )}
              </Col>
              <Col className="my-auto px-5 text-custom-primary">
                <h1>{item.title}</h1>
                <h4 className="text-custom-yellow">{item.price}</h4>
                <br />
                <p>{item.des}</p>
                <br />

                <div className="d-flex align-items-center">
                  <p className="my-auto">Quality: </p>
                  <Form.Control
                    type="number"
                    onChange={handleChange}
                    value={count}
                    required
                    style={{ width: "60px" }}
                    className="mx-2"
                  />
                  <Button className="btn-custom-primary" onClick={handleAddToCart}>Add To cart</Button>
                </div>
              </Col>
            </Row>
          ))}
        </Container>
      </section>

      <section className="py-5">
        <ProductInformation />
      </section>

      <section className="py-7 bg-custom-primary">
        <Container>
          <SectionProduct category="vegetable" />
        </Container>
      </section>

      <section className="py-7">
        <Container>
          <Subscribe />
        </Container>
      </section>
    </>
  );
}

export default ProductDetail;
