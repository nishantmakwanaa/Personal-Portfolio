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
              href="https://drive.google.com/uc?export=download&id=1l5bdBPI6YDx1kQBuY0VDV_NYYMb-IIAR"
              download="Nishant'S-Resume.pdf"
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