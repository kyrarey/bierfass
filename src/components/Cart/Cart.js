import React, { useState, useEffect } from "react";
import axios from "axios";
import Product from "../Product/Product";
import { Link } from "react-router-dom";

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
      <h2>Tu carrito</h2>
      {product.length === 0 ? (
        <p>No tienes productos agregados aun </p>
      ) : (
        product.map((Oneproduct) => (
          <div className="row">
            <div className="col-2">
              <img src={Oneproduct.product.img} width="150"></img>
            </div>
            <div className="col-10">
              <p>nombre :{Oneproduct.product.name}</p>
              <p> cantidad: {Oneproduct.quantity}</p>
              <form onSubmit={handleChangeQuantity}>
                <input
                  placeholder="cambiar cantidad"
                  onChange={(e) => {
                    setQuantity(e.target.value);
                    setIdProduct(Oneproduct.id);
                  }}
                ></input>
              </form>

              <p>precio unitario:{Oneproduct.price}</p>
              <button
                type="button"
                class="btn btn-danger"
                onClick={() => {
                  deleteProduct(Oneproduct.id);
                }}
              >
                eliminar producto
              </button>
            </div>
            <div></div>
          </div>
        ))
      )}
      <p>Precio total : {finalPrice}</p>
      <Link to="/sendOrder">
        <button class="btn btn-default cart">Proceder al pago</button>
      </Link>
    </div>
  );
};

export default Cart;
