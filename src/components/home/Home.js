import React from "react";
import Video from "../../assets/video.mp4";

import "./Home.css";

function Hero() {

    
  // Scroll down arrows
  function moveDown() {
    window.scrollBy(100, 800);
  }

  return (
    <div className="hero">
      <div className="content">
        <video
          className="video"
          playsinline="playsinline"
          autoplay="autoplay"
          muted="muted"
          loop="loop"
        >
          <source src={Video} type="video/mp4" />
        </video>
        <svg onClick={moveDown} class="arrows">
          <path class="a1" d="M0 0 L30 32 L60 0"></path>
          <path class="a2" d="M0 20 L30 52 L60 20"></path>
          <path class="a3" d="M0 40 L30 72 L60 40"></path>
        </svg>
      </div>
    </div>
  );
}

export default Hero;
