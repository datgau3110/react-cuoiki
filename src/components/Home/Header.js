
import React, { Component } from "react";
import "../../CSS/header_home.css";

class Header extends Component {
  render() {
    return (
      <header>
        <div className="overlay" />

        <video
          playsInline="playsinline"
          autoPlay="autoplay"
          muted="muted"
          loop="loop"
        >
          <source src="media/videoBackground.mp4" type="video/mp4" />
        </video>

        <div className="container h-100">
          <div className="d-flex h-100 text-center align-items-center">
            <div className="w-100 text-white">
              <h1 className="display-3 title_header">Real estate news</h1>
              <p className="lead mb-0">
                Stay up to date quickly with the latest news on the real market
                Vietnamese real estate
              </p>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
