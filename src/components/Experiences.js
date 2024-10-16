import { Parallax } from "react-scroll-parallax";
import React, { useState } from "react";

const Experiences = (props) => {
  // const [isVisibleXP1, setIsVisibleXP1] = useState(false);
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
      <div className="experience scroll">
        <h2>My experiences</h2>
        <ul>
          <li className="xp">
            <div className="triangle"></div>
            <Parallax
              onEnter={() => handleVisibility(0, true)}
              onExit={() => handleVisibility(0, false)}
            >
              <div
                className={`xp-content ${
                  isVisible[0] ? "slide-center" : "slide-left"
                }`}
              >
                <div className="xp-details">
                  <h3>May – July 2014</h3>
                  <br />
                  <h5>PHP Developer</h5>
                  <h6>Ufolep, Lyon France - Internship</h6>
                  <br />
                  <ul>
                    <li>
                      Setting up the structure of the database, managing data
                      via the application
                    </li>
                    <li>User rights management</li>
                  </ul>
                  <br />
                </div>
                <div className="skills-used">
                  <div className="badge">HTML</div>
                  <div className="badge">CSS</div>
                  <div className="badge">PHP</div>
                  <div className="badge">SQL</div>
                  <div className="badge">MySQL</div>
                </div>
              </div>
            </Parallax>
          </li>
          <li className="xp">
            <div className="triangle"></div>
            <Parallax
              onEnter={() => handleVisibility(1, true)}
              onExit={() => handleVisibility(1, false)}
            >
              <div
                className={`xp-content ${
                  isVisible[1] ? "slide-center" : "slide-left"
                }`}
              >
                <div className="xp-details">
                  <h3>January – February 2015</h3>
                  <br />
                  <h5>Web Developer</h5>
                  <h6>Lorge Imprimeur, Vénissieux France - Internship</h6>
                  <br />
                  <p>
                    Development of a contact management application in "Web
                    2.0": use AJAX methods
                  </p>
                  <br />
                </div>
                <div className="skills-used">
                  <div className="badge">HTML</div>
                  <div className="badge">CSS</div>
                  <div className="badge">JavaScript</div>
                  <div className="badge">JQuery</div>
                  <div className="badge">AJAX</div>
                  <div className="badge">Linux</div>
                  <div className="badge">Raspberry</div>
                  <div className="badge">Git</div>
                </div>
              </div>
            </Parallax>
          </li>
          <li className="xp">
            <div className="triangle"></div>
            <Parallax
              onEnter={() => handleVisibility(2, true)}
              onExit={() => handleVisibility(2, false)}
            >
              <div
                className={`xp-content ${
                  isVisible[2] ? "slide-center" : "slide-left"
                }`}
              >
                <div className="xp-details">
                  <h3>June 2015 – July 2015</h3>
                  <br />
                  <h5>ASP.NET Developer</h5>
                  <h6>Alter Systems, Lyon France - Internship</h6>
                  <br />
                  <ul>
                    <li>Analysis of the project in MVC architecture</li>
                    <li>
                      Writing of an algorithm that reads the structure of word
                      files in order to retrieve the structure of the table of
                      contents
                    </li>
                    <li>
                      Management of the summary of the selected word file (front
                      display + selection checkbox)
                    </li>
                  </ul>
                  <br />
                </div>
                <div className="skills-used">
                  <div className="badge">HTML</div>
                  <div className="badge">CSS</div>
                  <div className="badge">C#</div>
                  <div className="badge">.NET</div>
                  <div className="badge">ASP.NET</div>
                  <div className="badge">JavaScript</div>
                  <div className="badge">JQuery</div>
                  <div className="badge">MVC</div>
                </div>
              </div>
            </Parallax>
          </li>
          <li className="xp">
            <div className="triangle"></div>
            <Parallax
              onEnter={() => handleVisibility(3, true)}
              onExit={() => handleVisibility(3, false)}
            >
              <div
                className={`xp-content ${
                  isVisible[3] ? "slide-center" : "slide-left"
                }`}
              >
                <div className="xp-details">
                  <h3>September 2016 – February 2018</h3>
                  <br />
                  <h5>ASP.NET Developer and Product Owner</h5>
                  <h6>
                    Acta Assistance, Limonest France - Cooperative Training
                    Course
                  </h6>
                  <br />
                  <h6>Project owner (6 month)</h6>
                  <ul>
                    <li>Writing documentation: application use cases</li>
                    <li>
                      Testing applications within the project management team:
                      writing test procedures, bug reports
                    </li>
                  </ul>
                  <br />
                  <h6>Development department (1 year)</h6>
                  <ul>
                    <li>
                      Development of management web applications for the
                      company's internal services
                    </li>
                  </ul>
                  <br />
                </div>
                <div className="skills-used">
                  <div className="badge">HTML</div>
                  <div className="badge">Telerik</div>
                  <div className="badge">VB.NET</div>
                  <div className="badge">.NET</div>
                  <div className="badge">ASP.NET</div>
                  <div className="badge">SQL</div>
                  <div className="badge">JavaScript</div>
                  <div className="badge">MVC</div>
                </div>
              </div>
            </Parallax>
          </li>
          <li className="xp">
            <div className="triangle"></div>
            <Parallax
              onEnter={() => handleVisibility(4, true)}
              onExit={() => handleVisibility(4, false)}
            >
              <div
                className={`xp-content ${
                  isVisible[4] ? "slide-center" : "slide-left"
                }`}
              >
                <div className="xp-details">
                  <h3>October 2019 – November 2019</h3>
                  <br />
                  <h5>PHP Symfony Developer</h5>
                  <h6>Kubiweb, Dardilly France - Internship</h6>
                  <br />
                  <ul>
                    <li>
                      Analysis of the initial code, and implementation of the
                      architecture (Merise and UML)
                    </li>
                  </ul>
                  <br />
                </div>
                <div className="skills-used">
                  <div className="badge">HTML</div>
                  <div className="badge">CSS</div>
                  <div className="badge">Bootstrap</div>
                  <div className="badge">JavaScript</div>
                  <div className="badge">PHP</div>
                  <div className="badge">Symfony</div>
                  <div className="badge">SQL</div>
                  <div className="badge">MySQL</div>
                  <div className="badge">MVC</div>
                  <div className="badge">Git</div>
                </div>
              </div>
            </Parallax>
          </li>
          <li className="xp">
            <div className="triangle"></div>
            <Parallax
              onEnter={() => handleVisibility(5, true)}
              onExit={() => handleVisibility(5, false)}
            >
              <div
                className={`xp-content ${
                  isVisible[5] ? "slide-center" : "slide-left"
                }`}
              >
                <div className="xp-details">
                  <h3>February 2024 – Now</h3>
                  <br />
                  <h5>PHP Developer</h5>
                  <h6>JD Solutions, Tel Aviv</h6>
                  <br />
                  <ul>
                    <li>Development and maintenance of many CRM</li>
                  </ul>
                  <br />
                </div>
                <div className="skills-used">
                  <div className="badge">HTML</div>
                  <div className="badge">CSS</div>
                  <div className="badge">Bootstrap</div>
                  <div className="badge">JQuery</div>
                  <div className="badge">PHP</div>
                  <div className="badge">MySQL</div>
                  <div className="badge">React</div>
                </div>
              </div>
            </Parallax>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Experiences;
