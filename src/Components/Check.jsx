import React, {useState} from "react";
import style from "../CSS/check.module.css"
import { useTranslation } from "react-i18next";



const Check = () => {

    
    const { i18n } = useTranslation();
  
    const [checked, setChecked] = useState(i18n.language === 'es');

    const handleChange = () => {
      const newLanguage = checked ? 'en' : 'es';
      setChecked(!checked);
      i18n.changeLanguage(newLanguage);
    };
  return (
    <div className={style.toggleWrapper}>
      <input type="checkbox" className={style.dn} id="dn" checked={checked} onChange={handleChange}/>
      <label htmlFor="dn" className={style.toggle}>
        <span className={style.toggle__handler}>{i18n.language}</span>
      </label>
    </div>
  );
};

export default Check;
