import React, { useEffect, useState } from "react";
import Experience from "./Experience";

const Experiences = (props) => {
  const [datas, setDatas] = useState(null);

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
