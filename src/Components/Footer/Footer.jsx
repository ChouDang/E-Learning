import React from 'react'
import "./footer.scss"
const Footer = () => {
  return (
    <div className="footer container">
      <div className="upperDiv">
        <div className="linksContainer">
          <div className="linksDiv linksDiv1">
            <p>Udemy cho Doanh nghiệp</p>
            <p>Dạy trên Udemy</p>
            <p>Tải ứng dụng</p>
            <p>Thông tin</p>
            <p>Liên hệ</p>
          </div>
          <div className="linksDiv linksDiv2">
            <p>Nghề nghiệp</p>
            <p>Blog</p>
            <p>Hỗ trợ</p>
            <p>Chi nhánh</p>
            <p> </p>
          </div>
          <div className="linksDiv linksDiv3">
            <p>Điều kiện</p>
            <p>Chính sách quyền riêng tư</p>
            <p>Sơ đồ trang web</p>
            <p>Các khóa học nổi bật</p>
            <p> </p>
          </div>
        </div>
        {/* <div className="linksDiv linksDiv4"></div> */}
      </div>
      <div className="lowerDiv">
        <img src="..//logoTNT.png" className="udemyLogo" alt="logo"></img>
        <div className="copyrightDiv">
          <p>© 2022 Udemy, Inc.</p>
        </div>
      </div>
    </div>
  )
}

export default Footer