import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Instance from "../../instanceAxios/instance";
import { Col, Container, Row } from "react-bootstrap";
import "./details.css";
import {
  IoIosCheckmarkCircleOutline,
  IoMdAdd,
  IoMdRemove,
  IoMdCart,
} from "react-icons/io";
import { BsChatLeftDots, BsHandbag } from "react-icons/bs";
import { TbArrowsShuffle } from "react-icons/tb";
import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaWhatsapp,
  FaArrowRight,
  FaCheck,
} from "react-icons/fa";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ItemSize from "../itemSize/itemSize";
import { FaCircleCheck } from "react-icons/fa6";
const Details = () => {
  const [product, setProduct] = useState({});
  const [quntity, setQuntity] = useState(1);
  const [clotheID, setClotheID] = useState(0);
  const [colorID, setColorID] = useState(0);
  const [quantitys, setQuantitys] = useState([]);
  const { id } = useParams();
  // console.log(id);
  useEffect(() => {
    Instance.get(`/clothes/${id}`)
      .then((data) => setProduct(data.data.data))

      .catch((err) => console.log(err));
  }, []);
  useEffect(() => {
    if (product.id !== undefined) {
      let idClothe = product.quantities[0].clothes_id;
      setClotheID(idClothe);
      let idColor = product.quantities[0].colour_id;
      setColorID(idColor);
      let prdQuantites = product.quantities.filter(
        (value, index, self) =>
          self.findIndex((item) => item.colour_id === value.colour_id) === index
      );
      setQuantitys(prdQuantites);
    }
  }, [product]);

  let increment = () => {
    setQuntity((q) => q + 1);
  };
  let decrement = () => {
    if (quntity > 1) {
      setQuntity((q) => q - 1);
    }
  };
  const handelColor = (color) => {
    // console.log(color);
    setClotheID(color.clothes_id);
    setColorID(color.colour_id);
  };
  // console.log(colorID);
  // console.log(clotheID);
  return (
    <Container className="details mt-5">
      {product.id !== undefined && (
        <Row>
          <Col className="col-12 col-lg-4">
            <div className="product-slider w-100">
              <img src={product.media[0].url} alt="" className=" w-100" />
            </div>
          </Col>
          <Col className="col-12 col-lg-8 mt-5 mt-lg-0">
            <Row>
              <Col className="col-lg-8 col-md-8 col-12">
                <div className="product-details-center">
                  <div className="product-details-header">
                    <h2 className="title text-capitalize">
                      {product.description}
                    </h2>
                    <p className="stock-in mt-5 d-flex align-items-center">
                      {" "}
                      <span className="icon">
                        {" "}
                        <IoIosCheckmarkCircleOutline />
                      </span>
                      In Stock
                    </p>
                    <div className="price">
                      <p className="discount">
                        {product.discount_price}.00 EGP
                      </p>
                      <h3 className="mainColor">{product.price}.00 EGP</h3>
                    </div>
                    <div className="wrap-color mt-2">
                      <h5>color</h5>
                      <div className="d-flex ">
                        {quantitys.map((color) => (
                          <div
                            className="color d-flex justify-content-center align-items-center"
                            key={color.id}
                            // style={{
                            //   background: color.colour.name,
                            // }}
                          >
                            <div
                              onClick={() => handelColor(color)}
                              className="color-item"
                              style={{
                                background: color.colour.name,
                              }}
                            >
                              {colorID === color.colour_id && (
                                <FaCircleCheck
                                  style={
                                    color.colour.name === "white" && {
                                      color: "red",
                                    }
                                  }
                                />
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className=" wrap-size mt-2">
                    <h5>size</h5>
                    <div className="product-details-size ">
                      {colorID > 0 && (
                        <ItemSize colorID={colorID} clotheID={clotheID} />
                      )}
                    </div>
                  </div>
                  <div className="product-details-totalPrice ">
                    <div className="count-quantity">
                      <div className="increment" onClick={() => increment()}>
                        <IoMdAdd />
                      </div>
                      <input
                        type="text"
                        className="w-100 form-control input-quntity"
                        value={quntity}
                        onChange={(e) => setQuntity(e.target.value)}
                      />
                      <div className="decrement" onClick={() => decrement()}>
                        <IoMdRemove />
                      </div>
                    </div>
                    <h3>
                      Total Price:{" "}
                      <span className="mainColor">
                        {product.price * quntity}.00 EGP
                      </span>{" "}
                    </h3>
                  </div>
                  <div className="product-details-query product-border mt-3">
                    <h3>3 Days | Estimated delivery time</h3>
                    <div className=" sg-quantity mt-3">
                      <Link className="addtocart">
                        <BsHandbag className="mb-1" /> ADD TO CART
                      </Link>
                      <Link className="buynow">
                        <IoMdCart /> BUY NOW
                      </Link>
                      <Link className="compare">
                        <TbArrowsShuffle /> Compare
                      </Link>
                    </div>
                  </div>
                  <div className="social-media-icon my-3">
                    <ul>
                      <li>
                        <FaFacebook className="facebock" />
                      </li>
                      <li>
                        <FaTwitter className="twiter" />
                      </li>
                      <li>
                        <FaLinkedin className="linkedin" />
                      </li>
                      <li>
                        <FaWhatsapp className="whatsapp" />
                      </li>
                    </ul>
                  </div>
                </div>
              </Col>
              <Col className="col-lg-4 col-md-4">
                <div className="sg-seller-product pb-sm-3 w-100">
                  <Card>
                    {product.shop.media.map((img) => (
                      <div className="img-shop position-relative" key={img.id}>
                        <Card.Img variant="top" src={img.url} />
                        <img src={img.icon} className="seller-logo" />
                      </div>
                    ))}
                    {/* <Card.Body className="d-flex justify-content-between">
                      <div>
                        <p>Products: 16</p>
                        <p>Joined: 27 Mar 2022</p>
                      </div>
                      <Link className=" store">
                        {" "}
                        VISIT STORE <FaArrowRight className="ms-2" />
                      </Link>
                    </Card.Body> */}
                  </Card>
                  <div className="chat my-3">
                    <BsChatLeftDots /> Chat With Seller
                  </div>
                  <div className="product-widget-recent-entries">
                    <h4>Recent Products</h4>
                    <ul className="global-list p-0">
                      <li className="mb-3">
                        <div className="shop">
                          <div className="thumb"></div>
                          <div className="info"></div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      )}
    </Container>
  );
};

export default Details;
