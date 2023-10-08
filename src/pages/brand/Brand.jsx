import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./brand.css";
import Instance from "../../instanceAxios/instance";
import { Link, useNavigate } from "react-router-dom";

const Brand = () => {
  let [data, setData] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    Instance.get(
      "/brands?latitude=37.4219983&longitude=-122.084&pagination=true&page=1"
    )
      .then((data) => setData(data.data.data.data))
      .catch((err) => console.log(err));
  }, []);
  console.log(data);
  return (
    <Container>
      {/* <Link to="/brandView" state={{ shop: "occupation" }}></Link> */}
      <section className="brand-section">
        <div className="title">
          <h1>Brands</h1>
        </div>
        <Row className=" justify-content-center">
          {data.map((brand) => (
            <Col className="col-6 col-sm-4 col-md-3 col-lg-2" key={brand.id}>
              <div className="brand">
                <div
                  className="brand-img"
                  // onClick={() => {
                  //   navigate("/brandView", state={{ from: "occupation" }});
                  // }}
                >
                  <Link to="/brandView" state={{ shop: brand.shops }}>
                    {brand.images.map((img) => (
                      <img
                        src={img.full_url}
                        className={"img-fluid"}
                        key={img.id}
                      />
                    ))}
                  </Link>
                </div>
                <span className="brand-title">{brand.name}</span>
              </div>
            </Col>
          ))}
        </Row>
      </section>
    </Container>
  );
};

export default Brand;
