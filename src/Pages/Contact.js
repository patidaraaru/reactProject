import { Box, Button, Container, Typography } from "@mui/material";
import React, { useState } from "react";
import bannerImg from "../assets/river-cruises1734005344_2_11zon.png";

const Contact = () => {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
  });
  const HandleChange = (event) => {
    const { name, value } = event.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };
  const HandleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <>
      <Box sx={{ position: "relative" }} className="sliderSlide">
        <img src={bannerImg} alt="BannerImage" style={{ width: "100%" }} />
        <Box className="SwiperText">
          <h2 style={{ color: "#fff" }}>Contact Us</h2>
          <Button class="TheamBtn" mt={2}>
            Explore
          </Button>
        </Box>
      </Box>
      <Container maxWidth="lg" sx={{ pt: 2 }}>
        <form onSubmit={HandleSubmit}>
          <Box className="InputBox">
            <Typography component="label" htmlFor="UserName">
              First Name
            </Typography>
            <input
              type="text"
              placeholder="Enter your name"
              value={user.firstName}
              onChange={HandleChange}
              required
              name="firstName"
            />
          </Box>
          <Box className="InputBox" sx={{ pt: 2 }}>
            <Typography component="label" htmlFor="UserName">
              Last Name
            </Typography>
            <input
              type="text"
              placeholder="Enter your name"
              value={user.lastName}
              onChange={HandleChange}
              required
              name="lastName"
            />
          </Box>
          <Box className="InputBox" sx={{ pt: 2 }}>
            <Typography component="label" htmlFor="UserName">
              Email
            </Typography>
            <input
              type="email"
              placeholder="Enter your email"
              value={user.email}
              onChange={HandleChange}
              required
              name="email"
            />
          </Box>
          <Box className="InputBox" sx={{ pt: 2 }}>
            <Typography component="label" htmlFor="UserName">
              Phone
            </Typography>
            <input
              type="number"
              placeholder="Enter your name"
              value={user.phoneNumber}
              onChange={HandleChange}
              required
              name="phoneNumber"
            />
          </Box>
          <Box sx={{ pt: 3 }}>
            <button type="submit" className="TheamBtn">
              Submit
            </button>
          </Box>
        </form>
        <p>
          Name : {user.firstName}<br></br>
          Surname : {user.lastName}<br></br>
          Email : {user.email}<br></br>
          Phone : {user.phoneNumber}<br></br>
        </p>
      </Container>
    </>
  );
};

export default Contact;
