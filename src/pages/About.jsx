import profilePicture from "../assets/profilePicture.jpg";

const About = () => {
  return (
    <section className="about section" id="about">
      <h2 className="section-title">About</h2>
      <div className="about__container bd-grid">
        <div className="about__img box__shadow">
          <img
            src={profilePicture}
            alt="Nishant Makwana"
            className="about__img"
          />
        </div>
        <div>
          <h2 className="about__subtitle">My Self Nishant Makwana.</h2>
          <p className="about__text">
            My Name Is Nishant Makwana. A Passionate 19-Year-Old B. E. IT
            Student Who Is Proficient In Java, JavaScript/TypeScript And Python.
            Also, Specialized In Full Stack Web Development ( MERN Stack + Next
            JS ) & Cross-Platform Mobile App Development ( React Native ),
            Artificial Intellingence, Machine Learning & Data Science. Also,
            Been A Winner At YogaTech Start-Up Event 2024 & Finalist At SSIP
            Hackathon 2023. Experienced Java Remote Intern At CodSoft.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;