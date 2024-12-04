import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import ProductList from "./components/ProductList";
import Checkout from "./components/Checkout";
import Cart from "./components/Cart";
import About from "./components/About";
import ShopIntroduction from "./components/ShopIntroduction"; // Import trang giới thiệu shop
import "./App.css"; // Liên kết tệp CSS vào đây

const App = () => {
  const [cart, setCart] = useState([]);
  const [products] = useState([
    {
      id: 1,
      name: "cooffe sua",
      price: 100000,
      image:
        "https://i.pinimg.com/236x/f1/4e/70/f14e7007806beed9f34ff9cf733e5e52.jpg",
    },
    {
      id: 2,
      name: "cooffe den",
      price: 3000000,
      image:
        "https://th.bing.com/th/id/OIP.xJTSyfvyE1nVPg5J34UdpQHaFj?w=235&h=180&c=7&r=0&o=5&pid=1.7",
    },
    {
      id: 3,
      name: "cooffe wappaper",
      price: 1500000,
      image:
        "https://th.bing.com/th/id/OIP.LCgtCfPTImuxMj0nnTkncgHaEo?w=249&h=180&c=7&r=0&o=5&pid=1.7",
    },
    {
      id: 4,
      name: "cooffe vani",
      price: 1800000,
      image:
        "https://th.bing.com/th/id/OIP._1BYBF68Eph6i2bEHCjkygHaHY?w=174&h=180&c=7&r=0&o=5&pid=1.7",
    },
    {
      id: 5,
      name: "cooffe muoi",
      price: 1200000,
      image:
        "https://th.bing.com/th/id/OIP.PTZNjGiC1FC06FxVFXalKwHaFj?w=213&h=180&c=7&r=0&o=5&pid=1.7",
    },
    {
      id: 6,
      name: "coofee fin",
      price: 1000000,
      image:
        "https://th.bing.com/th/id/OIP.LEq7b6nywtr7fJ8zNPKycQHaE8?w=286&h=191&c=7&r=0&o=5&pid=1.7",
    },
    {
      id: 8,
      name: "banh flan",
      price: 1000000,
      image:
        "https://i.pinimg.com/236x/34/2e/b7/342eb74ca144e81e0ded1fa7ac1c5798.jpg",
    },
    {
      id: 9,
      name: "banh gato",
      price: 1000000,
      image:
        "https://i.pinimg.com/736x/30/85/27/308527a2f61d82f17a89d77f243f9871.jpg",
    },
    {
      id: 10,
      name: "cooffe trung",
      price: 1000000,
      image:
        "https://i.pinimg.com/736x/20/7d/8d/207d8d4217705971f93ea8b43bc97800.jpg",
    },
    {
      id: 11,
      name: "banh cooffe",
      price: 1000000,
      image:
        "https://i.pinimg.com/736x/a7/8c/ec/a78cec669d7cc2a3349fbf097a7c7309.jpg",
    },
  ]);

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  const removeFromCart = (productToRemove) => {
    setCart((prevCart) =>
      prevCart.filter((product) => product.id !== productToRemove.id)
    );
  };

  return (
    <Router>
      <div className="app-container">
        <nav>
          <Link to="/">Shop</Link> | {/* Đổi từ "Trang chủ" thành "Shop" */}
          <Link to="/cart">Giỏ Hàng</Link> |
          <Link to="/checkout">Thanh Toán</Link> |
          <Link to="/about">Giới thiệu</Link> | {/* Giới thiệu về shop */}
          <Link to="/shop-introduction">Khám Phá Shop</Link>{" "}
          {/* Liên kết mới cho Khám Phá Shop */}
        </nav>

        <Routes>
          <Route
            path="/"
            element={<ProductList products={products} addToCart={addToCart} />}
          />
          <Route
            path="/cart"
            element={<Cart cartItems={cart} removeFromCart={removeFromCart} />}
          />
          <Route path="/checkout" element={<Checkout cartItems={cart} />} />
          <Route path="/about" element={<About />} />
          <Route
            path="/shop-introduction"
            element={<ShopIntroduction />}
          />{" "}
          {/* Thêm route cho giới thiệu shop */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
