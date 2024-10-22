import React from "react";
import profilePicture from "../assets/profilePicture.jpg";

const About = () => {
  return (
    <section className="about section" id="about">
      <h2 className="section-title">About</h2>
      <div className="about__container bd-grid">
        <div className="about__img work__img">
          <img
            src={profilePicture}
            alt="Nishant Makwana"
            className="skills__img"
          />
        </div>
        <div>
          <h2 className="about__subtitle">I'm Nishant Makwana.</h2>
          <p className="about__text">
            Passionate 19-Year-Old IT Prodigy Proficient In Java, JavaScript And
            Python, Specializing In Full Stack Web Development, Machine Learning
            & Data Science. Also Been A Finalist At SSIP Hackathon'23.
            Experienced Java Remote Intern At CodSoft, Now Contributing To Open
            Source Via GirlScript Summer Of Code.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;