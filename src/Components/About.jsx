import React from 'react';
import { Button, Card } from 'react-bootstrap';
import '../Css/Style.css';

import card1 from '../assets/card1.png';
import card2 from '../assets/card2.png';
import card3 from '../assets/card3.png';
import steps from '../assets/steps.svg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faLightbulb, faRocket, faShieldAlt, faUsers, faArrowRight, 
  faSun, faHardDrive, faPrint 
} from '@fortawesome/free-solid-svg-icons';

const About = () => {

  const aboutCardsData = [
    { icon: faLightbulb, title: "Eius provident", text: "Magni repellendus vel ullamrerum libero reprehenderit cumque. Ipsa sint sit. hic officia accusantium ipsa dolor omnis dolor voluptatem zig zang" },
    { icon: faRocket, title: "Magni repellendus", text: "Quis ducimus tempore rerum libero reprehenderit cumque. Ipsa sint sit.dolores impedit rerum libero reprehenderit cumque. Ipsa sint sit.et dolor cumque alias maxime" },
    { icon: faShieldAlt, title: "Quidem nulla", text: "Enim reiciendis minus etrerum libero reprehenderit cumque. Ipsa sint sit. rerum hic non.rerum libero reprehenderit cumque. Ipsa sint sit. Dicta quas cum quia maiores iure" },
    { icon: faUsers, title: "Assumenda incidunt", text: "Voluptatem tempora rerum libero reprehenderit cumque. Ipsa sint sit.rerum libero reprehenderit cumque. Ipsa sint sit. deleniti soluta" }
  ];

  const softlandCards = [
    { img: card2, icon: faSun, title: "Explore Your Team", text: "Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor ut labore et dolore magna aliqua. Ut enim ad minim veniam." },
    { img: card1, icon: faHardDrive, title: "Digital Whiteboard", text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem doloremque laudantium, totam rem aperiam." },
    { img: card3, icon: faPrint, title: "Design To Development", text: "Nemo enim ipsam voluptatem quia voluptas sit aut odit aut fugit, sed quia magni dolores eos qui ratione voluptatem sequi nesciunt." }
  ];

  const horizontalCardsData = [
    { number: "01", title: "Sign Up", text: "Ulamco laboris nisi ut aliquip ex ea commodo consequat. Et consectetur ducimus vero placeat" },
    { number: "02", title: "Repellat Nihil", text: "Dolorem est fugiat occaecati voluptate velit esse. Dicta veritatis dolor quod et vel dire leno para dest" },
    { number: "03", title: "Ad ad velit qui", text: "Molestiae officiis omnis illo asperiores. Aut doloribus vitae sunt debitis quo vel nam quis" }
  ];

  return (
    <section id="about" className="about-section py-5">
      <div className="container">
        {/* About top section */}
        <div className="row align-items-center">
          <div className="col-lg-6 about-text mb-4">
            <Button className="btn-about">About Us</Button>
            <p>
              Ducimus rerum libero reprehenderit cumque. Ipsa sint sit. Quis ducimus tempore dolores impedit et dolor cumque alias maxime. Enim reiciendis minus et rerum hic non. Dicta quas cum quia maiores iure. Quidem nulla qui assumenda incidunt voluptatem tempora deleniti soluta.
            </p>
            <Button className="btn-readmore">
              Read More <FontAwesomeIcon icon={faArrowRight} className="arrow-icon"/>
            </Button>
          </div>

          <div className="col-lg-6 about-cards">
            <div className="row">
              {aboutCardsData.map((card, index) => (
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

      {/* SoftLand Cards */}
      <div className="text-center my-5">
        <h2>Save your time to using SoftLand</h2>
        <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>

        <div className="d-flex justify-content-center flex-wrap gap-4 mt-4">
          {softlandCards.map((card, index) => (
            <Card className="softland-card text-center p-4" key={index} style={{ width: '22rem', height: '28rem' }}>
              <Card.Img variant="top" src={card.img} />
              <div className="icon-circle mt-3">
                <FontAwesomeIcon icon={card.icon} className="icon-fa" />
              </div>
              <Card.Body>
                <Card.Title>{card.title}</Card.Title>
                <Card.Text>{card.text}</Card.Text>
              </Card.Body>
            </Card>
          ))}
        </div>
      </div>

      {/* Center Feature Image */}
      <div className="text-center my-5">
        <img src={steps} alt="Feature Image" className="center-img" />
      </div>

      {/* Horizontal 3-step cards */}
      <div className="d-flex justify-content-center gap-4 my-5 flex-wrap">
        {horizontalCardsData.map((card, index) => (
          <Card className="horizontal-card text-start p-4" key={index}>
            <div className="card-number mb-2" style={{ color: '#559bcc', fontWeight: 'bold', fontSize: '1.5rem' }}>{card.number}</div>
            <Card.Title>{card.title}</Card.Title>
            <Card.Text style={{ color: 'silver' }}>{card.text}</Card.Text>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default About;
