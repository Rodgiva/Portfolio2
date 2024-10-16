import me from "../assets/images/me.jpg";
import {
  Parallax,
  useParallax,
  useParallaxController,
} from "react-scroll-parallax";

const Profil = (props) => {
  //   const { ref } = useParallax({ speed: 20 });

  return (
    <>
      <div className="presentation">
        <Parallax speed={10}>
          <img src={me} className="img" />
        </Parallax>
        {/* <img ref={ref} src={me} className="img" /> */}
        <div className="name">
          <h1>Avigdor Partouche</h1>
          <h3>Full Stack Developer - React Nodejs</h3>
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
