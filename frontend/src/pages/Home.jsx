import React from "react";

const Home = () => {
  return (
    <section className="home bd-grid home-position" id="home">
      <div className="home__data">
        <h1 className="home__title">
          Hi,
          <br />
          I'm <span className="home__title-color">Nishant</span>
          <br />
          Software Developer
        </h1>
        <a href="mailto:nishantworldwide@gmail.com" className="button">
          Hire Me
        </a>
      </div>
    </section>
  );
};

export default Home;