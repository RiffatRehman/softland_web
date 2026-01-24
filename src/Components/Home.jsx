import React from 'react';
import phone_1 from '../assets/phone_1.png';
import phone_2 from '../assets/phone_2.png';
import { Button } from 'react-bootstrap';
import '../Css/Style.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGooglePlay, faAppStoreIos } from '@fortawesome/free-brands-svg-icons';

const Home = () => {
  return (
    <section id="home" className="hero-section">
      <div className="container">
        <div className="row align-items-center">
          
          {/* Left side - Heading + Buttons */}
          <div className="col-md-6 hero-text text-start">
            <h1>Promote Your App with SoftLand</h1>
            <p>We are a team of talented designers making websites with Bootstrap</p>
            
            <div className="hero-buttons">
              <Button variant="outline-light" className="hero-btn">
                <FontAwesomeIcon icon={faGooglePlay} /> Google Play
              </Button>
              
              <Button variant="outline-light" className="hero-btn">
                <FontAwesomeIcon icon={faAppStoreIos} /> App Store
              </Button>
            </div>
          </div>

          {/* Right side - Images */}
          <div className="col-md-6 hero-images position-relative">
            <img src={phone_2} alt="Hero 1" className="img-fluid img1" />
            <img src={phone_1} alt="Hero 2" className="img-fluid img2" />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Home;
