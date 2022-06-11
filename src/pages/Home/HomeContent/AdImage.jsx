import React from 'react'
import { Button } from 'antd';
import { Carousel } from 'antd';
import "./styles/AdImage.scss"
import { Fragment } from 'react';
import Slider from "react-slick";
import { LeftCircleOutlined, RightCircleOutlined } from '@ant-design/icons';


const contentStyle = {
  height: '400px',
  textAlign: 'center',
};
const styleMain = {
  autoplaySpeed: 5000,
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1

}

export const AdImage = () => {
  return (
    <Fragment>
      <Slider autoplay {...styleMain}>

        <div className="adImange-content">

          <div style={contentStyle} className="adImange-content1">

            <div className="adImange-content1-offerDiv">
              <h1>NÂNG CAO KỸ NĂNG VỚI NHỮNG KHOÁ HỌC TỐT NHẤT!</h1>
              <p>Bước đầu đến với chuyến hành trình thành công.</p>
            </div>

          </div>
        </div>

        <div className="adImange-content2">
          <div style={contentStyle} className="adImange-content2-bg">

            <div className="adImange-content2-offerDiv">
              <h1>KHAI PHÁ SỨC MẠNH CỦA BẠN</h1>
              <p>Udemy Business được tin cậy bởi 10.5K + công ty trên khắp thế giới. Tìm hiểu những gì chúng tôi có thể làm cho bạn.</p>
              <div className="adImange-content2-BarDiv">
                <Button className="adImange-content2-BarDiv-button">Sẵn sàng chưa?</Button>
              </div>
            </div>

          </div>
        </div>
      </Slider>




    </Fragment>
  )
}
