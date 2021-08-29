import logo from "./logo.svg";
import { Button, Navbar, Nav, Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="landing" style={{backgroundImage:'url(/images/desktop/image-header.jpg)'}}>
        <Navbar>
          <Container>
            <h1>sunnyside</h1>
            <Nav>
              <Nav.Link>About</Nav.Link>
              <Nav.Link>Services</Nav.Link>
              <Nav.Link>Projects</Nav.Link>
              <Button>Contact</Button>
            </Nav>
          </Container>
        </Navbar>

        <div>
          <h2>WE ARE CREATIVES</h2>
        </div>
      </div>

      <Container>
        <Row className="all-features">
          <Col>
            <h2> Transform your brand </h2>
            <p>
              We are a full-service creative agency specializing in helping
              brands grow fast. Engage your clients through compelling visuals
              that do most of the marketing for you.
            </p>
            <a href="#">Learn more</a>
          </Col>
          <Col style={{backgroundImage:'url(/images/desktop/image-transform.jpg)'}} className="feature"></Col>
        </Row>
        <Row className="all-features">
          <Col style={{backgroundImage:'url(/images/desktop/image-stand-out.jpg)'}} className="feature"></Col>
          <Col>
            <h2>Stand out to the right audience</h2>
            <p>
              Using a collaborative formula of designers, researchers,
              photographers, videographers, and copywriters, we’ll build and
              extend your brand in digital places.
            </p>
            <a href="#">Learn more</a>
          </Col>
        </Row>
        <Row className="all-features">
          <Col style={{backgroundImage:'url(/images/desktop/image-graphic-design.jpg)'}} className="feature">
            <h3>Graphic design</h3>
            <p>
              Great design makes you memorable. We deliver artwork that
              underscores your brand message and captures potential clients’
              attention.
            </p>
          </Col>
          <Col style={{backgroundImage:'url(/images/desktop/image-photography.jpg)'}} className="feature">
            <h3>Photography</h3>
            <p>
              Increase your credibility by getting the most stunning,
              high-quality photos that improve your business image.
            </p>
          </Col>
        </Row>
      </Container>

      <Container className="testimonials">
        <h4>CLIENT TESTIMONIALS</h4>
        <Row>
          <Col>
            <div></div>
            <p>
              We put our trust in Sunnyside and they delivered, making sure our
              needs were met and deadlines were always hit.
            </p>
            <h6> Emily R.</h6>
            <span>Marketing Director</span>
          </Col>
          <Col>
            <div></div>
            <p>
              Sunnyside’s enthusiasm coupled with their keen interest in our
              brand’s success made it a satisfying and enjoyable experience.
            </p>
            <h6> Thomas S.</h6>
            <span> Chief Operating Officer</span>
          </Col>
          <Col>
            <div></div>
            <p>
              Incredible end result! Our sales increased over 400% when we
              worked with Sunnyside. Highly recommended!
            </p>
            <h6> Jennie F.</h6>
            <span> Business Owner</span>
          </Col>
        </Row>
      </Container>

<div className="footer">
      <div className='gallery'> 
            <img src="/images/desktop/image-gallery-milkbottles.jpg" />
            <img src="/images/desktop/image-gallery-orange.jpg" />
            <img src="/images/desktop/image-gallery-cone.jpg" />
            <img src="/images/desktop/image-gallery-sugarcubes.jpg" />
      </div>

      <footer>
        <h1>sunnyside</h1>
        <ul>
          <li>About</li>
          <li>Services</li>
          <li>Projects</li>
        </ul>
      </footer>
    </div>
  </div>
  );
}

export default App;
