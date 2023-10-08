import React, { useContext, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./register.css";
import { Container } from "react-bootstrap";
import axios from "axios";
import { User } from "../../context/context";
import { MdEmail } from "react-icons/md";
import { TbLockSquareRoundedFilled } from "react-icons/tb";
import { FaUserAlt, FaUserPlus } from "react-icons/fa";

function Register() {
  const navigate = useNavigate();
  const userNow = useContext(User);
  const [input, setInput] = useState({
    name: "",
    email: "",
    password: "",
    isEmailValid: true,
    isPasswordValid: true,
    isNameValid: true,
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      name: input.name,
      email: input.email,
      password: input.password,
    };

    axios
      .post("api/register", data, {
        headers: {
          "Content-Type": "application/json",
          Accept: "*/*",
        },
      })
      .then((response) => {
        let token = response.data.data.api_token;
        localStorage.setItem("labsnyToken", token);
        userNow.setAuth(response.data.data.api_token);
        const userName = response.data.data.name;
        localStorage.setItem("labsnyName", userName);
        navigate("/");
      })
      .catch((error) => {
        console.error(`Error: ${error}`);
      });
  };

  const nameRegex = /[A-Za-z]{3,}/;
  const emailRegex =
    /\b[A-Za-z0-9._%+-]{3,}@[A-Za-z0-9.-]{2,}\.[A-Z|a-z]{2,}\b/;
  const passwordRegex = /[0-9a-zA-Z]{6,}$/;

  const validateName = (name) => {
    const isValid = nameRegex.test(name);
    setInput((prevState) => ({
      ...prevState,
      isNameValid: isValid,
    }));
  };

  const validateEmail = (email) => {
    const isValid = emailRegex.test(email);
    setInput((prevState) => ({
      ...prevState,
      isEmailValid: isValid,
    }));
  };

  const validatePassword = (password) => {
    const isValid = passwordRegex.test(password);
    setInput((prevState) => ({
      ...prevState,
      isPasswordValid: isValid,
    }));
  };

  return (
    <Container>
      <div className="d-flex align-items-center justify-content-center my-5 register">
        <div className="form p-5">
          <h2 className="text-uppercase text-center mb-2">sign up</h2>
          <p className="text-center fw-500">Sign up to continue shopping</p>

          <form onSubmit={handleSubmit}>
            <div className="form-outline position-relative">
              <input
                name="name"
                placeholder="First and Last Name"
                value={input.name}
                onChange={(e) => {
                  setInput({
                    ...input,
                    [e.target.name]: e.target.value,
                  });
                  validateName(e.target.value);
                }}
                type="text"
                id="form1example1cg"
                className="form-control form-control-lg"
              />

              {!input.isNameValid && (
                <div style={{ color: "red", fontSize: "12px" }}>
                  Name should be at least 3 characters long.
                </div>
              )}

              <FaUserPlus className="icon_user" />
            </div>

            <div className="form-outline mb-4 position-relative mt-4">
              <input
                name="email"
                value={input.email}
                onChange={(e) => {
                  setInput({
                    ...input,
                    [e.target.name]: e.target.value,
                  });
                  validateEmail(e.target.value);
                }}
                type="email"
                placeholder="Please Enter Your Email"
                id="form2example1cg"
                className="form-control form-control-lg"
              />
              <MdEmail className="icon_email" />
              {!input.isEmailValid && (
                <div style={{ color: "red", fontSize: "12px" }}>
                  Invalid email address.
                </div>
              )}
            </div>

            <div className="form-outline position-relative">
              <input
                name="password"
                placeholder="Please Enter Your Password"
                value={input.password}
                onChange={(e) => {
                  setInput({
                    ...input,
                    [e.target.name]: e.target.value,
                  });
                  validatePassword(e.target.value);
                }}
                type="password"
                id="form3example1cg"
                className="form-control form-control-lg"
              />
              <TbLockSquareRoundedFilled className="icon_password" />
            </div>

            {!input.isPasswordValid && (
              <div style={{ color: "red", fontSize: "12px" }}>
                Password should be at least 6 characters long{" "}
              </div>
            )}

            <div className="d-flex justify-content-center">
              <button
                type="submit"
                className="btn btn-dark btn-block btn-lg mt-2 gradient-custom-4"
              >
                SIGN UP
              </button>
            </div>
            <p className="text-center">
              Have already account?
              <Link to="/login" className="fw-bold text-body">
                <u className="text-dark"> login here</u>
              </Link>
            </p>
          </form>
        </div>
      </div>
    </Container>
  );
}

export default Register;
