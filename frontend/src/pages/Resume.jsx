import React from "react";
import resume from "../assets/resume.png";

const Resume = () => {
  return (
    <section class="skills section" id="skills">
      <h2 class="section-title">Resume</h2>
      <div class="skills__container bd-grid home-position">
        <div class="work__img resume__img">
          <a
            href="https://drive.google.com/file/d/1cyrMa5We4LJWO1Z4RFo8TpxXPi-T0sO0/view?usp=drive_link"
            target="_blank"
          >
            <img src={resume} alt="" class="skills__img" />
            <span class="text-overlay">Download Resume</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Resume;