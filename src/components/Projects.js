import snake from "../assets/images/projects/snake_logo.png";
import rps from "../assets/images/projects/rock-paper-scissor_logo.png";
import wrg from "../assets/images/projects/wolf-rabbit-grass_logo.png";

const Projects = (props) => {
  return (
    <>
      <div className="projects">
        <h2>Projects</h2>
        <div className="projects-container">
          <div>
            <a href="https://fightingsnakes.onrender.com">
              {/* <img src="./assets/images/projects/snake_logo.png" alt=""> */}
              <img src={snake} />
            </a>
            <h5>fightingsnakes</h5>
          </div>
          <div>
            <a href="https://rock-paper-scisor.onrender.com">
              {/* <img src="./assets/images/projects/rock-paper-scissor_logo.png" alt=""> */}
              <img src={rps} />
            </a>
            <h5>rock paper scissor</h5>
          </div>
          <div>
            <a href="https://wolf-rabbit-grass.onrender.com">
              {/* <img src="./assets/images/projects/wolf-rabbit-grass_logo.png" alt=""> */}
              <img src={wrg} />
            </a>
            <h5>wolf rabbit grass</h5>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
