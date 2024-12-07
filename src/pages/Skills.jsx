const Skills = () => {
  return (
    <section className="about section" id="about">
      <div
        className="bd-grid"
        style={({ gap: "1rem" }, { justifyContent: "center" })}
      >
        <div>
          <h2 className="section-title">Skills</h2>
          <h2 className="about__subtitle">Programming Languages :</h2>
          <p style={{ paddingBottom: "1rem" }}>
            Java, JavaScript, Python, SQL (MongoDB, MySQL, PostGreSQL)
          </p>
          <h2 className="about__subtitle">FrameWorks :</h2>
          <p style={{ paddingBottom: "1rem" }}>
            Express JS, Node JS, React JS, SpringBoot
          </p>
          <h2 className="about__subtitle">Dev Tools :</h2>
          <p style={{ paddingBottom: "1rem" }}>
            AWS, GitHub, Google Cloud, Docker
          </p>
          <h2 className="about__subtitle">Libraries :</h2>
          <p style={{ paddingBottom: "1rem" }}>
            NumPy, MatPlotLib, OpenCV, Pandas, TensorFlow
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;