import React from "react";
import { FaLinkedin, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <div className="all_container top-border  mt-5 py-3">
      <div className="links div">
        <Link className="link yellow_color" to="/">
          _home
        </Link>
        <Link className="link yellow_color" to="/about">
          _about
        </Link>
        <Link className="link yellow_color" to="/portfolio">
          _projects
        </Link>
        <Link className="link yellow_color" to="/services">
          _services
        </Link>
        <Link className="link yellow_color" to="/contact">
          _contact
        </Link>
      </div>
      <div className="social d-flex align-items-center justify-content-center gap-3 div">
        <a
          href="https://www.linkedin.com/in/patel-jash/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="white_color mid_fonts" />
        </a>
        <a
          href="https://www.instagram.com/_.jash._6566/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram className="white_color mid_fonts" />
        </a>
      </div>
      {/* <div className="div"> */}
      <p className="yellow_color vsmall_fonts">
        Copyright &#169; 2024 Jash Patel
      </p>
      {/* </div> */}
    </div>
  );
}

export default Footer;
