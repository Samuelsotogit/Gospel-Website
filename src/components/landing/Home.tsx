import { useEffect, useState } from "react";
import React from "react";
import narratives from "../../data/narratives.json";
import "./Home.css";

const LandingPage = () => {
  return (
    <div className="landing-page-container">
      <section id="landing-page-text" className="text-container">
        <h2>The Gospel of Jesus Christ</h2>
        <p>
          This site presents the principles of the gospel of Jesus Christ, and
          invites you to ponder how you can live it more fully in your life.
        </p>
      </section>
      <section id="landing-page-image-container" className="image-container">
        <img
          id="landing-page-image"
          src="/images/mission.jpeg"
          alt="Landing Page Visual"
        />
      </section>
    </div>
  );
};

export default LandingPage;
