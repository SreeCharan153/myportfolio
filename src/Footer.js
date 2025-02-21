import React from "react";
import { Link } from "react-router-dom";
import { FaHome, FaProjectDiagram, FaCertificate, FaEnvelope, FaGithub, FaLinkedin, FaGoogle } from "react-icons/fa";

function Footer() {
  return (
    <footer style={{ backgroundColor: "#111", color: "#fff", padding: "20px 0", textAlign: "center" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 20px" }}>
        
        <h2 style={{ fontSize: "20px", marginBottom: "5px" }}>Portfolio</h2>
        <p style={{ fontSize: "14px", color: "#bbb" }}>Full-Stack Developer | Cybersecurity Enthusiast</p>

        {/* Navigation Links */}
        <div style={{ margin: "15px 0", display: "flex", justifyContent: "center", gap: "20px" }}>
          <Link to="/" style={{ color: "#bbb", textDecoration: "none", display: "flex", alignItems: "center", gap: "5px" }}>
            <FaHome /> Home
          </Link>
          <Link to="/projects" style={{ color: "#bbb", textDecoration: "none", display: "flex", alignItems: "center", gap: "5px" }}>
            <FaProjectDiagram /> Projects
          </Link>
          <Link to="/certifications" style={{ color: "#bbb", textDecoration: "none", display: "flex", alignItems: "center", gap: "5px" }}>
            <FaCertificate /> Certifications
          </Link>
          <Link to="/contact" style={{ color: "#bbb", textDecoration: "none", display: "flex", alignItems: "center", gap: "5px" }}>
            <FaEnvelope /> Contact
          </Link>
        </div>

        {/* Social Links */}
        <div style={{ marginTop: "15px", display: "flex", justifyContent: "center", gap: "20px" }}>
          <a href="https://github.com/SreeCharan153" target="_blank" rel="noopener noreferrer" style={{ color: "#bbb", fontSize: "24px" }}>
            <FaGithub />
          </a>
          <a href="mailto:sreecharan750@gmail.com" style={{ color: "#bbb", fontSize: "24px" }}>
            <FaGoogle />
          </a>
          <a href="https://www.linkedin.com/in/sree-charan-316692275/" target="_blank" rel="noopener noreferrer" style={{ color: "#bbb", fontSize: "24px" }}>
            <FaLinkedin />
          </a>
        </div>
 
        <p style={{ fontSize: "12px", color: "#777", marginTop: "15px" }}>
          © {new Date().getFullYear()} Portfolio. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
