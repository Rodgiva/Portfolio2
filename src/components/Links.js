import github from "../assets/images/links/github-mark-white.png";
import linkedin from "../assets/images/links/LinkedIn_logo_initials.png";
import cv from "../assets/images/links/cv.png";

const Links = (props) => {
  return (
    <>
      <div className="links">
        <div>
          <p>Network</p>
          <a href="https://github.com/Rodgiva" target="_blank">
            <img src={github} />
          </a>
          <a
            href="https://www.linkedin.com/in/avigdor-partouche/"
            target="_blank"
          >
            <img src={linkedin} />
          </a>
          <a
            href={`${process.env.PUBLIC_URL}/assets/Resume_Avigdor_PARTOUCHE.pdf`}
            download="Resume_Avigdor_PARTOUCHE.pdf"
            target="_blank"
          >
            <img src={cv} />
          </a>
        </div>
      </div>
    </>
  );
};

export default Links;
