import React, { Fragment } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import { Col, Row } from "react-bootstrap";
import {
  FooterAboutData,
  FooterLinksData,
  FooterContactData,
  FooterBottomData,
} from "@/data";

const Footer = () => {
  return (
    <Fragment>
      <footer id="contact" className="footer">
        <div className="thm-container">
          <Row>
            <Col lg={4}>
              <div className="footer-widget about-widget">
                <div className="title">
                  <h3>{FooterAboutData.title}</h3>
                </div>
                <p>{FooterAboutData.text}</p>

                <form
                  action="mailto:info@gg-group.io"
                  className="footer-subscribe"
                >
                  <input type="text" name="email" placeholder="Email address" />
                  <button type="submit">
                    <i className="fa fa-angle-right"></i>
                  </button>
                </form>
              </div>
            </Col>
            <Col lg={4}>
              <div className="footer-widget links-widget explore">
                <div className="title">
                  <h3>{FooterLinksData.title}</h3>
                </div>
                <ul className="link-list">
                  {FooterLinksData.links.map(({ url, label }, index) => {
                    return (
                      <li key={index}>
                        <Link
                          activeClass="active"
                          spy={true}
                          smooth={true}
                          offset={-70}
                          duration={500}
                          to={url}
                        >
                          <>{label}</>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </Col>
            <Col lg={4}>
              <div className="footer-widget contact-widget">
                <div className="title">
                  <h3>{FooterContactData.title}</h3>
                </div>
                {FooterContactData.infos.map(({ text, url }, index) => {
                  return (
                    <p key={index}>
                      <a href={url}>{text}</a>
                    </p>
                  );
                })}
              </div>
            </Col>
          </Row>
        </div>
      </footer>
      <div className="footer-bottom">
        <div className="thm-container clearfix">
          <div className="float-left copy-text">
            <p>
              &copy; Copyright {new Date().getFullYear()} Created by{" "}
              <a href="#">Global Guidance Group</a>
            </p>
          </div>
          <div className="social-box float-right">
            {FooterBottomData.social.map(({ icon, url }, index) => {
              return (
                <a key={index} href={url} className={`${icon} hvr-pulse`}></a>
              );
            })}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Footer;
