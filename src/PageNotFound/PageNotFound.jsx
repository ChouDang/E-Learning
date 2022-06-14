import React from "react";
import { Link } from "react-router-dom";
import "./PageNotFound.scss"
export default function PageNotFound() {

  return (
    <div className="PageNotFound-conten">
      <img style={{ width: 500 }} src="/img/pagenotfound.png" />
      <p>
        Trang này không tìm thấy! Vui lòng trở lại <Link to="/">Trang chủ</Link>
      </p>
    </div>
  );
}
