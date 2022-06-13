import React from "react";
import { useGlobalContext } from "../../context/globalUserContext";

const Account = () => {
  const { user } = useGlobalContext();
  console.log(user);



  return (
    <div class="container">
      <p class="sign-out text-center">
      <span class="pb-4">Hola {user.firstName}&nbsp;</span>
      |&nbsp;
      <a href="/logout" id="customerLogoutLink">Cerrar sesión</a>
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
              Nombre: {user.firstName}
              <br></br>
              Apellido: {user.lastName}
              <br></br>
              email: {user.email}
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
            <div class="accordion-body">
              Calle: 
              <br></br>
              Teléfono: 
              <br></br>
              Ciudad: 
              <br></br>
              Provincia: 
              <br></br>
              C.P.: 
              <br></br>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
