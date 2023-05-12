import React from "react";
import style from "./Hero.module.css";
import vector from "../../../img/Vector.svg";
import vector1 from "../../../img/Group.svg";
import vector2 from "../../../img/Vector (2).svg";
import vector3 from "../../../img/cil_balance-scale.svg";
const DUMMY_CARD = [
  {
    image: vector,
    paragraph:
      "Lorem ipsum dolor, sit amet consectetur adip",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velquidem doloribus expedita amet,",
  },
  {
    image: vector1,
    paragraph:
      "Lorem ipsum dolor, sit amet consectetur adip",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velquidem doloribus expedita amet,",
  },
  {
    image: vector2,
    paragraph:
      "Lorem ipsum dolor, sit amet consectetur adip.",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velquidem doloribus expedita amet,",
  },
  {
    image: vector3,
    paragraph:
      "Lorem ipsum dolor, sit amet consectetur adip ",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velquidem doloribus expedita amet,",
  },
];
const Middle = () => {
  return (
    <div className={style["middle-container"]} id='about'>
      <div className={style["middle"]}>
        <h3>This is the platform you need choose</h3>
        <p>
          lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem{" "}
          lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem{" "}
          lorem{" "}
        </p>
        <div className={style["middle-cards"]}>
          {DUMMY_CARD.map((item, index) => (
            <div className={style["middle-card"]} key={index}>
              <img src={item.image} alt="logo" />
              <h4>{item.paragraph}</h4>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Middle;
