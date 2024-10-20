import me from "../assets/images/me.jpg";
import {
  Parallax,
  useParallax,
  useParallaxController,
} from "react-scroll-parallax";

const Profil = (props) => {
  return (
    <>
      <div className="presentation">
        <Parallax speed={20} easing={"easeIn"}>
          <img src={me} className="img" />
        </Parallax>
        <div className="name">
          <h1>Avigdor Partouche</h1>
          <h3>
            Full Stack Developer -{" "}
            <span className="highlight">React Nodejs</span>
          </h3>
        </div>
        <div className="aboutme">
          <p>
            Hi, I am a Fullstack web developer, having developed several
            projects in Javascript, PHP and Microsoft Technologies. Having
            recently completed full stack training at Developers Institute, I am
            now ready on React/Redux and nodejs Express.
          </p>
        </div>
      </div>
    </>
  );
};

export default Profil;
