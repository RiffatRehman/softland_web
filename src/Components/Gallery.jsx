import React, { useState, useEffect, useRef } from 'react';
import { Container, Button, Modal } from 'react-bootstrap';
import galleryimg1 from '../assets/galleryimg1.png';
import galleryimg2 from '../assets/galleryimg2.png';
import galleryimg3 from '../assets/galleryimg3.png';
import galleryimg4 from '../assets/galleryimg4.png';
import galleryimg5 from '../assets/galleryimg5.png';
import galleryimg6 from '../assets/galleryimg6.png';
import galleryimg7 from '../assets/galleryimg7.png';
import galleryimg8 from '../assets/galleryimg8.png';
import galleryimg9 from '../assets/galleryimg9.png';
import galleryimg10 from '../assets/galleryimg10.png';
import galleryimg11 from '../assets/galleryimg11.png';
import galleryimg12 from '../assets/galleryimg12.png';

const images = [
  galleryimg1, galleryimg2, galleryimg3, galleryimg4, galleryimg5, galleryimg6,
  galleryimg7, galleryimg8, galleryimg9, galleryimg10, galleryimg11, galleryimg12
];

const Gallery = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const sliderRef = useRef(null);

  const handleThumbnailClick = (idx) => {
    setActiveIndex(idx);
    setShowModal(true);
  };

  const handleNext = () => setActiveIndex((prev) => (prev + 1) % images.length);
  const handlePrev = () => setActiveIndex((prev) => (prev - 1 + images.length) % images.length);

  const handleDotClick = (idx) => setActiveIndex(idx);

  // Auto-slide activeIndex
  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        handleNext();
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [isPaused]);

  // Auto-scroll slider
  useEffect(() => {
    if (!sliderRef.current) return;
    const container = sliderRef.current;
    const cardWidth = 250 + 10; // card width + gap
    container.scrollTo({
      left: activeIndex * cardWidth,
      behavior: 'smooth'
    });
  }, [activeIndex]);

  return (
    <Container className="py-5 text-center" id="gallery">
      <h2 className="fw-bold mb-2">Gallery Slider</h2>
      <p className="text-muted mb-4">Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>

      {/* Slider */}
      <div
        ref={sliderRef}
        className="d-flex mb-3"
        style={{
          overflow: 'hidden',
          gap: '10px',
          scrollBehavior: 'smooth',
          justifyContent: 'center',
        }}
      >
        {images.map((img, idx) => (
          <div
            key={idx}
            onClick={() => handleThumbnailClick(idx)}
            style={{
              flex: '0 0 auto',
              border: activeIndex === idx ? '4px solid #0d6efd' : '1px solid #ccc',
              borderRadius: '8px',
              cursor: 'pointer',
              transition: 'transform 0.3s',
              transform: activeIndex === idx ? 'scale(1.05)' : 'scale(1)',
            }}
          >
            <img
              src={img}
              alt={`Thumb ${idx + 1}`}
              style={{
                height: '430px',
                width: '220px',
                objectFit: 'cover',
                borderRadius: '5px',
                display: 'block',
              }}
            />
          </div>
        ))}
      </div>

      {/* Dots */}
      <div className="d-flex justify-content-center mb-4" style={{ gap: '8px' }}>
        {images.map((_, idx) => (
          <span
            key={idx}
            onClick={() => handleDotClick(idx)}
            style={{
              width: '12px',
              height: '12px',
              borderRadius: '50%',
              backgroundColor: activeIndex === idx ? '#0d6efd' : '#ccc',
              cursor: 'pointer',
              display: 'inline-block',
            }}
          />
        ))}
      </div>

      {/* Modal */}
      <Modal
        show={showModal}
        onHide={() => setShowModal(false)}
        centered
        size="xl"
      >
        <Modal.Body
          className="p-0 position-relative text-center"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <img
            src={images[activeIndex]}
            alt={`Image ${activeIndex + 1}`}
            className="img-fluid w-100"
            style={{ maxHeight: '600px', objectFit: 'contain' }}
          />
          <Button
            variant="light"
            className="position-absolute top-50 start-0 translate-middle-y"
            onClick={handlePrev}
            style={{ opacity: 0.7 }}
          >
            &#10094;
          </Button>
          <Button
            variant="light"
            className="position-absolute top-50 end-0 translate-middle-y"
            onClick={handleNext}
            style={{ opacity: 0.7 }}
          >
            &#10095;
          </Button>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>Close</Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default Gallery;
