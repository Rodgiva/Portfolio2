import github from "../assets/images/links/github-mobile.png";
import linkedin from "../assets/images/links/LinkedIn_mobile.png";
import cv from "../assets/images/links/cv-mobile.png";

const LinksMobile = (props) => {
  return (
    <>
      <div className="links-mobile">
        <h2>Network</h2>
        <div className="links-mobile-container">
          <div>
            <a href="https://github.com/Rodgiva" target="_blank">
              <img src={github} />
            </a>
            <h5>Github</h5>
          </div>
          <div>
            <a
              href="https://www.linkedin.com/in/avigdor-partouche/"
              target="_blank"
            >
              <img src={linkedin} />
            </a>
            <h5>Linkedin</h5>
          </div>
          <div>
            <a
              href={`${process.env.PUBLIC_URL}/assets/Resume_Avigdor_PARTOUCHE.pdf`}
              download="Resume_Avigdor_PARTOUCHE.pdf"
              target="_blank"
            >
              <img src={cv} />
            </a>
            <h5>Resume</h5>
          </div>
        </div>
      </div>
    </>
  );
};

export default LinksMobile;
