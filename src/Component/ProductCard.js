import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import ProductImg from "../assets/ocean-cruises1733482799_1_11zon.png";
import React, { useEffect, useState } from "react";

const ProductCard = ({ limit = 10 }) => {
  const [data, setData] = useState([]);
  const [image, setImage] = useState("");

  const getData = () => {
       fetch("https://jsonplaceholder.typicode.com/photos")
      .then((response) => response.json())
      .then((json) => setData(json.slice(0, limit)));
  };

  useEffect(() => {
    getData();
  }, []);

  console.log(data);
  return (
    <Container sx={{ padding: 2 }}>
      <Grid container spacing={{ xs: 0, md: 2 }} justifyContent="center">
        {data.map((cardItem, index) => (
          <Grid item xs={12} sm={6} md={4} key={index} sx={{paddingTop: 2 }}>
            <Card sx={{ borderRadius: 2, boxShadow: 3 }}>
              {image ? (
                <CardMedia
                  component="img"
                  height="200"
                  image={cardItem.thumbnailUrl}
                  alt={cardItem.title}
                />
              ) : (
                <CardMedia
                  component="img"
                  height="200"
                  image={ProductImg}
                  alt={cardItem.title}
                  style={{ width: "100%" }}
                />
              )}

              <CardContent>
                <Typography variant="h6" component="div" sx={{textTransform:'capitalize'}}>
                  {cardItem.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {cardItem.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default ProductCard;
