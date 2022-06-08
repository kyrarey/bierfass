import React from "react";
import "./Product.css";


const products = [{
  name: "Roja Ipa",
  type: "Roja",
  size: "450 ml",
  price: "$250",
  img: "./AndesIPA.webp",
  origin: "Argentina",
  marca: "Andes"
}]

//ProductCard recibe como parámetro la data
const Product = () => {

  return (
    <>
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
    </>
  );
};

export default Product;
