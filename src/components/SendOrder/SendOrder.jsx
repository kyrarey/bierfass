import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import "./SendOrder.css";
import { useNavigate } from "react-router-dom";

const SendOrder = () => {
  const [product, setProduct] = useState([]);
  const [address, setAddress] = useState([]);
  const [email, setEmail] = useState("");
  const [changeQuantity, setQuantity] = useState("");
  const [idProduct, setIdProduct] = useState(0);

  const user = !!localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : {};

  //trae todas las direcciones del usuario

  useEffect(() => {
    axios.get(`http://localhost:8000/api/address/${user.id}`).then((res) => {
      setAddress(res.data);
    });
  }, []);

//trae el carrito del usuario
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

  // envia la orden de compra

  const [selectedAdress, setSelectedAdress] = useState("");
  const [selectedPayMethod, setSelectedPayMethod] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post('http://localhost:8000/api/mail/sendOrder', {
      email: email,
    }).then(() => {
    alert("email de confirmación enviado")
    }).catch(() => {
      alert("error al enviar email")
    }
    )


    axios
      .post(`http://localhost:8000/api/shoppingHistory/newOrder`, {
        selectedEmail: email,
        address: selectedAdress,
        payMethod: selectedPayMethod,
        userId: user.id,
      })
      .then(() => {
        alert("tu orden ha sido enviada exitosamente");
        navigate("/confirmation")

      })
      .catch(() => {
        alert("No pudimos enviar tu orden, intentalo mas tarde, por favor");
      });
  };


  return (
    <>
      <div className="container">
        <h1>Confirma tu orden</h1>
        <h2>Productos en tu orden:</h2>
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
      </div>
      <div className="container">
        <h2>Envia tu orden</h2>
        <h3>Valor a pagar: $ {finalPrice}</h3>
        <div class="row">
          <div class="col">
            <p>Selecciona tu direccion de entrega</p>
            <form></form>
            {address.map((obj) => (
              <form>
                <div class="d-flex flex-row pb-3">
                  <div class="d-flex align-items-center pe-2">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="radioNoLabel"
                      id="radioNoLabel1"
                      value={`${obj.id}, ${obj.street}, ${obj.postalCode}, ${obj.city}`}
                      aria-label="..."
                      checked
                      onClick={(e) => {
                        setSelectedAdress(e.target.value);
                      }}
                    />
                  </div>
                  <div class="rounded border d-flex w-100 p-3 align-items-center">
                    <p class="mb-0">
                      <i class="fab fa-cc-visa fa-lg text-primary pe-2"></i>
                      {obj.street} ,{obj.postalCode}
                    </p>

                    <div class="ms-auto">{obj.city}</div>
                  </div>
                </div>
              </form>
            ))}
          </div>
          <div class="col">
            <div class="form-group">
              <label for="exampleFormControlInput1">
                A donde quieres que te llegue tu email de confirmacion
              </label>
              <input
                type="email"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="name@example.com"
                value={email}
                onChange = {(e) => setEmail(e.target.value)}
              ></input>
            </div>
          </div>
          <div class="col">
            <p> Escoje tu metodo de pago</p>
            <form>
              <div>
                <div class="d-flex flex-row pb-3">
                  <div class="d-flex align-items-center pe-2">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="radioNoLabel"
                      id="radioNoLabel1"
                      value="Debit card"
                      aria-label="..."
                      checked
                      onClick={(e) => {
                        setSelectedPayMethod(e.target.value);
                      }}
                    />
                  </div>
                  <div class="rounded border d-flex w-100 p-3 align-items-center">
                    <p class="mb-0">
                      <i class="fab fa-cc-visa fa-lg text-primary pe-2"></i>Visa
                      Debit Card
                    </p>
                    <div class="ms-auto">************3456</div>
                  </div>
                </div>

                <div class="d-flex flex-row">
                  <div class="d-flex align-items-center pe-2">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="radioNoLabel"
                      id="radioNoLabel2"
                      value="Credit card"
                      aria-label="..."
                      onClick={(e) => {
                        setSelectedPayMethod(e.target.value);
                      }}
                    />
                  </div>
                  <div class="rounded border d-flex w-100 p-3 align-items-center">
                    <p class="mb-0">
                      <i class="fab fa-cc-mastercard fa-lg text-dark pe-2"></i>
                      Mastercard Office
                    </p>
                    <div class="ms-auto">************1038</div>
                  </div>
                </div>

                <div class="d-flex flex-row pb-3">
                  <div class="d-flex align-items-center pe-2">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="radioNoLabel"
                      id="radioNoLabel1"
                      value="efectivo"
                      aria-label="..."
                      checked
                      onClick={(e) => {
                        setSelectedPayMethod(e.target.value);
                      }}
                    />
                  </div>
                  <div class="rounded border d-flex w-100 p-3 align-items-center">
                    <p class="mb-0">
                      <i class="fab fa-cc-visa fa-lg text-primary pe-2"></i>
                      Efectivo
                    </p>
                    <div class="ms-auto">
                      <i class="bi bi-cash"></i>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div class="row">
          <button
            type="button">>>>>>> origin/VistaCheckout>>>>>>> origin/VistaCheckout
            class="btn btn-default cart"
            onClick={handleSubmit}
          >
            Envia tu orden
          </button>
        </div>
      </div>
    </>
  );
};

export default SendOrder;
