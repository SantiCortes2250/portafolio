import React, { useEffect } from "react";
import styles from "../CSS/modal.module.css";
import { useTranslation } from "react-i18next";

function Modal({ isOpen, setIsOpen, id }) {
  const { t } = useTranslation(["info"]);

  const experience = [
     {
      id: 1,
      company: "MirrorGains",
      year: "date",
      work: "Frontend Developer",
      tasks: [
        "task1",
        "task2",
        "task3",
        "task5",
      ],
    },
    {
      id: 2,
      company: "Eos Technology",
      year: "date",
      work: "Frontend Developer",
      tasks: [
        "task6",
        "task7",
        "task8",
        "task9",
        "task10",
      ],
    },
    {
      id: 3,
      company: "Buses Armenia",
      year: "date2",
      work: "Frontend Developer",
      tasks: [
        "task11",
        "task12",
        "task13",
        "task14",
        "task15",
      ],
    },
  ];

  const findExperience = experience.find((expe) => expe.id === id)


 
  return (
    <>
    {isOpen && <>
      <div className={styles.overlay} onClick={() => setIsOpen(!isOpen)}></div>

<div className={styles.modal} id="modal">
  <div className={styles.btn}>
    <button onClick={() => setIsOpen(!isOpen)}><img src="https://res.cloudinary.com/dhbi86hxn/image/upload/v1679702271/Projects/icons/cerrar_vskf8q.png"></img></button>
  </div>
  <h2>{findExperience.company}</h2>
  <p> {t("btnTask")}</p>
  <div className={styles.tasks}>
    {
      findExperience.tasks?.map((task, index) => (
       
        <div className={styles.task} key={index}>
          <img src="https://res.cloudinary.com/dhbi86hxn/image/upload/v1682957842/Projects/icons/vi%C3%B1eta_gjnx0v.png" alt="" />
          <p>{t(task)}</p>
        </div>    
      )
    )} 

  </div>
 
</div>
    
    </>}
      
    </>
  );
}

export default Modal;
