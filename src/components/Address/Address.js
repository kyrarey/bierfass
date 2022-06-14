import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Address = () => {
  const usuarioStorage = !!localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : {};

  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [street, setStreet] = useState("");
  const [telephone, setTelephone] = useState();
  const [postalCode, setPostalCode] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    console.log(street, city, state, telephone, postalCode, usuarioStorage);
    e.preventDefault();
    axios
      .post("http://localhost:8000/api/address/add", {
        city: city,
        state: state,
        street: street,
        telephone: telephone,
        postalCode: postalCode,
        userId: usuarioStorage.id,
      })
      .then((res) => {
        setAddress(res.data);
        navigate("/me");
      });
  };

  //axios get para obtener la direccion del usuario

  return (
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-sm-6 login-form">
          <h2>Cargá tus direcciones</h2>
          <form onSubmit={handleSubmit}>
            <div class="form-group col-md-6 pb-3">
              <label for="Street" class="form-label">
                Calle
              </label>
              <input
                type="text"
                class="form-control"
                id="Street"
                placeholder="calle"
                value={street}
                onChange={(e) => setStreet(e.target.value)}
                required
              />
            </div>

            <div class="form-group col-md-6 pb-3">
              <label for="Telephone" class="form-label">
                Teléfono
              </label>
              <input
                type="number"
                class="form-control"
                id="Telephone"
                placeholder="número de teléfono"
                value={telephone}
                onChange={(e) => setTelephone(e.target.value)}
                required
              />
            </div>

            <div class="form-group col-md-6 pb-3">
              <label for="city" class="form-label">
                Ciudad
              </label>
              <input
                type="text"
                class="form-control"
                id="city"
                placeholder="ciudad"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                required
              />
            </div>

            <div class="form-group col-md-6 pb-3">
              <label for="state" class="form-label">
                Provincia
              </label>
              <input
                type="text"
                class="form-control"
                id="state"
                placeholder="provincia"
                value={state}
                onChange={(e) => setState(e.target.value)}
                required
              />
            </div>

            <div class="form-group col-md-6 pb-3">
              <label for="PostalCode" class="form-label">
                C.P.
              </label>
              <input
                type="text"
                class="form-control"
                id="PostalCode"
                placeholder="código postal"
                value={postalCode}
                onChange={(e) => setPostalCode(e.target.value)}
                required
              />
            </div>

            <button type="submit" class="btn btn-dark">
              Confirmá
            </button>
            {/* <p class="mt-2">
              ¿Ya tenés una cuenta?&nbsp;
              <a href="/login">Ingresá acá</a>
            </p> */}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Address;
