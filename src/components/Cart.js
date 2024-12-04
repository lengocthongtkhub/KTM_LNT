import React from "react";
import { useNavigate } from "react-router-dom";

const Cart = ({ cartItems, removeFromCart }) => {
  const navigate = useNavigate(); // Hook dùng để chuyển hướng

  const handleCheckout = () => {
    // Khi nhấn vào thanh toán, chuyển sang trang thanh toán
    navigate("/checkout");
  };

  const total = cartItems.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="cart-container">
      <h2>Giỏ Hàng</h2>
      {cartItems.length === 0 ? (
        <p>Giỏ hàng của bạn hiện tại không có sản phẩm nào.</p>
      ) : (
        <>
          <ul>
            {cartItems.map((item, index) => (
              <li key={index} className="cart-item">
                <img src={item.image} alt={item.name} width="50" />
                <div>
                  <p>{item.name}</p>
                  <p>{item.price} VND</p>
                </div>
                <button onClick={() => removeFromCart(item)}>Xóa</button>
              </li>
            ))}
          </ul>
          <div className="cart-total">
            <p>Tổng tiền: {total} VND</p>
            <button onClick={handleCheckout}>Thanh toán</button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
