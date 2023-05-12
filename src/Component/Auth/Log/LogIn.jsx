
import React, { useState } from "react";
import style from "./LogIn.module.css";
import logo from "../../../image/Group 7029 1.svg";
import { Link } from "react-router-dom";
import Loading from "../../../Page/Loading";
const LogIn = () => {
  const [emailHandle, setEmailHandle] = useState("");
  const [passwordHandle, setPasswordHandle] = useState("");
  const [emailValid, setEmailValid] = useState();
  const [passwordValid, setPasswordValid] = useState();
  const [formValid, setFormValid] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const ValidationEmailHandler = () => {
    setEmailValid(emailHandle.includes("@") && emailHandle.includes("."));
  };
  const ValidationPasswordHandler = () => {
    setPasswordValid(passwordHandle.trim().length >= 8);
  };
  const submitHandler = (e) => {
    e.PreventDefault();
    setIsLoading(false);
    console.log(emailHandle, passwordHandle);
  };
  return (
    <div className={style.container}>
      <div className={style.login}>
        <div className={style.logo}>
          <img src={logo} alt="logo" />
        </div>
        <div className={style.form}>
          <h1>Remittance</h1>
          <form onSubmit={submitHandler}>
            <h2>Login</h2>
            <div
              className={`${style.formControl} ${
                emailValid === false ? style.invalid : ""
              }`}
            >
              <label htmlFor="">E-mail</label>
              <input
                type="email"
                value={emailHandle}
                onChange={(e) => {
                  setEmailHandle(e.target.value);
                  setFormValid(
                    emailHandle.includes("@") &&
                      emailHandle.includes(".") &&
                      passwordHandle.trim().length >= 8
                  );
                }}
                onBlur={ValidationEmailHandler}
              />
            </div>
            <div
              className={`${style.formControl} ${
                passwordValid === false ? style.invalid : ""
              }`}
            >
              <label htmlFor="">Password</label>
              <input
                type="password"
                value={passwordHandle}
                onChange={(e) => {
                  setPasswordHandle(e.target.value);
                  setFormValid(
                    emailHandle.includes("@") &&
                      emailHandle.includes(".") &&
                      passwordHandle.trim().length >= 8
                  );
                }}
                onBlur={ValidationPasswordHandler}
              />
            </div>
            <div className={style.forget}>
              <Link to={"/forget"}>forget password?</Link>
            </div>
            <div className={style.btn}>
              {formValid ? (
                <button className={`${style.button}`}>
                  {isLoading && "Login"} {!isLoading && <Loading />}
                </button>
              ) : (
                <button className={`${style.btn_dis}`} disabled>
                  Login
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
