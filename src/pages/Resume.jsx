import resume from "../assets/resume.png";

const Resume = () => {
  return (
    <section className="resume section" id="resume">
      <h2 className="section-title">Resume</h2>
      <div className="resume__container bd-grid resume-position">
        <div className="resume__img">
          <img src={resume} alt="" className="resume__img box__shadow" />
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "1rem",
            }}
          >
            <a
              href="https://drive.google.com/file/d/1uCLamKroG7do9mqKP1rsiAfzyjF0SL-U/view?usp=sharing"
              download="Nishant Makwana'S Resume.pdf"
              className="button"
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;