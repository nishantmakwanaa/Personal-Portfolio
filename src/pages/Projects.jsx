import { projects } from "../utils/project-cards";

const Projects = () => {
  const sortedProjects = [...projects].sort((a, b) =>
    a.title.localeCompare(b.title)
  );

  return (
    <section className="projects section" id="projects">
      <h2 className="section-title">Projects</h2>
      <div className="projects__container bd-grid">
        {sortedProjects.map((project, index) => (
          <div key={index} className="projects__item">
            <a
              href={project.link}
              className="projects__img"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={project.img}
                alt={project.alt}
                className="projects__img"
              />
              <span className="text-overlay">Project Link</span>
            </a>
            <div className="projects__description">
              <h3 className="projects__title">{project.title}</h3>
              <p className="projects__details">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
