import React from "react";
import style from "../CSS/resume.module.css";
import { useTranslation } from "react-i18next";

const Resume = ({ isOpen, setIsOpen, setId }) => {
  const { t } = useTranslation(["info"]);

  const experience = [
      {
      id: 1,
      company: "MirrorGains",
      year: "date",
      work: "Frontend Developer",
    },
    {
      id: 2,
      company: "Eos Technology",
      year: "date",
      work: "Frontend Developer",
    },
    {
      id: 3,
      company: "Buses Armenia S.A",
      year: "date2",
      work: "Frontend Developer",
    }
  ];

  const education = [
    {
      certificate:
        "tecnologist",
      year: "2020 - 2022",
      university: "SENA",
    },
    {
      certificate: "tech",
      year: "2019 - 2020",
      university: "SENA",
    }
  ];

  return (
    <div className={style.container} id="resume">
      <h2 className={style.section}>
        {t('myResume')}
        <span className={style.title}> Resume </span>
      </h2>
      <div className={style.cardsC}>
        <div className={style.cards}>
          <h2> {t('experience')}</h2>
          {experience.map((expe, index) => (
            <div key={index}>
              <img
                src="https://res.cloudinary.com/dhbi86hxn/image/upload/v1677974346/Projects/icons/flecha_jw9v6e.png"
                alt=""
                className={style.img}
              />
              <div className={style.info}>
                <h4>{expe.company}</h4>
                <p>{t(expe.year)}</p>
                <p>{expe.work}</p>
                <button
                  onClick={() => {
                    setIsOpen(!isOpen), setId(expe.id);
                  }}
                >
                  {t("btnTask")}
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className={style.cards}>
          <h2>{t('education')}</h2>
          {education.map((edu, index) => (
            <div key={index}>
              <img
                src="https://res.cloudinary.com/dhbi86hxn/image/upload/v1677974346/Projects/icons/flecha_jw9v6e.png"
                alt=""
                className={style.img}
              />
              <div className={style.info}>
                <h4>{t(edu.certificate)}</h4>
                <p>{edu.year}</p>
                <p>{edu.university}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Resume;
