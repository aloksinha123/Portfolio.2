export default function ProjectCard({ project }) {
  return (
    <article className="card">
      <div className="card-body">
        <h3 className="card-title">{project.name}</h3>
        <p className="card-desc">{project.desc}</p>
        <div className="card-links">
          {project.github && <a href={project.github} target="_blank" rel="noreferrer"><i className="fab fa-github"></i> GitHub</a>}
          {project.live && <a href={project.live} target="_blank" rel="noreferrer"><i className="fas fa-external-link-alt"></i> Live</a>}
        </div>
      </div>
    </article>
  );
}
