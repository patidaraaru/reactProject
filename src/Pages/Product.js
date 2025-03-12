import React, { useEffect, useState } from "react";
import bannerImg from "../assets/river-cruises1734005344_2_11zon.png";
import { Button, Container, Grid } from "@mui/material";
import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";

const Product = () => {
  const [product, setProduct] = useState([]);
  const [Loading, setLoading] = useState(true);

  const API = "https://fakestoreapi.com/products";
  const CardDetail = () => {
    fetch(API)
      .then((response) => response.json())
      .then((data) => setProduct(data));
      setLoading(true)
  };
  

  useEffect(() => {
    CardDetail();
  }, []);
  console.log(product);

  return (
    <>
      <Box sx={{ position: "relative" }} className="sliderSlide">
        <img src={bannerImg} alt="BannerImage" style={{ width: "100%" }} />
        <Box className="SwiperText">
          <h2 style={{ color: "#fff" }}>Product</h2>
          <Button class="TheamBtn" mt={2}>
            Explore
          </Button>
        </Box>
      </Box>
      <Container maxWidth={"lg"}>
        <Grid spacing={2} container>
          {Loading ? (
            product.map((productData) => (
              <Grid item xs={12} md={6} style={{ marginTop: "10px" }}>
                <Card
                  sx={{ borderRadius: 2, boxShadow: 3, maxWidth: 345 }}
                  key={productData.id}
                >
                  <CardMedia
                    component="img"
                    height="200"
                    image={productData.image}
                    alt={productData.category}
                  />
                  <CardContent>
                    <Typography variant="h4" color="text.secondary">
                      {productData.category}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ mt: 1 }}
                    >
                      {productData.description}
                    </Typography>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        mt: 2,
                      }}
                    >
                      <Typography variant="body1" color="primary">
                        {productData.rating?.rate} ({productData.rating?.count})
                      </Typography>
                      <Typography variant="h6" color="secondary">
                        ${productData.price}
                      </Typography>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))
          ) : (
            <h2>Loading...</h2>
          )}
        </Grid>
      </Container>
    </>
  );
};

export default Product;
