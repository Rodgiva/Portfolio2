import { Parallax } from "react-scroll-parallax";
import React, { useState } from "react";

import css from "../assets/images/languages/CSS.png";
import js from "../assets/images/languages/js.png";
import ts from "../assets/images/languages/Typescript.png";
import react from "../assets/images/languages/react.png";
import redux from "../assets/images/languages/redux.png";
import nodejs from "../assets/images/languages/nodejs.png";
import sql from "../assets/images/languages/sql.png";
import mysql from "../assets/images/languages/MySQL.png";
import postgresql from "../assets/images/languages/postgresql.png";

const Skills = (props) => {
  const [isVisible, setIsVisible] = useState(false);
  const handleEnter = () => {
    setIsVisible(true);
  };
  const handleExit = () => {
    setIsVisible(false);
  };

  return (
    <>
      <div className="skills">
        <h2>My Skills</h2>
        <Parallax onEnter={handleEnter} onExit={handleExit}>
          <div className={`logo ${isVisible ? "fade-in" : "fade-out"}`}>
            <img src={css} />
            <img src={js} />
            <img src={ts} />
            <img src={react} />
            <img src={redux} />
            <img src={nodejs} />
            <img src={sql} />
            <img src={mysql} />
            <img src={postgresql} />
          </div>
        </Parallax>
      </div>
    </>
  );
};

export default Skills;
