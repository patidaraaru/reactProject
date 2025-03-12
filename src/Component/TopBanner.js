import { Box, Button } from "@mui/material";
import React from "react";
import bannerImg from "../assets/river-cruises1734005344_2_11zon.png";


const TopBanner = () => {
  return (
    <Box sx={{ position: "relative" }} className="sliderSlide">
      <img src={bannerImg} alt="BannerImage" style={{ width: "100%" }} />
      <Box className="SwiperText">
        <h2 style={{ color: "#fff" }}>About Us</h2>
        <Button class="TheamBtn" mt={2}>
          Explore
        </Button>
      </Box>
    </Box>
  );
};

export default TopBanner;
