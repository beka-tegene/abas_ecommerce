import React from "react";
import style from "./Popular.module.css";
import { Link } from "react-router-dom";
import product1 from "../../../image/61F4szMc-gL.svg";
import product3 from "../../../image/61NI293PMXL.svg";
import product4 from "../../../image/71L2wXXLthL.svg";
import product5 from "../../../image/71vZypjNkPS 1.svg";
import product6 from "../../../image/817aVWYpblL.svg";
import product7 from "../../../image/81I1sw-FBgL.svg";
import product8 from "../../../image/STOVE.svg";
import product9 from "../../../image/STO.svg";
import { BsFillStarFill, BsFillCartCheckFill } from "react-icons/bs";

const DUMMY_DATA = [

  {
    product: product1,
    name: "LG 39 INCH TELEVISION",
    rate: "4 / 5",
    amount: 48369,
    review: 132,
  },
  {
    product: product3,
    name: "LG 39 INCH TELEVISION",
    rate: "4 / 5",
    amount: 48369,
    review: 132,
  },
  {
    product: product4,
    name: "LG 39 INCH TELEVISION",
    rate: "4 / 5",
    amount: 48369,
    review: 132,
  },
  {
    product: product5,
    name: "LG 39 INCH TELEVISION",
    rate: "4 / 5",
    amount: 48369,
    review: 132,
  },
  {
    product: product8,
    name: "LG 39 INCH TELEVISION",
    rate: "4 / 5",
    amount: 48369,
    review: 132,
  },
  {
    product: product9,
    name: "LG 39 INCH TELEVISION",
    rate: "4 / 5",
    amount: 48369,
    review: 132,
  },
  {
    product: product6,
    name: "LG 39 INCH TELEVISION",
    rate: "4 / 5",
    amount: 48369,
    review: 132,
  },
  {
    product: product7,
    name: "LG 39 INCH TELEVISION",
    rate: "4 / 5",
    amount: 48369,
    review: 132,
  },
];
const Popular = () => {
  return (
    <div className={style.container}>
      <h1>POPULAR PRODUCT</h1>
      <div className={style.data}>
        <h3>Filter by Interest</h3>
        <div className={style.filter}>
          <button>ALL</button>
          <button>OVEN</button>
          <button>STOVE</button>
          <button>REFRIGERATOR</button>
          <button>TELEVISION</button>
          <button>ACCESSORIES</button>
        </div>
      </div>
      <hr />
      <div className={style.title}>
        <h4>ALL PRODUCT</h4>
        <Link>View All</Link>
      </div>
      <div className={style.cards}>
        {DUMMY_DATA.map((item, index) => (
          <div className={style.card} key={index}>
            <div className={style.image}>
              <img src={item.product} alt="product" />
            </div>
            <div className={style.items}>
              <div className={style.detail}>
                <div className={style.info}>
                  <h4>{item.name}</h4>
                  <div className={style.review}>
                    <h5>
                      <i>
                        <BsFillStarFill />
                      </i>
                      {item.rate}
                    </h5>
                    <hr />
                    <h5>
                      {item.review} <span>Review</span>
                    </h5>
                  </div>
                </div>
                <h3>
                  {item.amount} <span>ETB</span>
                </h3>
              </div>
              <div className={style.btn}>
                <button>
                  <BsFillCartCheckFill />
                  ADD TO CART
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Popular;
