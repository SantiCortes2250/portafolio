import React from "react";
import styles from "../CSS/projects.module.css";
import { useTranslation } from "react-i18next";

const Projects = () => {
  const { t } = useTranslation(["info"]);
  const projects = [
    {
      project: "Movie-Time",
      Link: "https://movie-timeee.netlify.app/",
      github: "https://github.com/SantiCortes2250/React/tree/main/movie-time",
      image:
        "https://res.cloudinary.com/dhbi86hxn/image/upload/v1682295507/Projects/moviet_pyjmwn.png",
      icon: "https://res.cloudinary.com/dhbi86hxn/image/upload/v1677637696/Projects/icons/iconMovie_y38ivq.png",
    },
    {
      project: "StailR",
      Link: "https://stailr.netlify.app/",
      github: "https://github.com/SantiCortes2250/React/tree/main/drinks",
      image:
        "https://res.cloudinary.com/dhbi86hxn/image/upload/v1682296233/Projects/bgcock_1_vvfphn.png",
      icon: "https://res.cloudinary.com/dhbi86hxn/image/upload/v1682296118/Projects/icons/cock_k3rjvf.png",
    },
    {
      project: "DashPro",
      Link: "https://dashpro.netlify.app/",
      github: "https://github.com/SantiCortes2250/React/tree/main/Projects",
      image:
        "https://res.cloudinary.com/dhbi86hxn/image/upload/v1682297243/Projects/dash_1_khcbd0.png",
      icon: "https://res.cloudinary.com/dhbi86hxn/image/upload/v1682297004/Projects/icons/proje_tp7jbp.png",
    },
    {
      project: "Booker",
      Link: "https://bookerweb.netlify.app",
      github: "https://github.com/SebasCepedaTobon/Booker/tree/Changes",
      image:
        "https://res.cloudinary.com/dhbi86hxn/image/upload/v1682295896/Projects/booker_1_tur1px.jpg",
      icon: "https://res.cloudinary.com/dhbi86hxn/image/upload/v1677637598/Projects/icons/iconBook_brp2ns.png",
    },
    {
      project: "PixelFree",
      Link: "https://pixelfree.netlify.app/",
      github: "https://github.com/SantiCortes2250/React/tree/main/pixabay",
      image:
        "https://res.cloudinary.com/dhbi86hxn/image/upload/v1682296538/Projects/bg-img_1_xydwc6.png",
      icon: "https://res.cloudinary.com/dhbi86hxn/image/upload/v1682296429/Projects/icons/img_ls6fmv.png",
    },
    {
      project: "CriptoRC",
      Link: "https://criptosrc.netlify.app/",
      github: "https://github.com/SantiCortes2250/React/tree/main/cripto",
      image:
        "https://res.cloudinary.com/dhbi86hxn/image/upload/v1682296650/Projects/cripto_1_s1jm21.png",
      icon: "https://res.cloudinary.com/dhbi86hxn/image/upload/v1682296747/Projects/icons/bitcoin_zg1hbp.png",
    },
  ];
  return (
    <div className={styles.container} id="projects">
      <h2 className={styles.section}>
        {t("myProjects")}
        <span className={styles.title}> Project </span>
      </h2>
      <div className={styles.cards}>
        {projects.map((project, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.hover}>
              <img src={project.icon} alt="" />
              <p>{project.project}</p>
              <a href={project.Link} target="_blank">
              {t("link")}
              </a>
              <a href={project.github} target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                  <path
                    fill="#fff"
                    d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM277.3 415.7c-8.4 1.5-11.5-3.7-11.5-8 0-5.4.2-33 .2-55.3 0-15.6-5.2-25.5-11.3-30.7 37-4.1 76-9.2 76-73.1 0-18.2-6.5-27.3-17.1-39 1.7-4.3 7.4-22-1.7-45-13.9-4.3-45.7 17.9-45.7 17.9-13.2-3.7-27.5-5.6-41.6-5.6-14.1 0-28.4 1.9-41.6 5.6 0 0-31.8-22.2-45.7-17.9-9.1 22.9-3.5 40.6-1.7 45-10.6 11.7-15.6 20.8-15.6 39 0 63.6 37.3 69 74.3 73.1-4.8 4.3-9.1 11.7-10.6 22.3-9.5 4.3-33.8 11.7-48.3-13.9-9.1-15.8-25.5-17.1-25.5-17.1-16.2-.2-1.1 10.2-1.1 10.2 10.8 5 18.4 24.2 18.4 24.2 9.7 29.7 56.1 19.7 56.1 19.7 0 13.9.2 36.5.2 40.6 0 4.3-3 9.5-11.5 8-66-22.1-112.2-84.9-112.2-158.3 0-91.8 70.2-161.5 162-161.5S388 165.6 388 257.4c.1 73.4-44.7 136.3-110.7 158.3zm-98.1-61.1c-1.9.4-3.7-.4-3.9-1.7-.2-1.5 1.1-2.8 3-3.2 1.9-.2 3.7.6 3.9 1.9.3 1.3-1 2.6-3 3zm-9.5-.9c0 1.3-1.5 2.4-3.5 2.4-2.2.2-3.7-.9-3.7-2.4 0-1.3 1.5-2.4 3.5-2.4 1.9-.2 3.7.9 3.7 2.4zm-13.7-1.1c-.4 1.3-2.4 1.9-4.1 1.3-1.9-.4-3.2-1.9-2.8-3.2.4-1.3 2.4-1.9 4.1-1.5 2 .6 3.3 2.1 2.8 3.4zm-12.3-5.4c-.9 1.1-2.8.9-4.3-.6-1.5-1.3-1.9-3.2-.9-4.1.9-1.1 2.8-.9 4.3.6 1.3 1.3 1.8 3.3.9 4.1zm-9.1-9.1c-.9.6-2.6 0-3.7-1.5s-1.1-3.2 0-3.9c1.1-.9 2.8-.2 3.7 1.3 1.1 1.5 1.1 3.3 0 4.1zm-6.5-9.7c-.9.9-2.4.4-3.5-.6-1.1-1.3-1.3-2.8-.4-3.5.9-.9 2.4-.4 3.5.6 1.1 1.3 1.3 2.8.4 3.5zm-6.7-7.4c-.4.9-1.7 1.1-2.8.4-1.3-.6-1.9-1.7-1.5-2.6.4-.6 1.5-.9 2.8-.4 1.3.7 1.9 1.8 1.5 2.6z"
                  />
                </svg>
              </a>
            </div>
            <div className={styles.image}>
              <img src={project.image} alt="" />
            </div>
            <h2>{project.project}</h2>
          </div>
        ))}
      </div>
      <div className={styles.btn}>
        <a href="https://github.com/SantiCortes2250/React" target="_blank">
        {t("all")}
        </a>
      </div>
    </div>
  );
};

export default Projects;
