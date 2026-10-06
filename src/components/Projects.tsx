import { projects } from "../data/portfolioData";

function Projects() {
  return (
    <section className="section" id="projects">
      <p className="section-label">PROJECTS</p>

      <h2>Projects</h2>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <article className="project-card" key={project.title}>
            <div className="project-number">
              {String(index + 1).padStart(2, "0")}
            </div>

            <div className="project-content">
              <p className="project-technologies">
                {project.technologies}
              </p>

              <h3>{project.title}</h3>

              <p className="project-description">
                {project.description}
              </p>
            </div>

            <div className="project-footer">
              {project.link ? (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="project-link"
                >
                  {project.linkText}
                  <span aria-hidden="true"> ↗</span>
                </a>
              ) : (
                <span className="project-link project-link-disabled">
                  {project.linkText}
                </span>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;