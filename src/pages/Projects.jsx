import { useState, useRef } from "react";
import { projects } from "../utils/project-cards";

const Projects = () => {
  const [showMore, setShowMore] = useState(false);
  const projectsContainerRef = useRef(null);

  const sortedProjects = [...projects].sort((a, b) =>
    a.title.localeCompare(b.title)
  );

  const displayedProjects = showMore
    ? sortedProjects
    : sortedProjects.slice(0, 3);

  const handleShowToggle = () => {
    setShowMore(!showMore);
    if (showMore && projectsContainerRef.current) {
      projectsContainerRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
    }
  };

  return (
    <section className="projects section" id="projects">
      <h2 className="section-title">Projects</h2>
      <div ref={projectsContainerRef} className="projects__container bd-grid">
        {displayedProjects.map((project, index) => (
          <div
            key={index}
            className="projects__item border-2 border-black rounded-lg p-4"
          >
            <img
              src={project.img}
              alt={project.alt}
              className="projects__img box__shadow"
            />
            <div
              className="projects__buttons"
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "1rem",
                gap: "1rem",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  width: "50%",
                }}
              >
                <a
                  href={project.codelink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button"
                  style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  Code
                </a>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  width: "50%",
                }}
              >
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button"
                  style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  Live
                </a>
              </div>
            </div>
            <div className="projects__description">
              <h3 className="projects__title">{project.title}</h3>
              <p className="projects__details">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "5rem" }}
      >
        <button onClick={handleShowToggle} className="button">
          {showMore ? "Show Less" : "Show More"}
        </button>
      </div>
    </section>
  );
};

export default Projects;
