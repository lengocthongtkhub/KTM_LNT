// src/components/Navbar.js
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <Link to="/">Shop</Link> | {/* Đổi từ "Trang chủ" thành "Shop" */}
      <Link to="/cart">Giỏ hàng</Link> |<Link to="/checkout">Thanh toán</Link> |
      <Link to="/about">Giới thiệu</Link> {/* Thêm liên kết đến Giới thiệu */}
    </nav>
  );
};

export default Navbar;
