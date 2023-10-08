import React, { useContext } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./header.css";
import { Link } from "react-router-dom";
import logo from "../../images/LABSNY3.png";
import { useEffect } from "react";
import { useState } from "react";

import { User } from "../../context/context";
const Header = () => {
  let Auth = useContext(User);
  let token_Api = localStorage.getItem("labsnyToken");
  let userName = localStorage.getItem("labsnyName");
  const [token, setToken] = useState("");
  const handleLogout = () => {
    localStorage.removeItem("labsnyToken");
    setToken(null);
    Auth.setAuth("");
  };
  useEffect(() => {
    setToken(token_Api);
  }, []);
  useEffect(() => {
    setToken(token_Api);
  }, [token, Auth.auth]);
  return (
    <Container className="py-4 header">
      <Row className=" align-items-center">
        <Col className="col-6 col-lg-3">
          <img src={logo} alt="" className="w-75" />
        </Col>
        <Col className="d-none  d-lg-block col-lg-6">
          <input
            type="text"
            className="form-control input-search"
            placeholder="I am looking for....."
          />
        </Col>
        <Col className="col-6 col-lg-3  ">
          <div className="d-flex  justify-content-between align-items-center  ms-auto icons ">
            <div>
              <img
                src="https://yoori.spagreen.net/public/images/others/wishlist.svg"
                alt=""
                className="header-icon"
              />
            </div>
            <div>
              <img
                src="https://yoori.spagreen.net/public/images/others/bag.svg"
                alt=""
                className="header-icon"
              />
            </div>
            <div>
              <img
                src="https://yoori.spagreen.net/public/images/others/phone.svg"
                alt=""
                className="header-icon"
              />
            </div>
            {token === null ? (
              <div>
                <Link className="m-0 d-block login" to={"/login"}>
                  Sign in
                </Link>
                <Link className="m-0 d-block register " to={"/register"}>
                  Register
                </Link>
              </div>
            ) : (
              <div>
                <p className="p-0 mb-0">Hi {userName} </p>
                <button
                  onClick={() => handleLogout()}
                  className="btn p-0 d-block"
                >
                  Log Out
                </button>
              </div>
            )}
          </div>
        </Col>
      </Row>
      <div className=" d-lg-none mt-4">
        <input
          type="text"
          className="form-control input-search"
          placeholder="I am looking for....."
        />
      </div>
    </Container>
  );
};

export default Header;
