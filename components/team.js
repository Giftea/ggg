import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
import { TeamOneData } from "@/data";
// import TeamCard from "./team-card";
import SwiperCore, { Autoplay, Navigation } from "swiper";
import "swiper/swiper-bundle.min.css";

SwiperCore.use([Autoplay, Navigation]);

const Team = () => {
  const carouselOptions = {
    spaceBetween: 0,
    loop: true,
    slidesPerView: 1,
    navigation: {
      nextEl: "#team-slider-next",
      prevEl: "#team-slider-prev",
    },
    autoplay: {
      delay: 5000,
    },
    breakpoints: {
      0: {
        spaceBetween: 0,
        slidesPerView: 1,
        slidesPerGroup: 1,
      },
    },
  };
  const { sectionContent, posts } = TeamOneData;
  return (
    <section id="partners" className="team-section sec-pad">
      <div className="thm-container">
        <div className="sec-title text-center">
          <span>{sectionContent.subText}</span>
          <h3 className="broad-title">{sectionContent.title}</h3>
          <p>{sectionContent.content}</p>
        </div>
        <h3 style={{ textAlign: "center" }}>Coming Soon...</h3>
      </div>
    </section>
  );
};

export default Team;
