import React from "react";
import { Col, Row } from "react-bootstrap";
import { AboutTwoData } from "@/data";
import { Link, animateScroll as scroll } from "react-scroll";

const About = () => {
  const { sectionContent, content, url, image } = AboutTwoData;
  return (
    <section id="about" className="welcome-section sec-pad">
      <div className="thm-container">
        <Row>
          <Col lg={6}>
            <div className="welcome-img-box">
              <img src={image} className="w-100" alt="Awesome Image" />
            </div>
          </Col>
          <Col lg={6}>
            <div className="welcome-content">
              <div className="title">
                <p>{sectionContent.subText}</p>
                <h3 className="broad-title">{sectionContent.title}</h3>
              </div>
              <p>{content}</p>
              <Link
                activeClass="active"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to={url}
                className="cursor-pointer"
              >
                <a className="thm-btn">Get Started</a>
              </Link>
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default About;
