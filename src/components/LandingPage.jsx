import React from "react";

export default function LandingPage(){
    return(
    <section class="hero-section">
    <div class="hero-container">
      <div class="hero-text">
        <div class="rating">
          <span class="stars">★★★★★</span>
          <span class="rating-text">Rated 4.9/5</span>
        </div>

        <h1>Designing Future-Ready<br/>Digital Experiences</h1>

        <p>
          We craft immersive visuals, intuitive Designs and secure web ecosystems.
          Whether you're a startup, enterprise or creative agency, we synchronize
          your ideas into impactful digital realities.
        </p>

        <div class="hero-buttons">
          <button class="btn primary">
            Get in touch
            <span class="arrow">→</span>
          </button>
          <button class="btn secondary">What we do</button>
        </div>
      </div>

      <div class="hero-image"></div>
    </div>
  </section>
    );
}