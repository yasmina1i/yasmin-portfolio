import { experience } from "../data/portfolioData";

function Experience() {
  return (
    <section className="section" id="experience">
      <p className="section-label">EXPERIENCE</p>
      <h2>Experience</h2>

      <div className="experience-list">
        {experience.map((item) => (
          <article
            className={`experience-card ${
              item.image ? "experience-with-image" : ""
            }`}
            key={`${item.company}-${item.role}`}
          >
            {item.image && (
              <div className="experience-image-wrapper">
                <img
                  src={item.image}
                  alt={`${item.company} experience`}
                  className="experience-image"
                />
              </div>
            )}

            <div className="experience-content">
              <p className="experience-date">{item.dates}</p>

              <h3>{item.role}</h3>

              <p className="company-name">
                {item.company}, {item.location}
              </p>

              <ul className="experience-bullets">
                {item.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Experience;