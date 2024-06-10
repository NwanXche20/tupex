import React from "react";
import { FaImages, FaCrosshairs, FaCamera } from "react-icons/fa6";

const itemsList = [
  {
    icon: <FaImages />,
    title: "professional editing",
    desc: "Your creativity our inspiration. Whatever your want",
  },
  {
    icon: <FaCrosshairs />,
    title: "Long hour shoots",
    desc: "Your creativity our inspiration. Whatever your want",
  },
  {
    icon: <FaCamera />,
    title: "extensive equipments",
    desc: "Your creativity our inspiration. Whatever your want",
  },
];

const ItemContainer = ({ item }) => {
  return (
    <div className="whyUs-ItemContainer">
      <div className="whyUs-icon">{item.icon}</div>

      <div className="whyUs-text">
        <h6>{item.title}</h6>
        <p>{item.desc}</p>
      </div>
    </div>
  );
};

const WhyUsSection = () => {
  return (
    <div className="whyUs-container">
      <h2>Why choose us</h2>

      <div className="whyUs-flex">
        {itemsList.map((item, index) => {
          return <ItemContainer key={index} item={item} />;
        })}
      </div>
    </div>
  );
};

export default WhyUsSection;
