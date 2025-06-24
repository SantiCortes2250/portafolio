import React from 'react'
import styles from '../CSS/message.module.css'
import { useTranslation } from "react-i18next";

const Message = ({message}) => {
  const { t } = useTranslation(["info"]);

  return (
    <div className={message ? styles.container : styles.containerOff}>
        <p>{t("thanks")}</p>
    </div>
  )
}

export default Message