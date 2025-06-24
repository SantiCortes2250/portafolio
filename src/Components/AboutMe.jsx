import React from "react";
import styles from "../CSS/about.module.css";
import { useTranslation } from "react-i18next";
import { Suspense } from "react";

const AboutMe = () => {
  const { t, i18n } = useTranslation(["info"]);

  return (
   
      <div className={styles.container} id="about">
        <h2 className={styles.section}>
          {i18n.language === 'en' ? 'About me' : 'Sobre mi'}
          <span className={styles.title}> About </span>
        </h2>
        <div className={styles.about}>
          <div className={styles.img}>
            <img src="https://res.cloudinary.com/dhbi86hxn/image/upload/v1750799439/profile.jpg" alt="" />
          </div>
          <div className={styles.info}>
            <h2>{t("title")}</h2>
            <p>{t("Description")}</p>
            <hr />
            <div className={styles.dates}>
              <p>
              {t("name")}:<span>Santiago Rincon Cortes</span>
              </p>
              <p>
              {t("location")}:<span>Colombia</span>
              </p>
              <p>
              {t("phone")}:<span>+57 300-605-2291</span>
              </p>
              <p>
              {t("email")}:<span>santicortesrincon15@gmail.com</span>
              </p>
            </div>
            <a href="./cv-santiagoRincon.pdf" download>
              {" "}
              <button>{t("btnDownload")}</button>
            </a>
          </div>
        </div>
      </div>

  );
};

export default AboutMe;
