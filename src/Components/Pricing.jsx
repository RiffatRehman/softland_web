import '../Css/Style.css';
import React from "react";
import { Container, Row, Col, Button, Accordion } from "react-bootstrap";
import { FaRocket, FaStar, FaGem, FaCheck, FaTimes } from "react-icons/fa";

const plans = [
  {
    name: "Free Plan",
    price: "$0",
    duration: "/ month",
    icon: <FaRocket />,
    features: [
      { text: "Quam adipiscing vitae proin", available: true },
      { text: "Nec feugiat nisl pretium", available: true },
      { text: "Nulla at volutpat diam uteera", available: true },
      { text: "Pharetra massa massa ultricies", available: false },
      { text: "Massa ultricies mi quis hendrerit", available: false },
    ],
  },
  {
    name: "Business Plan",
    price: "$29",
    duration: "/ month",
    icon: <FaStar />,
    features: [
      { text: "Quam adipiscing vitae proin", available: true },
      { text: "Nec feugiat nisl pretium", available: true },
      { text: "Nulla at volutpat diam uteera", available: true },
      { text: "Pharetra massa massa ultricies", available: true },
      { text: "Massa ultricies mi quis hendrerit", available: true },
    ],
  },
  {
    name: "Developer Plan",
    price: "$49",
    duration: "/ month",
    icon: <FaGem />,
    features: [
      { text: "Quam adipiscing vitae proin", available: true },
      { text: "Nec feugiat nisl pretium", available: true },
      { text: "Nulla at volutpat diam uteera", available: true },
      { text: "Pharetra massa massa ultricies", available: true },
      { text: "Massa ultricies mi quis hendrerit", available: true },
    ],
  },
];

// Sample FAQ items
const faqs = [
  { question: "Non consectetur a erat nam at lectus urna duis?", answer: "Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non." },
  { question: "Feugiat scelerisque varius morbi enim nunc faucibus?", answer: "Dolor sit amet consectetur adipiscing elit pellentesque. Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
  { question: "Dolor sit amet consectetur adipiscing elit pellentesque?", answer: "Ac odio tempor orci dapibus. Aliquam eleifend mi in nulla." },
  { question: "Ac odio tempor orci dapibus. Aliquam eleifend mi in nulla?", answer: "Tempus quam pellentesque nec nam aliquam sem et tortor." },
  { question: "Perspiciatis quod quo quos nulla quo illum ullam?", answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." }
];

const Pricing = () => {
  return (
    <Container className="py-5" id="pricing">
      <h2 className="fw-bold mb-2 text-center my-5 w-100  px-3">Princing</h2>
      <p className="text-muted mb-4 text-center my-5  px-3">Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
      {/* Pricing Cards */}
      <Row className="g-4 justify-content-center my-5">
        {plans.map((plan, idx) => (
          <Col key={idx} xs={12} md={6} lg={4}>
            <div className="pricing-card text-center p-4 h-100">
              <div className="plan-icon mb-3">{plan.icon}</div>
              <h4 className="fw-bold mb-2">{plan.name}</h4>
              <h3 className="mb-3">
                <span className="price">{plan.price}</span>{" "}
                <span className="duration">{plan.duration}</span>
              </h3>
              <ul className="list-unstyled mb-4">
                {plan.features.map((f, i) => (
                  <li key={i} className={f.available ? "feature-available" : "feature-unavailable"}>
                    {f.available ? <FaCheck className="me-2" /> : <FaTimes className="me-2" />} {f.text}
                  </li>
                ))}
              </ul>
              <Button className="buy-btn w-25">Buy Now</Button>
            </div>
          </Col>
        ))}
      </Row>

      {/* FAQ Section below the cards */}
      <div className="mt-5 mx-auto" style={{ maxWidth: "100%" }}>
              <h2 className="fw-bold mb-2 text-center my-5 w-100  px-3">Frequently Asked Questions</h2>
      <p className="text-muted mb-4 text-center my-5  px-3">Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
        <Accordion defaultActiveKey="">
          {faqs.map((item, idx) => (
            <Accordion.Item eventKey={idx.toString()} key={idx}>
              <Accordion.Header style={{ color: '#559bcc', fontWeight: '500', transition: 'all 0.3s ease' }}>
                {item.question}
              </Accordion.Header>
              <Accordion.Body>{item.answer}</Accordion.Body>
            </Accordion.Item>
          ))}
        </Accordion>
      </div>
    </Container>
  );
};

export default Pricing;
