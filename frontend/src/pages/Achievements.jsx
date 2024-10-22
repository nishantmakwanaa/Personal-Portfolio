import React from "react";
import ssipHackathon from "../assets/ssipHackathon.jpeg";

const Achievements = () => {
  return (
    <section className="achievements section" id="achievements">
      <h2 className="section-title">Achievements</h2>
      <div className="achievements__container bd-grid">
        <div className="achievement__item">
          <div className="achievement__icon work__img">
            <img
              src={ssipHackathon}
              alt="State-Level Hackathon Finalist"
              class="skills__img"
              style={{ borderRadius: "0.5rem" }}
            />
          </div>
          <div className="achievement__details">
            <h3 className="achievement__title">
              State-Level Hackathon Finalist
            </h3>
            <p className="achievement__description">
              Awarded Finalist Place In The Gujarat State Hackathon 2023 For
              Innovative Project Development.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;