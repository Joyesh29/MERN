import React from "react";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import "./LandingPage.css";

const LandingPage = () => {
  return (
    <div className="main">
      <Container>
        <Row>
          <div className="intro-text">
            <div>
              <h1 className="title">Welcome to My Notes</h1>
              <p className="subtitle">
                <strong>MyNotes</strong>, is a simple note taking app that
                allows you to create and save notes.
              </p>
            </div>
            <div className="buttonConatiner">
              <a href="'/login">
                <button size="lg" className="landingbutton">
                  Login
                </button>
              </a>
              <a href="'/register">
                <button
                  size="lg"
                  className="landingbutton"
                  varient="outline-primary"
                >
                  Signup
                </button>
              </a>
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default LandingPage;
