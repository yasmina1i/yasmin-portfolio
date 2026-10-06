import { skillGroups } from "../data/portfolioData";

function Skills() {
  return (
    <section className="section" id="skills">
      <p className="section-label">STACK</p>

      <h2>Stack</h2>

      <div className="skills-grid">
        {skillGroups.map((group) => (
          <article className="skill-group" key={group.title}>
            <h3>{group.title}</h3>

            <div className="skills-list">
              {group.skills.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Skills;