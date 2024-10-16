import { Parallax } from "react-scroll-parallax";
import React, { useState } from "react";

const Experience = (props) => {
  const [isVisible, setIsVisible] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
  ]);

  const handleVisibility = (index, value) => {
    setIsVisible((prevState) => {
      const newState = [...prevState];
      newState[index] = value;
      return newState;
    });
  };

  return (
    <>
      <div className="triangle"></div>
      <Parallax
        onEnter={() => handleVisibility(props.key, true)}
        onExit={() => handleVisibility(props.key, false)}
      >
        <div
          className={`xp-content ${
            isVisible[props.key] ? "slide-center" : "slide-left"
          }`}
        >
          <div className="xp-details">
            <h3>{props.date}</h3>
            <h5>{props.title}</h5>
            <h6>{props.location}</h6>
            <ul>
              {props.roles.map((item, i) => (
                <li key={i}>
                  {item.role !== undefined && <h6>{item.role}</h6>}
                  <ul className="roles">
                    {item.descriptions.map((description, index) => (
                      <li key={index}>{description}</li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </div>
          <div className="skills-used">
            {props.skills.map((skill, i) => (
              <div key={i} className="badge">{skill}</div>
            ))}
          </div>
        </div>
      </Parallax>
    </>
  );
};

export default Experience;
