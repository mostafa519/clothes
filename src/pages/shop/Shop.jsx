import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Instance from "../../instanceAxios/instance";
import { Col, Container, Row } from "react-bootstrap";
import "./shop.css";
import Rate from "../../component/rate/Rate";
import Loding from "../loding/Loding";

const Shop = () => {
  let [data, setData] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    Instance.get(
      "/shops?latitude=37.4219983&longitude=-122.084&pagination=true&page=1"
    )
      .then((data) => setData(data.data.data.data))
      .catch((err) => console.log(err));
  }, []);
  console.log(data);
  return (
    <Container>
      {data.length >= 1 ? (
        <div className="shop-product">
          <div className="title">
            <h1>Shop</h1>
          </div>

          <Row>
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
                          alt=""
                          // className="img-fluid "
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
          </Row>
        </div>
      ) : (
        <Loding />
      )}
    </Container>
  );
};

export default Shop;
