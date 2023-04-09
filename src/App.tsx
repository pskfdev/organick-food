import React, {
  useState,
  useEffect,
  createContext,
  useLayoutEffect,
} from "react";
import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import Navigation from "../src/components/header/Navigation";
import Home from "../src/pages/client/Home";
import About from "../src/pages/client/About";
import Shop from "../src/pages/client/Shop";
import Contact from "../src/pages/client/Contact";
import Footer from "./components/footer/Footer";
import ProductDetail from "./pages/client/ProductDetail";
import Cart from "./pages/client/Cart";

export const DataContext = createContext<any>(undefined);

function App() {
  const [data, setData] = useState([]);

  const Wrapper = ({ children }:any) => {
    const location = useLocation();
    useLayoutEffect(() => {
      document.documentElement.scrollTo(0, 0);
    }, [location.pathname]);
    return children;
  };

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


  return (
    <DataContext.Provider value={{ data, setData }}>
      <Wrapper>
        <Navigation />

        <div className="main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/product-detail/:id" element={<ProductDetail />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<p>Not page</p>} />
          </Routes>
        </div>

        <Footer />
      </Wrapper>
    </DataContext.Provider>
  );
}

export default App;
