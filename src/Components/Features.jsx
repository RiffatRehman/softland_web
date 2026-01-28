import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import features1 from '../assets/features1.svg';
import features2 from '../assets/features2.svg';
import features3 from '../assets/features3.svg';
import features4 from '../assets/features4.svg';

const Features = () => {
  return (
    <>
      {/* HEADING */}
      <div className="text-center my-5 px-3"id="features">
        <h2 className="fw-bold">Features</h2>
        <p className="text-muted">
          Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
          consectetur velit
        </p>
      </div>

      {/* SECTION 1 */}
      <section className="py-5">
        <Container xxl="xxl">
          <Row className="align-items-center gx-4 gy-5">
            <Col md={6}>
              <img
                src={features1}
                alt="Features"
                className="img-fluid w-100 mb-4 mb-md-0"
              />
            </Col>

            <Col md={6}>
              <h3 className="fw-bold fs-4 fs-md-3 mb-3">
                Voluptatem dignissimos provident quasi
              </h3>

              <p className="text-muted">
                Voluptatem dignissimos provident quasi corporis voluptates sit
                assumenda.
              </p>

              <ul className="list-unstyled mt-4">
                {[
                  'Ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                  'Duis aute irure dolor in reprehenderit in voluptate velit.',
                  'Ullam est qui quos consequatur eos accusamus.',
                ].map((item, i) => (
                  <li key={i} className="d-flex mb-3">
                    <FontAwesomeIcon
                      icon={faCheckCircle}
                      className="text-success me-2 mt-1"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </Col>
          </Row>
        </Container>
      </section>

      {/* SECTION 2 */}
      <section className="py-5 bg-light">
        <Container xxl="xxl">
          <Row className="align-items-center gx-4 gy-5">
            <Col md={6} className="order-2 order-md-1">
              <h3 className="fw-bold fs-4 fs-md-3 mb-3">
                Corporis temporibus maiores provident
              </h3>

              <p className="text-muted">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
              </p>

              <p className="text-muted">
                Ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse 
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                 non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
              </p>
            </Col>

            <Col md={6} className="order-1 order-md-2">
              <img
                src={features2}
                alt="Features"
                className="img-fluid w-100 mb-4 mb-md-0"
              />
            </Col>
          </Row>
        </Container>
      </section>

      {/* SECTION 3 */}
      <section className="py-5">
     <Container xxl="xxl">
          <Row className="align-items-center gx-4 gy-5">
            <Col md={6}>
              <img
                src={features3}
                alt="Features"
                className="img-fluid w-100 mb-4 mb-md-0"
              />
            </Col>

            <Col md={6}>
              <h3 className="fw-bold fs-4 fs-md-3 mb-3">
                Sunt consequatur ad ut est nulla
              </h3>

              <p className="text-muted">
                Cupiditate placeat est ipsam culpa. Sunt saepe odit aut quia dolor in reprehenderit in voluptate velit esse 
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                voluptatem.
              </p>

              <ul className="list-unstyled mt-4">
                {[
                  'Ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                  'Duis aute irure dolor in reprehenderit in voluptate velit.',
                  'Facilis ut et voluptatem aperiam.',
                ].map((item, i) => (
                  <li key={i} className="d-flex mb-3">
                    <FontAwesomeIcon
                      icon={faCheckCircle}
                      className="text-success me-2 mt-1"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </Col>
          </Row>
        </Container>
      </section>

      {/* SECTION 4 */}
      <section className="py-5 bg-light">
      <Container xxl="xxl">
          <Row className="align-items-center gx-4 gy-5">
            <Col md={6} className="order-2 order-md-1">
              <h3 className="fw-bold fs-4 fs-md-3 mb-3">
                Quas et necessitatibus eaque impedit
              </h3>

              <p className="text-muted">
                Ullamco laboris nisi ut aliquip ex ea commodo consequat.velit esse cillum dolore eu fugiat nulla pariatur. 
                Excepteur sint occaecat cupidatat non proident,
              </p>

              <p className="text-muted">
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                officia deserunt mollit.Ullamco laboris nisi ut aliquip ex ea commodo consequat.
                 Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </Col>

            <Col md={6} className="order-1 order-md-2">
              <img
                src={features4}
                alt="Features"
                className="img-fluid w-100 mb-4 mb-md-0"
              />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Features;
