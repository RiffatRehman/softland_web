import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import '../Css/Style.css';


const Contact = () => {
  return (
    <Container className="py-5" id="contact">
       <h2 className="fw-bold mb-2 text-center my-5 w-100  px-3">Contact Us</h2>
      <p className="text-muted mb-4 text-center my-5  px-3">Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
      <Row className="g-4 my-5 px-5">
        {/* Left Side - Address */}
        <Col md={5}>
          
           

          {/* Address */}
          <div className="d-flex align-items-start mb-4">
            <div
              className="me-3 d-flex align-items-center justify-content-center"
              style={{
                width: "50px",
                height: "50px",
                borderRadius: "50%",
                border: "2px solid #559bcc",
                color: "#559bcc",
                transition: "all 0.3s",
                fontSize: "20px",
              }}
            >
              <FaMapMarkerAlt />
            </div>
            <div>
              <p className="mb-1 fw-bold">Address</p>
              <p className="mb-0">A108 Adam Street, New York, NY 535022</p>
            </div>
          </div>

          {/* Call Us */}
          <div className="d-flex align-items-start mb-4">
            <div
              className="me-3 d-flex align-items-center justify-content-center"
              style={{
                width: "50px",
                height: "50px",
                borderRadius: "50%",
                border: "2px solid #559bcc",
                color: "#559bcc",
                transition: "all 0.3s",
                fontSize: "20px",
              }}
            >
              <FaPhoneAlt />
            </div>
            <div>
              <p className="mb-1 fw-bold">Call Us</p>
              <p className="mb-0">+1 5589 55488 55</p>
            </div>
          </div>
        </Col>

        {/* Right Side - Form */}
        <Col md={7}>
          <Form>
            <Row className="mb-3">
              <Col md={6}>
                <Form.Control type="text" placeholder="Your Name" />
              </Col>
              <Col md={6}>
                <Form.Control type="email" placeholder="Your Email" />
              </Col>
            </Row>

            <Form.Group className="mb-3">
              <Form.Control type="text" placeholder="Subject" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Control as="textarea" rows={5} placeholder="Message" />
            </Form.Group>

            <Button
              type="submit"
              style={{
                backgroundColor: "#559bcc",
                border: "none",
                color: "white",
                padding: "10px 30px",
                fontWeight: "500",
              }}
              className="btn-hover"
            >
              Send Message
            </Button>
          </Form>
        </Col>
      </Row>

     
    </Container>
  );
};

export default Contact;
