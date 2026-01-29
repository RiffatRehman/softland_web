import React, { useState, useEffect, useRef } from 'react';
import { Container, Button, Modal } from 'react-bootstrap';
import { FaStar } from "react-icons/fa";

// Gallery images
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

// Testimonial images
import person1 from '../assets/person1.jpg';
import person2 from '../assets/person2.jpg';
import person3 from '../assets/person3.jpg';
import person4 from '../assets/person4.jpg';
import person5 from '../assets/person5.jpg';

const testimonials = [
  { img: person1, name: "John Smith", position: "CEO", rating: 5, quote: "Outstanding leadership and vision.\nThe team delivered exceptional results with professionalism and dedication." },
  { img: person2, name: "Ayan Sheikh", position: "Project Manager", rating: 4, quote: "Project execution was smooth and well-organized.\nTimelines were respected and communication remained clear throughout." },
  { img: person3, name: "Riffat Sheikh", position: "Web Developer", rating: 5, quote: "Clean, scalable, and efficient code delivery.\nUI implementation and technical communication were truly impressive." },
  { img: person4, name: "Ali Raza", position: "Web Developer", rating: 5, quote: "Strong problem-solving skills with modern development practices.\nDelivered high-quality features with attention to detail." },
  { img: person5, name: "Sarah Khan", position: "UI / UX Designer", rating: 5, quote: "User-focused design with a modern aesthetic.\nEvery interface was intuitive, visually pleasing, and well-researched." }
];

const images = [
  galleryimg1, galleryimg2, galleryimg3, galleryimg4, galleryimg5, galleryimg6,
  galleryimg7, galleryimg8, galleryimg9, galleryimg10, galleryimg11, galleryimg12
];

const Gallery = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const sliderRef = useRef(null);
  const [testimonialIndex, setTestimonialIndex] = useState(0);

  const handleThumbnailClick = (idx) => {
    setActiveIndex(idx);
    setShowModal(true);
  };

  const handleNext = () => setActiveIndex((prev) => (prev + 1) % images.length);
  const handlePrev = () => setActiveIndex((prev) => (prev - 1 + images.length) % images.length);
  const handleDotClick = (idx) => setActiveIndex(idx);

  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => handleNext(), 3000);
      return () => clearInterval(interval);
    }
  }, [isPaused]);

  useEffect(() => {
    if (!sliderRef.current) return;
    const cardWidth = 250 + 10;
    sliderRef.current.scrollTo({ left: activeIndex * cardWidth, behavior: 'smooth' });
  }, [activeIndex]);

  useEffect(() => {
    const timer = setInterval(() => setTestimonialIndex((prev) => (prev + 1) % testimonials.length), 3500);
    return () => clearInterval(timer);
  }, []);

  return (
    <Container className="py-5 text-center" id="gallery">
      <h2 className="fw-bold mb-2  px-3">Gallery Slider</h2>
      <p className="text-muted mb-4 my-5">Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>

      {/* Gallery Slider */}
      <div
        ref={sliderRef}
        className="d-flex mb-3 my-5  px-3"
        style={{ overflow: 'hidden', gap: '10px', scrollBehavior: 'smooth', justifyContent: 'center' }}
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
            <img src={img} alt={`Thumb ${idx + 1}`} style={{ height: '430px', width: '220px', objectFit: 'cover', borderRadius: '5px', display: 'block' }} />
          </div>
        ))}
      </div>

      {/* Slider Dots */}
      <div className="d-flex justify-content-center mb-4" style={{ gap: '8px' }}>
        {images.map((_, idx) => (
          <span
            key={idx}
            onClick={() => handleDotClick(idx)}
            style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: activeIndex === idx ? '#0d6efd' : '#ccc', cursor: 'pointer', display: 'inline-block' }}
          />
        ))}
      </div>

      {/* Modal */}
      <Modal show={showModal} onHide={() => setShowModal(false)} centered size="xl">
        <Modal.Body className="p-0 position-relative text-center" onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)}>
          <img src={images[activeIndex]} alt={`Image ${activeIndex + 1}`} className="img-fluid w-100" style={{ maxHeight: '600px', objectFit: 'contain' }} />
          <Button variant="light" className="position-absolute top-50 start-0 translate-middle-y" onClick={handlePrev} style={{ opacity: 0.7 }}>&#10094;</Button>
          <Button variant="light" className="position-absolute top-50 end-0 translate-middle-y" onClick={handleNext} style={{ opacity: 0.7 }}>&#10095;</Button>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>Close</Button>
        </Modal.Footer>
      </Modal>

      {/* ================= Testimonial Section ================= */}
      <div className="py-5 mt-5 text-center">
        <h2 className="fw-bold mb-3">Testimonials</h2>
        <p className="text-muted mb-4">Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
        <div className="mx-auto" style={{ width: "100%", padding: "35px 25px", borderRadius: "20px", backgroundColor: "#f1f3f8", backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)", border: "1px solid rgba(255, 255, 255, 0.35)" }}>
          <img src={testimonials[testimonialIndex].img} alt="" style={{ width: "110px", height: "110px", borderRadius: "50%", objectFit: "cover" }} />
          <h5 className="fw-bold mt-3">{testimonials[testimonialIndex].name}</h5>
          <p className="text-muted mb-1">{testimonials[testimonialIndex].position}</p>
          <div className="mb-3">{[...Array(testimonials[testimonialIndex].rating)].map((_, i) => <FaStar key={i} color="#ffc107" />)}</div>
          <p style={{ color: "silver", fontStyle: "italic", whiteSpace: "pre-line" }}>“{testimonials[testimonialIndex].quote}”</p>
          <div className="d-flex justify-content-center mt-4 gap-2">
            {testimonials.map((_, i) => (
              <span key={i} onClick={() => setTestimonialIndex(i)} style={{ width: "10px", height: "10px", borderRadius: "50%", background: testimonialIndex === i ? "#0d6efd" : "#ccc", cursor: "pointer", display: "inline-block" }} />
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Gallery;
