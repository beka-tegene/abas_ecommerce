import React from "react";
import style from "./Layout.module.css";
import { Link } from "react-router-dom";
import { BiSearchAlt2, BiUser, BiCartDownload } from "react-icons/bi";
const Layout = () => {
  return (
    <div className={style.container}>
      <div className={style.logo}>
        <h1>ABAS</h1>
      </div>
      <div className={style.right}>
        <div className={style.search}>
          <i>
            <BiSearchAlt2 />
          </i>
          <input
            type="search"
            placeholder="Search Essential , Accessors and more ..."
          />
        </div>
        <Link to={"/login"}>
          <i>
            <BiUser />
          </i>
          Sign In/Sign Up
        </Link>
        <hr className={style.hr} />
        <div className={style.cart}>
          <i>
            <BiCartDownload />
          </i>
          Cart
        </div>
      </div>
    </div>
  );
};

export default Layout;
