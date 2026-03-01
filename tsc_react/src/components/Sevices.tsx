import "../Style/Services.css";

function Services() {
  return (
    <div className="services-container">
      <h1 className="services-title">Our Services</h1>
      <p className="services-subtitle">
        We provide high-quality digital solutions to help your business grow.
      </p>

      <div className="services-grid">
        <div className="service-card">
          <h2>Web Development</h2>
          <p>
            Build fast, responsive, and scalable web applications using
            modern technologies.
          </p>
        </div>

        <div className="service-card">
          <h2>App Development</h2>
          <p>
            Develop user-friendly mobile applications with smooth performance
            and clean UI.
          </p>
        </div>

        <div className="service-card">
          <h2>UI / UX Design</h2>
          <p>
            Create visually appealing designs that provide excellent user
            experience.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Services;