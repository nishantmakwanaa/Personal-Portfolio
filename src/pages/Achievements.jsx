import ssipHackathon from "../assets/ssipHackathon.jpeg";
import yogaTechChallange from "../assets/yogaTechChallange.png";

const Achievements = () => {
  return (
    <section className="achievements section" id="achievements">
      <h2 className="section-title">Achievements</h2>
      <div className="achievements__container bd-grid">
        <div className="achievement__item">
          <div className="achievement__icon">
            <img
              src={ssipHackathon}
              alt="State-Level Hackathon Finalist"
              className="skills__img"
              style={{ borderRadius: "0.5rem" }}
            />
          </div>
          <div className="achievement__details">
            <h3 className="achievement__title">
              State-Level Hackathon Finalist
            </h3>
            <p className="achievement__description">
              Awarded Finalist Place In The Gujarat State Hackathon 2023 For
              Innovative Job Portal.
            </p>
          </div>
        </div>
      </div>
      <br />
      <div className="achievements__container bd-grid">
        <div className="achievement__item">
          <div className="achievement__icon">
            <img
              src={yogaTechChallange}
              alt="Yoga-Tech Challange Winner"
              className="skills__img"
              style={{ borderRadius: "0.5rem" }}
            />
          </div>
          <div className="achievement__details">
            <h3 className="achievement__title">Yoga-Tech Challange Winner</h3>
            <p className="achievement__description">
              Awarded Winner Place In The Yoga-Tech Challange National-Level
              Start-Up Event 2024 For Innovative AI-Assistanted Yoga App.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;