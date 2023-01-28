import React from "react";
import "./style.scss";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

function HeroSection() {
  return (
    <section className="hero_section">
      <div className="container">
        <div className="hero_section_wrapper">
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={3}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
          >
            <SwiperSlide className="slide">
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  gap: "20px",
                }}
              >
                <hr
                  style={{
                    width: "20%",
                    height: "2px",
                    border: "none",
                    background: "red",
                  }}
                />
                <h3>committed to success</h3>
              </div>
              <div style={{ width: "160%" }} className="wrapper_content">
                <h1>we help to grow your bussiness</h1>
                <p>
                  Mollit anim laborum.Dvcuis aute serunt iruxvfg dhjkolohr indd
                  re voluptate
                </p>
              </div>
              <button>our services</button>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
