import resume from "../assets/resume.png";

const Resume = () => {
  return (
    <section className="skills section" id="skills">
      <h2 className="section-title">Resume</h2>
      <div className="skills__container bd-grid home-position">
        <div className="work__img">
          <a
            href="https://drive.google.com/file/d/1l5bdBPI6YDx1kQBuY0VDV_NYYMb-IIAR/view?usp=sharing"
            target="_blank"
          >
            <img src={resume} alt="" className="skills__img" />
            <span className="text-overlay">Download Resume</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Resume;
