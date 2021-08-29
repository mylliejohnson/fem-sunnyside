import logo from "./logo.svg";
import { Button, Navbar, Nav, Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <div className="App container-fluid">
      <div className="landing">
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
        <Row>
          <Col>
            <h2> Transform your brand </h2>
            <p>
              We are a full-service creative agency specializing in helping
              brands grow fast. Engage your clients through compelling visuals
              that do most of the marketing for you.
            </p>
            <a href="#">Learn more</a>
          </Col>
          <Col>2 of 2</Col>
        </Row>
        <Row>
          <Col>1 of 2</Col>
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
        <Row>
          <Col>
            <h3>Graphic design</h3>
            <p>
              Great design makes you memorable. We deliver artwork that
              underscores your brand message and captures potential clients’
              attention.
            </p>
          </Col>
          <Col>
            <h3>Photography</h3>
            <p>
              Increase your credibility by getting the most stunning,
              high-quality photos that improve your business image.
            </p>
          </Col>
        </Row>
      </Container>

      <Container>
        <h4>CLIENT TESTIMONIALS</h4>
        <Row>
          <Col>
            <img></img>
            <p>
              We put our trust in Sunnyside and they delivered, making sure our
              needs were met and deadlines were always hit.
            </p>
            <h6> Emily R.</h6>
            <span>Marketing Director</span>
          </Col>
          <Col>
            <img></img>
            <p>
              Sunnyside’s enthusiasm coupled with their keen interest in our
              brand’s success made it a satisfying and enjoyable experience.
            </p>
            <h6> Thomas S.</h6>
            <span> Chief Operating Officer</span>
          </Col>
          <Col>
            <img></img>
            <p>
              Incredible end result! Our sales increased over 400% when we
              worked with Sunnyside. Highly recommended!
            </p>
            <h6> Jennie F.</h6>
            <span> Business Owner</span>
          </Col>
        </Row>
      </Container>

      <Container>
        <Row>
          <Col>Image 1</Col>
          <Col>Image 2</Col>
          <Col>Image 3</Col>
          <Col>Image 4</Col>
        </Row>
      </Container>

      <Container>
        <h1>sunnyside</h1>
        <ul>
          <li>About</li>
          <li>Services</li>
          <li>Projects</li>
        </ul>
      </Container>
    </div>
  );
}

export default App;
