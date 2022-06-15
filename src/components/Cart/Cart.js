import React, { useState, useEffect } from "react";
import axios from "axios";
import Product from "../Product/Product";
import { Link } from "react-router-dom";
import "./Cart.css";
import DeleteIcon from "@mui/icons-material/Delete";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const Cart = () => {
  const [product, setProduct] = useState([]);
  const user = JSON.parse(localStorage.getItem("user"));
  const [changeQuantity, setQuantity] = useState("");
  const [idProduct, setIdProduct] = useState(0);

  //trae todos los productos del carrito
  useEffect(() => {
    axios
      .get(`/api/cart/${user.id}`)
      .then((res) => res.data)
      .then((products) => setProduct(products));
  }, [product]);

  //suma el valor de los articulos
  let finalPrice = 0;

  product.map((obj) => {
    let multiplication = obj.price * obj.quantity;
    finalPrice += multiplication;
  });

  // borra producto

  const deleteProduct = (id) => {
    axios
      .delete(`/api/cart/delete`, { data: { shoppingCartId: id } })
      .then(() => {
        alert("eliminado con exito");
      })
      .catch(() => {
        alert("no se pudo eliminar");
      });
  };

  // maneja el cambio en cantidad de prodcutos
  const handleChangeQuantity = (e) => {
    e.preventDefault();

    axios
      .put(`http://localhost:8000/api/cart/edit/${idProduct}`, {
        quantity: changeQuantity,
      })
      .then(() => {
        alert("cantidad modificada!");
      })
      .catch(() => {
        alert("no pudimos modificar la cantidad, prueba de nuevo");
      });

    e.target.reset();
  };

  return (
    <div className="container">
      <div className="cart-container">
        <h2 class="p-3 fs-2 border-top border-bottom border-2">
          {" "}
          <ShoppingCartIcon fontSize="large" /> Tu carrito{" "}
        </h2>
        {product.length === 0 ? (
          <p>No tienes productos agregados aun </p>
        ) : (
          product.map((Oneproduct) => (
            <div className="cart-item">
              <div className="row">
                <div className="col-2">
                  <img src={Oneproduct.product.img} width="150"></img>
                </div>
                <div className="col-9">
                  <p>
                    <strong> Nombre: </strong> {Oneproduct.product.name}
                  </p>
                  <p>
                    {" "}
                    <strong> Cantidad: </strong> {Oneproduct.quantity}
                  </p>
                  <form onSubmit={handleChangeQuantity}>
                    <input
                      placeholder="cambiar cantidad"
                      onChange={(e) => {
                        setQuantity(e.target.value);
                        setIdProduct(Oneproduct.id);
                      }}
                    ></input>
                  </form>
                  <p>
                    {" "}
                    <strong> Precio unitario: </strong>
                    {Oneproduct.price}$
                  </p>
                </div>

                <div className="col-1">
                  <button
                    type="button"
                    class="btn btn-danger"
                    onClick={() => {
                      deleteProduct(Oneproduct.id);
                    }}
                  >
                    <DeleteIcon />
                  </button>
                </div>
                <div></div>
              </div>
            </div>
          ))
        )}

        <div class="cart-total">
          <div class="row">
            <div class="col-9">
              <Link to="/sendOrder">
                <button class="btn btn-default cart">Proceder al pago</button>
              </Link>
            </div>
            <div class="col-3">
              <p>
                <strong> Precio total : {finalPrice}$ </strong>{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
