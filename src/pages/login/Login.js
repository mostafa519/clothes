import React, { useContext, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./login.css";
import axios, { Axios } from "axios";
import { User } from "../../context/context";
import { CiWarning } from "react-icons/ci";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { TbLockSquareRoundedFilled } from "react-icons/tb";
import "./login.css";
import { FaExclamation } from "react-icons/fa";
import { BsExclamationLg } from "react-icons/bs";
function Login() {
  const navigate = useNavigate();
  const userNow = useContext(User);
  const [error, setErorr] = useState(false);
  // console.log(userNow);
  const [input, setinput] = useState({
    name: "",
    email: "",
    password: "",
    isEmailValid: true,
    isPasswordValid: true,
  });
  const emailRegex =
    /\b[A-Za-z0-9._%+-]{3,}@[A-Za-z0-9.-]{2,}\.[A-Z|a-z]{2,}\b/;
  const passwordRegex = /[0-9a-zA-Z]{6,}$/;

  const validateEmail = (email) => {
    const isValid = emailRegex.test(email);
    setinput((prevState) => ({
      ...prevState,
      isEmailValid: isValid,
    }));
    setErorr(false);
  };

  const validatePassword = (password) => {
    const isValid = passwordRegex.test(password);
    setinput((prevState) => ({
      ...prevState,
      isPasswordValid: isValid,
    }));
    setErorr(false);
  };
  // console.log(input.email);
  const handelsubmit = (e) => {
    e.preventDefault();
    const data = {
      email: input.email,
      password: input.password,
    };
    axios
      .post("api/login", data, {
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
        // setinput(...input, { email: "" });
      })
      .catch((error) => {
        console.error(`Error: ${error}`);
        setErorr(true);
      });
  };
  // let token = localStorage.getItem("token");

  // console.log(token);
  return (
    <div className=" d-flex align-items-center  login my-5">
      <div className=" d-flex justify-align-content-around align-items-center ">
        <div className="forma">
          <div>
            <div className="card-body p-5 ">
              <h2 className="text-uppercase  text-center mb-2">sign in</h2>
              <p className="text-center fw-500">Sign in to continue shopping</p>
              <form noValidate onSubmit={handelsubmit}>
                <div className="form-outline mb-4 position-relative mt-4">
                  <input
                    name="email"
                    value={input.email}
                    placeholder="Please Enter Your Email"
                    onChange={(e) => {
                      setinput({
                        ...input,
                        [e.target.name]: e.target.value,
                      });
                      validateEmail(e.target.value);
                    }}
                    type="text"
                    id="form1example1cg"
                    className={`form-control  ${
                      input.isEmailValid ? "" : "is-invalid"
                    }`}
                  />
                  <MdEmail className="icon_email" />
                  {!input.isEmailValid && (
                    <div className="invalid-feedback">
                      {" "}
                      <BsExclamationLg />
                      Invalid email format
                    </div>
                  )}
                </div>
                <div className="form-outline position-relative">
                  <input
                    name="password"
                    placeholder="Please Enter Your Password"
                    value={input.password}
                    onChange={(e) => {
                      setinput({
                        ...input,
                        [e.target.name]: e.target.value,
                      });
                      validatePassword(e.target.value);
                    }}
                    type="password"
                    id="form3example1cg"
                    className={`input_password form-control ${
                      input.isPasswordValid ? "" : "is-invalid"
                    }`}
                  />

                  <TbLockSquareRoundedFilled className="icon_password" />
                  {!input.isPasswordValid && (
                    <div className="invalid-feedback">
                      <BsExclamationLg /> The password must be at least 6
                      letters or a number
                    </div>
                  )}
                </div>
                {error === true && (
                  <div className="mb-2 mainColor">
                    <span>
                      <CiWarning className="fs-5 mb-1" /> The password or email
                      is incorrect
                    </span>
                  </div>
                )}
                <div className="d-flex justify-content-center mt-4">
                  <button
                    type="submit"
                    className="btn btn-dark btn-block btn-lg gradient-custom-4 "
                  >
                    sign in
                  </button>
                </div>
                <p className="text-center  mt-4 mb-0">
                  dont Have account ?
                  <Link to="/register" className="fw-bold text-body">
                    <u className="fw-bold "> register here</u>
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
