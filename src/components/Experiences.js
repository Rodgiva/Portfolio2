import { Parallax } from "react-scroll-parallax";
import React, { useState } from "react";

const Experiences = (props) => {
  const [isVisible, setIsVisible] = useState(false);
  const handleEnter = () => {
    setIsVisible(true);
  };
  const handleExit = () => {
    setIsVisible(false);
  };

  return (
    <>
      <div class="experience scroll">
        <h2>My experiences</h2>
        <ul>
          <li class="xp">
            <div class="triangle"></div>
            <div class="xp-content">
              <div class="xp-details">
                <h3>May – July 2014</h3>
                <br />
                <h5>PHP Developer</h5>
                <h6>Ufolep, Lyon France - Internship</h6>
                <br />
                <ul>
                  <li>
                    Setting up the structure of the database, managing data via
                    the application
                  </li>
                  <li>User rights management</li>
                </ul>
                <br />
              </div>
              <div class="skills-used">
                <div class="badge">HTML</div>
                <div class="badge">CSS</div>
                <div class="badge">PHP</div>
                <div class="badge">SQL</div>
                <div class="badge">MySQL</div>
              </div>
            </div>
          </li>
          <li class="xp">
            <div class="triangle"></div>
            <div class="xp-content">
              <div class="xp-details">
                <h3>January – February 2015</h3>
                <br />
                <h5>Web Developer</h5>
                <h6>Lorge Imprimeur, Vénissieux France - Internship</h6>
                <br />
                <p>
                  Development of a contact management application in "Web 2.0":
                  use AJAX methods
                </p>
                <br />
              </div>
              <div class="skills-used">
                <div class="badge">HTML</div>
                <div class="badge">CSS</div>
                <div class="badge">JavaScript</div>
                <div class="badge">JQuery</div>
                <div class="badge">AJAX</div>
                <div class="badge">Linux</div>
                <div class="badge">Raspberry</div>
                <div class="badge">Git</div>
              </div>
            </div>
          </li>
          <li class="xp">
            <div class="triangle"></div>
            <div class="xp-content">
              <div class="xp-details">
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
              <div class="skills-used">
                <div class="badge">HTML</div>
                <div class="badge">CSS</div>
                <div class="badge">C#</div>
                <div class="badge">.NET</div>
                <div class="badge">ASP.NET</div>
                <div class="badge">JavaScript</div>
                <div class="badge">JQuery</div>
                <div class="badge">MVC</div>
              </div>
            </div>
          </li>
          <li class="xp">
            <div class="triangle"></div>
            <div class="xp-content">
              <div class="xp-details">
                <h3>September 2016 – February 2018</h3>
                <br />
                <h5>ASP.NET Developer and Product Owner</h5>
                <h6>
                  Acta Assistance, Limonest France - Cooperative Training Course
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
                    Development of management web applications for the company's
                    internal services
                  </li>
                </ul>
                <br />
              </div>
              <div class="skills-used">
                <div class="badge">HTML</div>
                <div class="badge">Telerik</div>
                <div class="badge">VB.NET</div>
                <div class="badge">.NET</div>
                <div class="badge">ASP.NET</div>
                <div class="badge">SQL</div>
                <div class="badge">JavaScript</div>
                <div class="badge">MVC</div>
              </div>
            </div>
          </li>
          <li class="xp">
            <div class="triangle"></div>
            <div class="xp-content">
              <div class="xp-details">
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
              <div class="skills-used">
                <div class="badge">HTML</div>
                <div class="badge">CSS</div>
                <div class="badge">Bootstrap</div>
                <div class="badge">JavaScript</div>
                <div class="badge">PHP</div>
                <div class="badge">Symfony</div>
                <div class="badge">SQL</div>
                <div class="badge">MySQL</div>
                <div class="badge">MVC</div>
                <div class="badge">Git</div>
              </div>
            </div>
          </li>

          <li class="xp">
            <div class="triangle"></div>
            <div class="xp-content">
              <div class="xp-details">
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
              <div class="skills-used">
                <div class="badge">HTML</div>
                <div class="badge">CSS</div>
                <div class="badge">Bootstrap</div>
                <div class="badge">JQuery</div>
                <div class="badge">PHP</div>
                <div class="badge">MySQL</div>
                <div class="badge">React</div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Experiences;
