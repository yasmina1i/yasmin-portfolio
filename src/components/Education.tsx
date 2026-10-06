import { useState } from "react";

import { education, studyAbroad } from "../data/portfolioData";

import london1 from "../assets/study-abroad/london-1.jpg";
import london2 from "../assets/study-abroad/london-2.jpg";
import london3 from "../assets/study-abroad/london-3.jpg";

const londonPhotos = [london1, london2, london3];

function Education() {
    const [currentPhoto, setCurrentPhoto] = useState(0);

    const nextPhoto = () => {
        setCurrentPhoto((currentPhoto + 1) % londonPhotos.length);
    };

    const previousPhoto = () => {
        setCurrentPhoto(
            (currentPhoto - 1 + londonPhotos.length) % londonPhotos.length
        );
    };
  return (
    <section className="section" id="education">
      <p className="section-label">EDUCATION</p>

      <h2>Education</h2>

      <div className="education-list">
        {education.map((item) => (
          <article className="education-card" key={item.school}>
            <div className="education-main">
              <h3>{item.school}</h3>

              <p className="education-degree">
                {item.degree}
              </p>

              <p>{item.minors}</p>

            <p>{item.gpa}</p>

            <p className="deans-list">
                {item.deansList}
            </p>

            <p className="education-coursework">
                {item.coursework}
            </p>
            </div>

            <div className="education-meta">
              <p>{item.date}</p>
            </div>
          </article>
        ))}

<article className="study-abroad-card">
  <div className="study-abroad-slideshow">
    <img
      src={londonPhotos[currentPhoto]}
      alt={`NYU London study abroad ${currentPhoto + 1}`}
      className="study-abroad-image"
    />

    <div className="slideshow-controls">
      <button
        type="button"
        onClick={previousPhoto}
        aria-label="Previous study abroad photo"
      >
        ← Previous
      </button>

      <span>
        {currentPhoto + 1} / {londonPhotos.length}
      </span>

      <button
        type="button"
        onClick={nextPhoto}
        aria-label="Next study abroad photo"
      >
        Next →
      </button>
    </div>
  </div>

  <div className="study-abroad-content">
    <p className="study-abroad-date">
      {studyAbroad.date}
    </p>

    <h3>{studyAbroad.title}</h3>

    <p>{studyAbroad.description}</p>
  </div>
</article>
      </div>
    </section>
  );
}

export default Education;