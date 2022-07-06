import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, EffectFade } from "swiper";
import { Col, Row } from "react-bootstrap";
import { SliderOneData } from "@/data";
SwiperCore.use([Navigation, EffectFade]);

const Slider = () => {
  const mainSlideOptions = {
    slidesPerView: 1,
    loop: true,
    effect: "fade",
    navigation: {
      nextEl: "#main-slider-next",
      prevEl: "#main-slider-prev",
    },
  };
  return (
    <section className="main-slider">
      <Swiper {...mainSlideOptions}>
        {SliderOneData.map(({ image, subText, title, button }, index) => (
          <SwiperSlide key={index}>
            <div
              className="image-layer"
              style={{ backgroundImage: `url(${image})` }}
            ></div>
            <div className="thm-container">
              <Row>
                <Col lg={12} className="text-center">
                  <p className="main-slider__subtext">{subText}</p>
                  <h3 className="main-slider__title">{title}</h3>
                  <Link
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    to={button.url}
                    className='cursor-pointer'
                  >
                    <a className={`thm-btn`}>
                      <span>{button.label}</span>
                    </a>
                  </Link>
                </Col>
              </Row>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Slider;
