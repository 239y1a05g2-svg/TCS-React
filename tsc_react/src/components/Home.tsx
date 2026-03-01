import "../Style/Home.css";

function Home() {
  return (
    <div className="home-container">
      <div className="home-card">

        <h1>Welcome to MadhuTech</h1>

        <p>
          MadhuTech is a growing tech platform where we build simple,
          fast, and user-friendly web applications.
          We focus on learning, building, and improving skills step by step.
        </p>

        <p>
          We mainly work with
          <strong> React </strong>,
          <strong> JavaScript </strong>, and
          <strong> TypeScript </strong>
          to create modern web solutions.
        </p>

        <img
          src="https://swaritadvisors.com/learning/wp-content/uploads/2018/06/Private-Limited-Company.jpg"
          alt="MadhuTech Home"
          className="home-image"
        />

        <button className="home-btn">
          Explore MadhuTech
        </button>

      </div>
    </div>
  );
}

export default Home;
