const Home = () => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
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
  );
};

export default Home;