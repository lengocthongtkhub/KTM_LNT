import React from "react";
import { Link } from "react-router-dom";
import "./ShopIntroduction.css"; // Import the updated CSS for styling

const ShopIntroduction = () => {
  return (
    <div className="shop-introduction">
      <h2>Chào Mừng Đến Với Cửa Hàng Cooffe gato!</h2>
      <p>
        "Chào mừng bạn đến với [Tên website], nơi mang đến những ly cà phê tuyệt
        vời nhất cho mọi tín đồ yêu thích hương vị đậm đà. Chúng tôi cung cấp đa
        dạng các loại cà phê nguyên chất, từ những hạt cà phê rang xay thủ công
        đến các sản phẩm pha sẵn tiện lợi, được chọn lọc kỹ lưỡng từ những vùng
        trồng cà phê nổi tiếng. Với cam kết về chất lượng và hương vị tuyệt hảo,
        [Tên website] không chỉ là nơi mua cà phê mà còn là trải nghiệm khám phá
        thế giới cà phê độc đáo. Hãy để chúng tôi mang đến cho bạn những phút
        giây thưởng thức cà phê tuyệt vời ngay tại nhà!" Đoạn văn này nhấn mạnh
        vào chất lượng sản phẩm và sự đa dạng của các loại cà phê mà website
        cung cấp, đồng thời tạo ra cảm giác gần gũi và chuyên nghiệp cho khách
        hàng.
      </p>

      <div className="cta-button">
        <Link to="/" className="cta-link">
          Khám Phá Cửa Hàng
        </Link>
      </div>
      {/* Hình ảnh với lớp phủ văn bản */}
      <div className="shop-image-container">
        <img
          src="https://i.pinimg.com/236x/f9/35/9d/f9359d2f28690c00bf6e5ab3bd724500.jpg"
          alt="Shop Interior"
          className="shop-image"
        />
        <div className="overlay">
          <p>Khám Phá Bộ Sưu Tập Độc Quyền Của Chúng Tôi</p>
        </div>
      </div>
    </div>
  );
};

export default ShopIntroduction;
