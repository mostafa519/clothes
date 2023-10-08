import React from "react";
import "./loding.css";
import { Col, Row } from "react-bootstrap";
const Loding = () => {
  return (
    <div className="main-item my-5">
      <Row>
        <Col className="col-12 col-md-6 col-lg-3 mb-2 ">
          <div className="animated-background">
            <div className="background-masker btn-divide-left"></div>
          </div>
        </Col>
        <Col className="col-12 col-md-6 col-lg-3 mb-2 ">
          <div className="animated-background">
            <div className="background-masker btn-divide-left"></div>
          </div>
        </Col>
        <Col className="col-12 col-md-6 col-lg-3 mb-2 ">
          <div className="animated-background">
            <div className="background-masker btn-divide-left"></div>
          </div>
        </Col>
        <Col className="col-12 col-md-6 col-lg-3 mb-2 ">
          <div className="animated-background">
            <div className="background-masker btn-divide-left"></div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Loding;
