import React, { useEffect, useState } from "react";
import "./shopInHome.css";
import { FaArrowRight } from "react-icons/fa";
import Instance from "../../../instanceAxios/instance";
import Slider from "react-slick";
import Rate from "../../rate/Rate";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Loding from "../../../pages/loding/Loding";

const ShopInHome = () => {
  let [data, setData] = useState([]);

  useEffect(() => {
    Instance.get(
      "/shops?latitude=37.4219983&longitude=-122.084&pagination=true&page=1"
    )
      .then((data) => setData(data.data.data.data))
      .catch((err) => console.log(err));
  }, []);
  console.log(data);
  var settings = {
    dots: true,
    infinite: false,
    speed: 200,
    slidesToShow: 6,
    slidesToScroll: 6,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
          infinite: false,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          initialSlide: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };
  return data.length >= 1 ? (
    <div style={{ overflow: "hidden" }} className="slider-shop mt-5">
      <div>
        <div className="d-flex justify-content-between title">
          <h2> Popular Shop </h2>
          <Link className="link-brand" to="/">
            Browse All Shop <FaArrowRight className="arrow-link" />
          </Link>
        </div>
        <Slider {...settings}>
          {data.map((shop) => (
            <Col className="col-6 col-lg-3  my-3" key={shop.id}>
              <Link
                to={"/shop/product"}
                state={{
                  shop_id: shop.id,
                }}
              >
                <div
                  className="card-product  position-relative "
                  style={{ height: "200px" }}
                >
                  <div className=" mb-2 d-flex justify-content-center align-items-center h-100">
                    {shop.media.map((img) => (
                      <img
                        src={img.url}
                        alt="not found"
                        style={{
                          width: "70%",
                          height: "80%",
                        }}
                        key={img.id}
                      />
                    ))}
                  </div>

                  <div className=" position-absolute product-info ">
                    <h4
                      className="fw-500 text-center mt-4 mb-0"
                      style={{ color: "white" }}
                    >
                      {shop.name}
                    </h4>
                    <Rate rate={shop.rate} />
                  </div>
                  <div className="icon position-absolute">
                    <div
                      style={{
                        width: "50px",
                        height: "50px",
                        background: "red",
                        zIndex: 5,
                        borderRadius: "50%",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      {shop.media.map((img) => (
                        <img
                          src={img.url}
                          alt=""
                          // className="img-fluid "
                          style={{
                            width: "90%",
                            height: "90%",
                            borderRadius: "50%",
                          }}
                          key={img.id}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </Link>
            </Col>
          ))}
        </Slider>
      </div>
    </div>
  ) : (
    <Loding />
  );
};

export default ShopInHome;
