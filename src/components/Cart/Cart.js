import React, { useState, useEffect } from "react";
import axios from "axios";
import Product from "../Product/Product";
import { Link } from "react-router-dom";
import "./Cart.css";
import DeleteIcon from "@mui/icons-material/Delete";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { logDOM } from "@testing-library/react";

const Cart = () => {
  const [product, setProduct] = useState([]);
  const user = JSON.parse(localStorage.getItem("user"));
  const [changeQuantity, setQuantity] = useState("");
  const [idProduct, setIdProduct] = useState(0);
  const [pastOrders, setPastOrders] = useState([]);
  

  //trae todos los productos del carrito
  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/cart/${user.id}`)
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

  // Trae el historial de ordenes del usuario

  useEffect(()=>{
    axios
    .get(`http://localhost:8000/api/shoppingHistory/history/${user.id}`)
    .then((res) => res.data)
    .then((history) => {setPastOrders(history)});
  },[])



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
      <div class="accordion accordion-flush" id="accordionFlushExample">
        <div class="accordion-item">
          <h2 class="accordion-header" id="flush-headingTwo">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseTwo"
              aria-expanded="false"
              aria-controls="flush-collapseTwo"
            >
              Revisa tus ordenes pasadas:
            </button>
          </h2>
          <div
            id="flush-collapseTwo"
            class="accordion-collapse collapse"
            aria-labelledby="flush-headingTwo"
            data-bs-parent="#accordionFlushExample"
          >
            { pastOrders.length != 0 ? ( pastOrders.map((onehistory)=>(
            <div class="accordion-body">
              Valor pagado: $ {onehistory.shoppingHistory.finalPrice}
              <br></br>
              Fecha de compra: {new Date(onehistory.createdAt).toLocaleDateString(
                          'es-AR'
                        )}
              <br></br>
              Metodo de pago : {onehistory.shoppingHistory.payMethod}
              <br></br>
              Direccion de envio : {onehistory.shoppingHistory.address}
              <br></br>
            </div>))
            ): <p>No tienes ordenes en tu historial</p>
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
