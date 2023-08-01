import React, { useState, useContext } from "react";
import { Link, NavLink, useNavigate, useLocation } from "react-router-dom";
import { Button, Container, Form } from "react-bootstrap";
import { FiSearch } from "react-icons/fi";
import { DataContext } from "../../App";

type Props = {};

function Search({}: Props) {
  const { data } = useContext(DataContext);
  const navigate = useNavigate();
  const location = useLocation();

  const [search, setSearch] = useState<string | null>();

  const searchNavigate = (data: any) => {
    return data.filter((item: any) =>
      item.title.toLowerCase().includes(search)
    );
  };

  //กดปุ่มค้นหา
  const searchSubmit = (e: any) => {
    e.preventDefault();
    const result = search?.toLowerCase();
    if (typeof search == "undefined" || search?.length == 0) {
      return navigate(location);
    }
    switch (true) {
      case result == "product":
        navigate("/shop");
        break;
      case result == "cart":
        navigate("/cart");
        break;
      case result == "apple":
        navigate("/product-detail/0");
        break;
      case result == "mung bean":
        navigate("/product-detail/1");
        break;
      case result == "onion":
        navigate("/product-detail/3");
        break;
      case result == "cabbage":
        navigate("/product-detail/4");
        break;
      case result == "banana":
        navigate("/product-detail/5");
        break;
      case result == "broccoli":
        navigate("/product-detail/7");
        break;
      case result == "corn":
        navigate("/product-detail/8");
        break;
      case result == "tomato":
        navigate("/product-detail/11");
        break;
      default:
        navigate("*");
    }
  };

  //กดเลือก data
  const selectChoice = (choice: any, id: any) => {
    setSearch(choice);
    navigate(`/product-detail/${id}`);
  };

  return (
    <div className="search position-relative">
      <Form.Group className="position-relative me-2">
        <Form.Control
          type="search"
          placeholder="Search"
          className="rounded-pill"
          onChange={(e) => setSearch(e.target.value)}
          value={search ? search : ""}
        />
        <Button
          className="rounded-circle position-absolute end-0 top-0 btn-custom-secondary"
          onClick={searchSubmit}
        >
          <FiSearch className="text-white" />
        </Button>
      </Form.Group>

      <ul className="position-absolute start-0 w-100 text-custom-secondary bg-white rounded-4">
        {search
          ? searchNavigate(data).map((item: any, idx: any) => (
              <li
                className="py-2"
                key={idx}
                onClick={() => selectChoice(item.title,item.id)}
              >
                {item.title}
              </li>
            ))
          : ""}
      </ul>
    </div>
  );
}

export default Search;
