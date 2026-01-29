import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import '../Css/Style.css';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: "#0f3979", color: "white", padding: "60px 0 20px 0" }}>
      <Container className="text-center">

        {/* Company Name */}
        <h2 className="fw-bold mb-2" style={{ fontSize: "32px" }}>SoftLand</h2>

        {/* Description */}
        <p className="mb-4 px-3" style={{ maxWidth: "600px", margin: "0 auto" }}>
          Et aut eum quis fuga eos sunt ipsa nihil. Labore corporis magni eligendi fuga maxime saepe commodi placeat.
        </p>

        {/* Social Icons */}
        <div className="d-flex justify-content-center gap-3 mb-4">
          {[FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube].map((Icon, idx) => (
            <a key={idx} href="#" className="social-icon d-flex align-items-center justify-content-center">
              <Icon />
            </a>
          ))}
        </div>

        {/* Bottom */}
        <Row className="pt-3 border-top border-white">
          <Col>
            &copy; {new Date().getFullYear()} SoftLand All Rights Reserved | Designed by <span style={{ color: "#559bcc", fontWeight: "500" }}>Riffat Rehman</span>
          </Col>
        </Row>

      </Container>

  
    </footer>
  );
};

export default Footer;
