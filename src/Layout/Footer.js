import React from "react";
import { Box, Container, Typography, IconButton } from "@mui/material";
import { Facebook, Twitter, Instagram } from "@mui/icons-material";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: "#8497A3",
        py: 3,
        mt: 4,
        borderTop: "1px solid #ddd",
        position: "fixed",
        bottom: "0px",
        width: "100%",
      }}
    >
      <Container
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography variant="body2" color="textSecondary"  sx={{ color: "#fff" }}>
          © {new Date().getFullYear()} Company, Inc.
        </Typography>
        <Box className="socialMedia">
          <IconButton
            sx={{ color: "#fff" }}
            href="https://twitter.com"
            target="_blank"
          >
            <Twitter />
          </IconButton>
          <IconButton
            sx={{ color: "#fff" }}
            href="https://instagram.com"
            target="_blank"
          >
            <Instagram />
          </IconButton>
          <IconButton
            sx={{ color: "#fff" }}
            href="https://facebook.com"
            target="_blank"
          >
            <Facebook />
          </IconButton>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
