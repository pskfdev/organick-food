import React from "react";
import { Button, Container, Image, Form } from "react-bootstrap";
import { FiTrash2 } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../../store/store";
import { ADD_TO_CART } from "../../../store/cartSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type Props = {
  item: any;
  idx: number;
};

function Listitems({ item, idx }: Props) {
  const dispatch = useDispatch();
  const { cart } = useSelector((state: RootState) => ({ ...state }));

  const handleChange = (e: any) => {
    const count = e.target.value < 1 ? 1 : parseInt(e.target.value);

    let cart: any = [];
    if (localStorage.getItem("cart")) {
      cart = JSON.parse(localStorage.getItem("cart") || "");
    }

    cart.map((el: any, idx: number) => {
      if (el.id == item.id) {
        cart[idx].count = count;
      }
    });

    localStorage.setItem("cart", JSON.stringify(cart));
    dispatch(ADD_TO_CART(cart));
  };

  const handleRemove = (id: number) => {
    let cart = [];
    if (localStorage.getItem("cart")) {
      cart = JSON.parse(localStorage.getItem("cart") || "");
    }

    for (let i = 0; i < cart.length; i++) {
      if (cart[i].id == id) {
        toast.success(`Remove item ${cart[i].title} success!`, {
          theme: "colored",
        });
        cart.splice(i, 1);
      }
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    dispatch(ADD_TO_CART(cart));
  };

  return (
    <>
      <ToastContainer />
      <tr key={idx}>
        <td>
          <Image
            src={item.url}
            style={{
              width: "50px",
              height: "50px",
            }}
          />
        </td>
        <td>{item.title}</td>
        <td>{`$${item.price}`}</td>
        <td>
          <Form.Control
            type="number"
            value={item.count}
            onChange={handleChange}
            className="w-100 mx-auto"
            style={{ maxWidth: "100px" }}
          />
        </td>
        <td>
          <FiTrash2
            role="button"
            className="text-danger"
            onClick={() => handleRemove(item.id)}
          />
        </td>
      </tr>
    </>
  );
}

export default Listitems;
