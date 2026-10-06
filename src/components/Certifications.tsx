import { certifications } from "../data/portfolioData";

function Certifications() {
  return (
    <section className="section" id="certifications">
      <p className="section-label">CERTIFICATIONS</p>

      <h2>Certifications</h2>

      <div className="certifications-grid">
        {certifications.map((certification, index) => (
          <article
            className="certification-card"
            key={certification.name}
          >
            <img
              src={certification.logo}
              alt="Global Career Accelerator"
              className="certification-logo"
            />

            <div className="certification-number">
              {String(index + 1).padStart(2, "0")}
            </div>

            <h3>{certification.name}</h3>

            <p className="certification-description">
              {certification.description}
            </p>

            {certification.technicalSkills && (
              <p className="certification-skills">
                <strong>Technical skills:</strong>{" "}
                {certification.technicalSkills}
              </p>
            )}

            <p className="certification-skills">
              <strong>
                {certification.name === "Intercultural Skills Certification"
                  ? "Skills:"
                  : "Professional skills:"}
              </strong>{" "}
              {certification.professionalSkills}
            </p>

            {certification.credentialLink && (
              <a
                href={certification.credentialLink}
                target="_blank"
                rel="noreferrer"
                className="credential-link"
              >
                Show Credential ↗
              </a>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}

export default Certifications;