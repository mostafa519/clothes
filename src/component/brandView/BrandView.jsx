import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link, useLocation, useParams } from "react-router-dom";
import Accordion from "react-bootstrap/Accordion";
import FilterByCategory from "../filter/filterByCategory/FilterByCategory";
import FilterByBrand from "../filter/filterByBrand/FilterByBrand";
import FilterByPrice from "../filter/filterByPrice/FilterByPrice";
import FilterByShop from "../filter/filterByShop/FilterByShop";
import Instance from "../../instanceAxios/instance";
import Rate from "../rate/Rate";
const BrandView = (props) => {
  const { state } = useLocation();
  console.log(state.shop);

  let [data, setData] = useState([]);

  useEffect(() => {
    setData(state.shop);
  }, [state.shop]);
  console.log(data);
  return (
    <Container>
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
    </Container>
  );
};

export default BrandView;
