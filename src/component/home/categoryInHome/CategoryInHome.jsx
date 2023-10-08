import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "./categoryInHome.css";
import { FaArrowRight } from "react-icons/fa";
import Instance from "../../../instanceAxios/instance";
import Loding from "../../../pages/loding/Loding";
import { Link } from "react-router-dom";
const CategoryInHome = () => {
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
          infinite: true,
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
  const [products, setProducts] = useState([]);
  useEffect(() => {
    Instance.get(
      "/categories?latitude=37.4219983&longitude=-122.084&pagination=true&page=1"
    )
      .then((data) => setProducts(data.data.data.data))
      .catch((err) => console.log(err));
  }, []);
  // console.log(products[9].media.url);
  return products.length >= 1 ? (
    <div style={{ overflow: "hidden" }} className="slider-category mt-5">
      <div>
        <div className="d-flex justify-content-between title">
          <h2> Popular Categories </h2>
          <Link className="link-brand" to="/">
            Browse All Categories <FaArrowRight className="arrow-link" />
          </Link>
        </div>
        <Slider {...settings}>
          {products.map((product) => (
            <div key={product.id} className="wrap-slider">
              <Link to="/">
                {product.media.length >= 1 ? (
                  product.media.map((img) => (
                    <img
                      key={img.id}
                      src={img.url}
                      alt="not found"
                      className="img-fluid mb-2 category-banner"
                    />
                  ))
                ) : (
                  <img
                    src={""}
                    alt="notFound"
                    className="img-fluid mb-2 category-banner"
                  />
                )}

                <span className="category-title">{product.name}</span>
              </Link>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  ) : (
    <Loding />
  );
};

export default CategoryInHome;
