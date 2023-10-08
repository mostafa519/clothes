import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "./brandInHome.css";
import { FaArrowRight } from "react-icons/fa";
import Instance from "../../../instanceAxios/instance";
import Loding from "../../../pages/loding/Loding";
import { Link } from "react-router-dom";
const BrandInHome = () => {
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
        breakpoint: 600,
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
  const [products, setProducts] = useState([]);
  useEffect(() => {
    Instance.get(
      "/brands?latitude=37.4219983&longitude=-122.084&pagination=true&page=1"
    )
      .then((data) => setProducts(data.data.data.data))
      .catch((err) => console.log(err));
  }, []);
  // console.log(products);
  return products.length >= 1 ? (
    <div style={{ overflow: "hidden" }} className="slider-brand mt-5">
      <div>
        <div className="d-flex justify-content-between title">
          <h2> Popular Brand </h2>
          <Link className="link-brand" to="/">
            Browse All Brands <FaArrowRight className="arrow-link" />
          </Link>
        </div>
        <Slider {...settings}>
          {products.map((product) => (
            <div className="d-flex justify-content-center" key={product.id}>
              <div className="brand">
                <div className="brand-img">
                  <Link to="/">
                    <img
                      src={product.images[0].full_url}
                      className="img-fluid"
                      alt="not found"
                    />
                  </Link>
                </div>
                <span className="brand-title">{product.name}</span>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  ) : (
    <Loding />
  );
};

export default BrandInHome;
