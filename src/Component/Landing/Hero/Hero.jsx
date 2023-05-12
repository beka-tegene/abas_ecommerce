import React from "react";
import style from "./Hero.module.css";
import brand from "../../../image/Group 16.svg";
import brand2 from "../../../image/as 1.svg";
const Hero = () => {
  return (
    <div className={style.container}>
      <div className={style.advertisement}>
        <div className={style.text}>
          <h3>Best Deal Online on smart TV</h3>
          <h1>
            SMART 32<span>inch</span> TV
          </h1>
          <h3>UP to 80% OFF</h3>
        </div>
        <div className={style.photo}>
          <img src={brand} alt="brand" />
          <img src={brand2} alt="brand" />
        </div>
      </div>
      <div className={style.discount}>world</div>
    </div>
  );
};

export default Hero;
