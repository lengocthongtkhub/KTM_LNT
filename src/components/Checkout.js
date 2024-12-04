import React, { useState } from "react";
import "./Checkout.css";  // Nhập tệp CSS riêng cho Checkout

const Checkout = ({ cartItems }) => {
  const [isPaid, setIsPaid] = useState(false);

  // Tính tổng tiền
  const total = cartItems.reduce((acc, item) => acc + item.price, 0);

  const handlePayment = () => {
    // Sau khi thanh toán, thay đổi trạng thái thanh toán thành công
    setIsPaid(true);
  };

  return (
    <div className="checkout-container">
      <h2>Thanh Toán</h2>
      {isPaid ? (
        <div className="success-message">
          <h3>Thanh toán thành công!</h3>
          <p>Cảm ơn bạn đã mua sắm. Đơn hàng của bạn sẽ được xử lý sớm nhất.</p>
        </div>
      ) : (
        <>
          {cartItems.length === 0 ? (
            <p>Giỏ hàng của bạn hiện tại không có sản phẩm nào.</p>
          ) : (
            <>
              <ul>
                {cartItems.map((item, index) => (
                  <li key={index} className="cart-item">
                    <img src={item.image} alt={item.name} />
                    <div>
                      <p>{item.name}</p>
                      <p>{item.price} VND</p>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="cart-total">
                <p>Tổng giá trị đơn hàng: {total} VND</p>
                <button onClick={handlePayment}>Thanh toán</button>
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default Checkout;
