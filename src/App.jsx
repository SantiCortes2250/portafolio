import React, { useState } from "react";
import AboutMe from "./Components/AboutMe";
import Follow from "./Components/Follow";
import { Header } from "./Components/Header";
import Projects from "./Components/Projects";
import Resume from "./Components/Resume";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Skills from "./Components/Slick/Skills";
import Modal from "./Components/Modal";


function App() {

  const [isOpen, setIsOpen] = useState(false)
  const [id, setId] = useState(null)


  return (
    <>
      <Modal 
      id={id}
      isOpen={isOpen}
      setIsOpen={setIsOpen}/> 
      
      <Follow />
      <div className="header">
        <Header />
      </div>
      <div className="main">
        <AboutMe />
        <Resume
         setId={setId}
         isOpen={isOpen}
         setIsOpen={setIsOpen}/>
        <Skills />
        <Projects />

        <Contact />
      </div>
      <Footer />
    </>
  );
}

export default App;
