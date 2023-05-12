import React from "react";
import style from "./Hero.module.css";
import brand from "../../../image/image 2.svg";
import brand2 from "../../../image/as 1.svg";
import { MdNavigateBefore, MdNavigateNext } from "react-icons/md";
const Hero = () => {
  return (
    <div className={style.container}>
      <div className={style.advertisement}>
        <div className={style.before}>
          <MdNavigateBefore />
        </div>
        <div className={style.text}>
          <h3>Best &nbsp; Deal &nbsp;Online&nbsp; on &nbsp;smart&nbsp; TV</h3>
          <h1>
            SMART 32<span>inch</span> TV
          </h1>
          <h3>UP to 80% OFF</h3>
        </div>
        <div className={style.photo}>
          {/* <img src={brand} alt="brand" /> */}
          <img src={brand2} alt="brand" />
        </div>
        <div className={style.next}>
          <MdNavigateNext />
        </div>
      </div>

      <div className={style.discount}>
        <div className={style.product}>
          <img src={brand} alt="brand" />
        </div>
        <div className={style.info}>
          <h2>Limited weekly Discount </h2>
          <div className={style.info2}>
            <div className={style.limited}>
              <h3>Limited Discount</h3>
              <div className={style.limit}>
                <span>1500</span> <span>1300</span>
              </div>
            </div>
            <div className={style.date}>
              <div className={style.days}>
                <h4>03</h4>
                <span>Days</span>
              </div>
              <div className={style.days}>
                <h4>04</h4>
                <span>Hours</span>
              </div>
              <div className={style.days}>
                <h4>15</h4>
                <span>Minutes</span>
              </div>
              <div className={style.days}>
                <h4>05</h4>
                <span>Seconds</span>
              </div>
            </div>
          </div>
          <h5>Sales close at 8:30PM GMT Time</h5>
        </div>
      </div>
    </div>
  );
};

export default Hero;
