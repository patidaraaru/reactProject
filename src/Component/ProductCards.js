import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

const ProductCards = () => {
  const [product, setProduct] = useState();

  const API = "https://fakestoreapi.com/products";
  const CardDetail = () => {
    fetch(API)
      .then((response) => response.json())
      .then((data) => setProduct(data));
  };

  useEffect(() => {
    CardDetail();
  }, []);
  console.log(product);
  return (
    <>
      {product.map((productData, index) => (
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
            <Typography variant="subtitle2" color="text.secondary">
              ID: {productData.id} | {productData.category}
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
              {productData.description}
            </Typography>
            <Box
              sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}
            >
              <Typography variant="body1" color="primary">
                ⭐ {productData.rating}
              </Typography>
              <Typography variant="h6" color="secondary">
                ${productData.price}
              </Typography>
            </Box>
          </CardContent>
        </Card>
      ))}
    </>
  );
};

export default ProductCards;
