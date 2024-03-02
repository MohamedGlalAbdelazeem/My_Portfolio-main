import "./hero.css";
import Lottie from "lottie-react";
import programmer from "/public/animations/programmer";

const Hero = () => {
  return (
    <section className="hero">
      <div className="left-section">
        <div className="parent-avter">
          <img src="/Mohamed glal-fotor-20231120204139.png" alt="myphoto" />
          <span className="icon-verified"></span>
        </div>
        <h1 className="name">
          <span>Eng.</span>Mohamed <span>Glal</span> Abdelazeem|
        </h1>
        <h3> Software Developer </h3>
        <p className="sub-title">
          As Web Developer specializing in front end development. Experienced
          with all stages of the development cycle for dynamic web projects.
          Well-versed in numerous programming languages including ReactJs ,
          JavaScript , jquery , java , HTML5 , CSS3 ....
        </p>
        <div className="icons">
          <a
            href="https://github.com/MohamedGlalAbdelazeem"
            target="_blank"
            rel="noreferrer"
          >
          <i className="fa-brands fa-github"></i>
          </a>
          <a
            href="https://www.behance.net/mohamedglal3"
            target="_blank"
            rel="noreferrer"
          >
    
           <i className="fa-brands fa-square-behance"></i>          </a>
          <a
            href="https://www.linkedin.com/in/mohamed-glal-abdelazeem/"
            target="_blank"
            rel="noreferrer"
          >
          
          <i className="fa-brands fa-linkedin"></i>
          </a>
          <a href="https://wa.me/01021432931" target="_blank" rel="noreferrer">
            
          <i className="fa-brands fa-whatsapp"></i>          </a>
          <a
            href="https://www.youtube.com/channel/UC__x6GLySpgWV-9GTe1azYQ"
            target="_blank"
            rel="noreferrer"
          >
         <i className="fa-brands fa-youtube"></i>
       
          </a>
        </div>
        <div id="btns">
          <a
            className="btn"
            href="https://drive.google.com/drive/folders/1fFTbTGasVivJTXMM0Zt1TxGgBP0GhUo8?usp=sharing" target="_blank"
            rel="noreferrer"
        >
            Download CV<span >
            <i className="fa-solid fa-arrow-right-from-bracket"></i>
            </span>
          </a>
          <a
            className="btn"
            href="https://drive.google.com/drive/folders/1DqoGRiXpqKj9eapNe7_U73gormIwtXdV?usp=sharing"
          >
            My Certificates<span>
            <i className="fa-solid fa-arrow-right-from-bracket"></i>
            </span>
          </a>
        </div>
      </div>

      <div className="rigth-section">
        <Lottie
          className="programmer"
          style={{ width: "350px" }}
          animationData={programmer}
        />
      </div>
    </section>
  );
};

export default Hero;
