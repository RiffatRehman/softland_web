import React from 'react';
import { Button, Card } from 'react-bootstrap';
import '../Css/Style.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLightbulb, faRocket, faShieldAlt, faUsers, faArrowRight } from '@fortawesome/free-solid-svg-icons';

const About = () => {
  const cardsData = [
    { icon: faLightbulb, title: "Eius provident", text: "Magni repellendus vel ullamrerum libero reprehenderit cumque. Ipsa sint sit. hic officia accusantium ipsa dolor omnis dolor voluptatem zig zang" },
    { icon: faRocket, title: "Magni repellendus", text: "Quis ducimus tempore rerum libero reprehenderit cumque. Ipsa sint sit.dolores impedit rerum libero reprehenderit cumque. Ipsa sint sit.et dolor cumque alias maxime" },
    { icon: faShieldAlt, title: "Quidem nulla", text: "Enim reiciendis minus etrerum libero reprehenderit cumque. Ipsa sint sit. rerum hic non.rerum libero reprehenderit cumque. Ipsa sint sit. Dicta quas cum quia maiores iure" },
    { icon: faUsers, title: "Assumenda incidunt", text: "Voluptatem tempora rerum libero reprehenderit cumque. Ipsa sint sit.rerum libero reprehenderit cumque. Ipsa sint sit. deleniti soluta" }
  ];

  return (
    <section id="about" className="about-section py-5">
      <div className="container">
        <div className="row align-items-center">

          {/* Left side */}
          <div className="col-lg-6 about-text mb-4">
            <Button className="btn-about">About Us</Button>
            <p>
              Ducimus rerum libero reprehenderit cumque. Ipsa sint sit. Quis ducimus tempore dolores impedit et dolor cumque alias maxime. Enim reiciendis minus et rerum hic non. Dicta quas cum quia maiores iure. Quidem nulla qui assumenda incidunt voluptatem tempora deleniti soluta.
            </p>
            <Button className="btn-readmore">
              Read More <FontAwesomeIcon icon={faArrowRight} className="arrow-icon"/>
            </Button>
          </div>

          {/* Right side - Cards */}
          <div className="col-lg-6 about-cards">
            <div className="row">
              {cardsData.map((card, index) => (
                <div className="col-md-6 mb-4" key={index}>
                  <Card className="about-card text-center p-3">
                    <div className="icon-wrapper mb-3">
                      <FontAwesomeIcon icon={card.icon} className="icon-fa" />
                    </div>
                    <Card.Title>{card.title}</Card.Title>
                    <Card.Text>{card.text}</Card.Text>
                  </Card>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;

