import profile from "../assets/profile.jpg";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-text hero-fade-in">
        <h1>Yasmin Ali</h1>

        <p className="hero-description">
          CS at NYU Tandon. 4th-year student with backend and systems expertise.
          Seeking Summer 2026 roles.
        </p>

        <div className="hero-buttons">
          <a
            href="/Yasmin_Ali_Resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="primary-button"
          >
            Download CV
          </a>

          <a
            href="https://www.linkedin.com/in/ali-yasmin-m/"
            target="_blank"
            rel="noreferrer"
            className="secondary-button"
          >
            LinkedIn
          </a>
        </div>
      </div>

      <div className="hero-image hero-image-animation">
        <img
          src={profile}
          alt="Yasmin Ali"
          className="profile-image"
        />
      </div>
    </section>
  );
}

export default Hero;