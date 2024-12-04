import React from "react";
import "./about.css"; // Nhớ nhập tệp CSS vào

const About = () => {
  return (
    <div className="about-container">
      <h1>Chúc Mừng Năm Mới</h1>
      <p>
        Chúng tôi xin kính chúc quý khách hàng một năm mới An Khang – Thịnh
        Vượng. Chúc mọi người sức khỏe, hạnh phúc và thành công trong mọi công
        việc. Cảm ơn các bạn đã đồng hành cùng chúng tôi trong suốt thời gian
        qua. Chúc Tết vui vẻ và đầy ắp niềm vui!
      </p>

      <button
        className="back-to-home-btn"
        onClick={() => (window.location.href = "/")}
      >
        Quay lại trang chủ
      </button>
    </div>
  );
};

export default About;
