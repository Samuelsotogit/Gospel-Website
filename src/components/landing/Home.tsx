import React from "react";
import "./Home.css";
import mission from "../../assets/images/mission.jpeg";

const LandingPage = () => {
  return (
    <div className="landing-page-container">
      <section id="landing-page-text" className="text-container">
        <h2>The Gospel of Jesus Christ</h2>
        <p>
          This site presents the principles of the gospel of Jesus Christ, and
          invites you to ponder how you can live it more fully in your life.
        </p>
        <p>
          Note: This is my Worship Project. Each scripture here is connected to
          it by teaching the gospel of Jesus Christ through the Book of Mormon.
        </p>
      </section>
      <section id="landing-page-image-container" className="image-container">
        <img id="landing-page-image" src={mission} alt="Landing Page Visual" />
      </section>
    </div>
  );
};

export default LandingPage;
