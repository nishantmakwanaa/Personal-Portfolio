import resume from "../assets/resume.png";

const Resume = () => {
  return (
    <section className="resume section" id="resume">
      <h2 className="section-title">Resume</h2>
      <div className="resume__container bd-grid resume-position">
        <div className="projects__img">
          <a
            href="https://drive.google.com/file/d/1l5bdBPI6YDx1kQBuY0VDV_NYYMb-IIAR/view?usp=sharing"
            target="_blank"
          >
            <img src={resume} alt="" className="resume__img" />
            <br />
            <span className="text-overlay">Download Resume</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Resume;