import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./slick.css";
import settings from "./settings";
import style from "../../CSS/skills.module.css";
import { useTranslation } from "react-i18next";

const Skills = () => {
  const { t } = useTranslation(["info"]);
  const skills = [
    {
      skill: "HTML",
      icon: "https://res.cloudinary.com/dhbi86hxn/image/upload/v1678151821/Projects/icons/html-5_1_iva7el.png",
    },
    {
      skill: "CSS",
      icon: "https://res.cloudinary.com/dhbi86hxn/image/upload/v1678152373/Projects/icons/css-3_2_oa9uvr.png",
    },
    {
      skill: "Javascript",
      icon: "https://res.cloudinary.com/dhbi86hxn/image/upload/v1678152117/Projects/icons/js_o6nyki.png",
    },
    {
      skill: "React JS",
      icon: "https://res.cloudinary.com/dhbi86hxn/image/upload/v1678152076/Projects/icons/fisica_1_wexe1t.png",
    },
    {
      skill: "Node JS",
      icon: "https://res.cloudinary.com/dhbi86hxn/image/upload/v1678151745/Projects/icons/node_ucljkh.png",
    },
    {
      skill: "Redux",
      icon: "https://res.cloudinary.com/dhbi86hxn/image/upload/v1678151735/Projects/icons/redux_sd5vlv.png",
    },
  ];

  return (
    <div className={style.container}>
      <h2 className={style.section}>
        {t("tecno")}
        <span className={style.title}> Skills </span>
      </h2>
      <div className={style.icons}>
        <Slider {...settings}>
          {skills.map((skill, index) => (
            <div className={style.img} key={index}>
              <img src={skill.icon} alt="" />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Skills;
