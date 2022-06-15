import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Account.css";

const Account = () => {
  const usuarioStorage = !!localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : {};

  const [address, setAddress] = useState({});

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/address/${usuarioStorage.id}`, {
        address: address,
      })
      .then((res) => {
        setAddress(res.data[0]);
      });
  }, []);

  return (
    <div class="account">
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
                  mail: {usuarioStorage.email}
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
                {address ? (
                  <div class="accordion-body">
                    Calle: {address.street}
                    <br></br>
                    Teléfono:{address.telephone}
                    <br></br>
                    Ciudad: {address.city}
                    <br></br>
                    Provincia: {address.state}
                    <br></br>
                    C.P.:{address.postalCode}
                    <br></br>
                  </div>
                ) : (
                  <>
                    <p>No tienes direcciones registradas aún</p>
                    <p class="mt-2">
                      <a href="/address">Cargá tus direcciones</a>
                    </p>
                  </>
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
