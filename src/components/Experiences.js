// import { Parallax } from "react-scroll-parallax";
import React, { useEffect, useState } from "react";
import Experience from "./Experience";

const Experiences = (props) => {
  const [datas, setDatas] = useState(null);
  // const [isVisible, setIsVisible] = useState([
  //   false,
  //   false,
  //   false,
  //   false,
  //   false,
  //   false,
  // ]);

  // const handleVisibility = (index, value) => {
  //   setIsVisible((prevState) => {
  //     const newState = [...prevState];
  //     newState[index] = value;
  //     return newState;
  //   });
  // };

  useEffect(() => {
    fetch("/data.json")
      .then((response) => response.json())
      .then((data) => setDatas(data.experiences))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <>
      <div className="experience scroll">
        <h2>My experiences</h2>
        <ul >
          {datas &&
            datas.map((experience) => (
              <li key={experience.id} className="xp">
                <Experience
                  title={experience.title}
                  date={experience.date}
                  location={experience.location}
                  roles={experience.roles}
                  skills={experience.skills}
                />
              </li>
            ))}
        </ul>
      </div>
    </>
  );
};

export default Experiences;
