import React, {useRef , useState} from 'react'
import style from '../CSS/contact.module.css'
import emailjs from '@emailjs/browser'
import Message from './Message'
import { useTranslation } from "react-i18next";


const Contact = () => {
  const { t } = useTranslation(["info"]);

  const refForm = useRef();

  const [message, setMessage] = useState(false)


  
  

  const HandleSubmit = (e) =>{
    e.preventDefault()

    const serviceId = 'service_x5hc3mk'
    const templateId = 'template_8srgsan'

    const apiKey = 'I-hO-GkNbCMFjZVga'


    emailjs.sendForm(serviceId, templateId, refForm.current , apiKey)
    .then((res) => {
      if(res.text === 'OK'){
        setMessage(true)
        
        document.getElementById('name').value = ''
        document.getElementById('email').value = ''
        document.getElementById('subject').value = ''
        document.getElementById('message').value = ''

      }

      setTimeout(() => {
        setMessage(false)
        
      }, 3000);

     
    })
  
    .catch(error => console.error(error))




  }


  return (
    <>
    <Message
    message={message}
    />  
   

    <div className={style.container} id='contact'>
      <h2 className={style.section}>
        {t("get")}
        <span className={style.title}> Contact </span>

      </h2>
      <div className={style.forms}>
      <div className={style.form}>
        <h2>{t("message")}</h2>
        <form
          ref={refForm}
          onSubmit={HandleSubmit}

        >
          <div className={style.email}>
          <input type="text" placeholder={t("name")} name="name" required id='name' autoComplete="off"/>
          <input type="email" placeholder={t("email")} name="email" required id='email' autoComplete="off"/>

          </div>
       
        <input type="text" placeholder={t("subject")} name="subject" id='subject' required autoComplete="off"/>
        <textarea name="message" id="message" cols="30" rows="10" placeholder={t("messageText")} required autoComplete="off"/>
        <button>{t("send")}</button>
        </form>
      </div>
      <div className={style.containerInfo}>
        <h2>{t("info")}</h2>
        <p>{t("feel")}</p>
        <div className={style.contact}>
        <div className={style.icons}>
          <img src="https://res.cloudinary.com/dhbi86hxn/image/upload/v1677643541/Projects/icons/user_xiuj6a.png" alt="" />
          <img src="https://res.cloudinary.com/dhbi86hxn/image/upload/v1677643542/Projects/icons/location_vob9a1.png" alt="" />
          <img src="https://res.cloudinary.com/dhbi86hxn/image/upload/v1677643542/Projects/icons/phone_qhkhhh.png" alt="" />
          <img src="https://res.cloudinary.com/dhbi86hxn/image/upload/v1677643541/Projects/icons/mail_namp01.png" alt="" />
        </div>
        <div className={style.info}>
          <h4>{t("name")}</h4>
          <p>Santiago Rincon Cortes</p>
          <h4>{t("location")}</h4>
          <p>Colombia</p>
          <h4>{t("callMe")}</h4>
          <p>+57 300-605-2291</p>
          <h4>{t("emailMe")}</h4>
          <p>santicortesrincon15@gmail.com</p>
        </div>
          
        </div>
        


      </div>

      </div>
     
    </div>
    </>
    
  )
}

export default Contact