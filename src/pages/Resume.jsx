import resume from "../assets/resume.png";

const Resume = () => {
  return (
    <section className="skills section" id="skills">
      <h2 className="section-title">Resume</h2>
      <div className="skills__container bd-grid home-position">
        <div className="work__img">
          <a
            href="https://drive.google.com/file/d/1cyrMa5We4LJWO1Z4RFo8TpxXPi-T0sO0/view?usp=drive_link"
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