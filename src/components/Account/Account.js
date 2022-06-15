import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Account = () => {
  const usuarioStorage = !!localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : {};

  const [address, setAddress] = useState([]);
  const [selected, setSelected] = useState();


  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/address/${usuarioStorage.id}`, {
        address: address,
      })
      .then((res) => {
        setAddress(res.data);
      });
  }, [selected]);

  const deleteAddress = (e) => {
    e.preventDefault();
    setSelected(e.target.value);
    let value = e.target.value;
    axios
      .delete(`http://localhost:8000/api/address/${value}`)
      .then(() => {
        alert("eliminada con exito");
      })
      .catch(() => {
        alert("no se pudo eliminar");
      });
  };

  return (
    <div>
      {!usuarioStorage.admin ? (
        <div class="container">
          <p class="sign-out text-center">
            <span class="pb-4">Hola {usuarioStorage.firstName}&nbsp;</span>
            |&nbsp;
            <a href="/logout" id="customerLogoutLink">
              Cerrar sesión
            </a>
          </p>
          <div class="accordion accordion-flush" id="accordionFlushExample">
            <div class="accordion-item">
              <h2 class="accordion-header" id="flush-headingOne">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseOne"
                  aria-expanded="false"
                  aria-controls="flush-collapseOne"
                >
                  Historial de ordenes
                </button>
              </h2>
              <div
                id="flush-collapseOne"
                class="accordion-collapse collapse"
                aria-labelledby="flush-headingOne"
                data-bs-parent="#accordionFlushExample"
              >
                <div class="accordion-body">
                  Acá vamos a mostrar las ordenes realizadas
                </div>
              </div>
            </div>
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
                  Datos personales
                </button>
              </h2>
              <div
                id="flush-collapseTwo"
                class="accordion-collapse collapse"
                aria-labelledby="flush-headingTwo"
                data-bs-parent="#accordionFlushExample"
              >
                <div class="accordion-body">
                  Nombre: {usuarioStorage.firstName}
                  <br></br>
                  Apellido: {usuarioStorage.lastName}
                  <br></br>
                  email: {usuarioStorage.email}
                  <br></br>
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="flush-headingThree">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseThree"
                  aria-expanded="false"
                  aria-controls="flush-collapseThree"
                >
                  Direcciones
                </button>
              </h2>
              <div
                id="flush-collapseThree"
                class="accordion-collapse collapse"
                aria-labelledby="flush-headingThree"
                data-bs-parent="#accordionFlushExample"
              >
                {address.length === 0 ? (
                  <>
                    <p>No tienes direcciones registradas aún</p>
                    <p class="mt-2">
                      <a href="/address">Cargá tus direcciones</a>
                    </p>
                  </>
                ) : (
                  address.map((oneAddress) => (
                    <div class="accordion-body">
                      Calle: {oneAddress.street}
                      <br></br>
                      Teléfono:{oneAddress.telephone}
                      <br></br>
                      Ciudad: {oneAddress.city}
                      <br></br>
                      Provincia: {oneAddress.state}
                      <br></br>
                      C.P.:{oneAddress.postalCode}
                      <br></br>
                      <p class="mt-2">
                        <a href="/address">Cargá tus direcciones</a>
                      </p>
                      <button
                        value={oneAddress.id}
                        type="button"
                        class="btn btn-danger"
                        onClick={deleteAddress}
                      >
                        Eliminá tu dirección
                      </button>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <h1 align="center">Bienvenido {usuarioStorage.name}</h1>
          <br></br>
          <br></br>
          <h3 align="center">Que desea hacer?</h3>
          <br></br>
          <br></br>
          <div class="butonsAcount" align="center">
            <Link to={"/editUser"}>
              <button class="btn btn-secondary">Editar usuarios</button>
            </Link>
            <Link to={"/editProduct"}>
              <button class="btn btn-warning">Editar Productos</button>
            </Link>
            <Link to={"/loadProduct"}>
              <button class="btn btn-success">Cargar Productos</button>
            </Link>
          </div>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
        </div>
      )}
    </div>
  );
};

export default Account;
