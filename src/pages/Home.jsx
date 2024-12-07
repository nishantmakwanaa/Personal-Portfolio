import profilePicture from "../assets/profilePicture.jpg";

const Home = () => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <section className="home bd-grid home-position" id="home">
        <div className="home__data">
          <h1 className="home__title">
            Hi,
            <br />
            My Self <span className="home__title-color">Nishant.</span>
            <br />
            Software Developer.
          </h1>
          <a className="button" onClick={() => scrollToSection("contact")}>
            Hire Me
          </a>
        </div>
      </section>
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
              Student Who Is Proficient In Java, JavaScript/TypeScript And
              Python. Also, Specialized In Full Stack Web Development ( MERN
              Stack + Next JS ) & Cross-Platform Mobile App Development ( React
              Native ), Artificial Intellingence, Machine Learning & Data
              Science. Also, Been A Winner At YogaTech Start-Up Event 2024 &
              Finalist At SSIP Hackathon 2023. Experienced Java Remote Intern At
              CodSoft.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
