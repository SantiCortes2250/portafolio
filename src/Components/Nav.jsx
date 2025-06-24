import React, { useState, useEffect } from "react";
import logo from "../../src/Assets/img/logo.png";
import styles from "../CSS/nav.module.css";
import { useTranslation } from "react-i18next";
import { Link } from "react-scroll";
import Check from "./Check";


const Nav = () => {
  const { t, i18n } = useTranslation(["info"]);
  const [nav, setNav] = useState(false);
  const [navbarColor, setNavbarColor] = useState("transparent");


  const Nav = nav ? (
    <button className={styles.close} onClick={(e) => setNav(false)}>
      <img
        src="https://res.cloudinary.com/dhbi86hxn/image/upload/v1677967756/Projects/icons/x_qudf59.png"
        alt=""
      />
    </button>
  ) : (
    <button className={styles.open} onClick={(e) => setNav(true)}>
      <img
        src="https://res.cloudinary.com/dhbi86hxn/image/upload/v1677963005/Projects/icons/ordenar_lbzwyt.png"
        alt=""
      />
    </button>
  );

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPosition = window.pageYOffset;

      if (currentScrollPosition > 0) {

        setNavbarColor("rgba(0, 0, 0, 0.834)"); 
      } else {
     
        setNavbarColor("transparent");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className={styles.nav} style={{ backgroundColor: navbarColor}}>
       

        <div className={styles.logo}  >
        <Link to="home" spy={true} offset={0} duration={500} smooth={true}>
          <img src={logo} alt="" className={styles.img} />
        </Link>
        </div>
        <div className={styles.check}>
          <Check/>

          <div className={styles.links}>
          <nav className={styles.linksN}>
           
            <Link to="about" spy={true} offset={-50} duration={500} smooth={true}>{t("about")}</Link>
            <Link to="resume" spy={true} offset={-20} duration={500} smooth={true}>{t("resume")}</Link>
            <Link to="projects" spy={true} offset={-120} duration={500} smooth={true}>{t("projects")}</Link>
            <Link to="contact" spy={true} offset={-70} duration={500} smooth={true}>{t("contact")}</Link>
          </nav>
          {Nav}
        </div>
        </div>
      
      </div>
      <nav className={nav ? styles.navOpen : styles.navClose}>
     
            <Link to="about" spy={true} offset={50} duration={500} smooth={true}>{t("about")}</Link>
            <Link to="resume" spy={true} offset={50} duration={500} smooth={true}>{t("resume")}</Link>
            <Link to="projects" spy={true} offset={-50} duration={500} smooth={true}>{t("projects")}</Link>
            <Link to="contact" spy={true} offset={-50} duration={500} smooth={true}>{t("contact")}</Link>
      </nav>
    </>
  );
};

export default Nav;
