import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./footer.css";
import logo from "../../images/LABSNY3.png";
const Footer = () => {
  return (
    <Container fluid className="footer">
      <Container className="pt-5">
        <div className="footer-logo">
          <img src={logo} alt="" className="" style={{ width: "200px" }} />
        </div>
        <Row>
          <Col className="col-6 col-md-4">
            <div className="card-footer">
              <h3>Seller Options</h3>
              <ul className="global-list">
                <li>Lorem, ipsum dolor.</li>
                <li>Lorem, ipsum dolor.</li>
                <li>Lorem, ipsum dolor.</li>
                <li>Lorem, ipsum dolor.</li>
              </ul>
            </div>
          </Col>
          <Col className="col-6 col-md-4">
            <div className="card-footer">
              <h3>My Account</h3>
              <ul className="global-list">
                <li>Lorem, ipsum dolor.</li>
                <li>Lorem, ipsum dolor.</li>
                <li>Lorem, ipsum dolor.</li>
                <li>Lorem, ipsum dolor.</li>
              </ul>
            </div>
          </Col>
          <Col className="col-6 col-md-4">
            <div className="card-footer">
              <h3>Contact Us</h3>
              <ul className="global-list">
                <li>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Dicta, optio.
                </li>
                <li>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Dicta, optio.
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Footer;
