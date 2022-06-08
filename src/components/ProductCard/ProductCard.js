import React from "react";
import "./ProductCard.css";
import { Card } from "@mui/material";
import { CardActions } from "@mui/material";
import { CardActionArea } from "@mui/material";
import { CardContent } from "@mui/material";
import { CardMedia } from "@mui/material";
import { Typography } from "@mui/material";
import { FavoriteIcon } from "@mui/icons-material";
import { AddShoppingCartIcon } from "@mui/icons-material";

//ProductCard recibe como parámetro la data
const ProductCard = () => {
  return (
    <div>
      <Card className="card">
        <CardActionArea>
          <CardMedia
            className="image"
            component="img"
            title="cerveza"
            image="https://cdn.shopify.com/s/files/1/1103/5152/products/AndesOrigen_IPARoja_Lata473ml_1000x1000px-min_1024x1024.png?v=1651608401"
          />
          <CardContent className="content">
            <Typography
              className="title"
              variant="h5"
              align="center"
              component="h2"
              gutterBottom
            >
              Cerveza
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          
        </CardActions>
      </Card>
    </div>
  );
};

export default ProductCard;
