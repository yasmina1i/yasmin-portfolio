import aa1 from "../assets/leadership/artists-anonymous-1.jpg";
import aa2 from "../assets/leadership/artists-anonymous-2.jpg";
import aa3 from "../assets/leadership/artists-anonymous-3.jpg";

const leadershipPhotos = [aa1, aa2, aa3];

function Leadership() {
  return (
    <section className="section" id="leadership">
      <p className="section-label">LEADERSHIP</p>
      <h2>Leadership</h2>

      <div className="leadership-header">
        <p className="leadership-role">Vice President</p>

        <h3>Artists Anonymous Club at NYU</h3>
      </div>

      <div className="leadership-gallery">
        {leadershipPhotos.map((photo, index) => (
          <img
            key={photo}
            src={photo}
            alt={`Artists Anonymous Club ${index + 1}`}
            className="leadership-photo"
          />
        ))}
      </div>
    </section>
  );
}

export default Leadership;