import { Box, Button } from "@mui/material";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Slider from "../Data/Slider";

const TopSwiper = () => {
  return (
    <Box>
      <Swiper
        modules={[Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{ delay: 1000, disableOnInteraction: false }}
        loop={true}
        
      >
        {Slider.map((item) => (
          <SwiperSlide key={item.id}>
            <Box className="sliderSlide">
              <img src={item.img} alt="logo" style={{ width: "100%" }} />
              <Box className="SwiperText">
                <h2>{item.title}</h2>
                <Button class="TheamBtn" mt={2}>
                  {item.btn}
                </Button>
              </Box>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default TopSwiper;
