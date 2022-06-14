import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "../../ProductCard/ProductCard";
import { useNavigate } from "react-router-dom";
import "./Admin.css";

const LoadProduct = () => {
  let navigate = useNavigate();
  var usuario = localStorage.getItem("user");
  usuario = JSON.parse(usuario);

  const options = [
    { value: "", text: "--Choose an option--" },
    { value: "rubia", text: "Rubia" },
    { value: "negra", text: "Negra" },
    { value: "roja", text: "Roja" },
    { value: "sinTACC", text: "Sin T.A.C.C." },
  ];

  const [newImg, setNewImg] = useState("");
  const [newName, setNewName] = useState("");
  const [newOrigin, setNewOrigin] = useState("");
  const [newPrice, setNewPrice] = useState(0);
  const [newSize, setNewSize] = useState("");
  const [newType, setNewType] = useState("");
  const [newAlcoholPercentage, setNewAlcoholPercentage] = useState(0);
  const [newBrand, setNewBrand] = useState("");

  const onClick = (e) => {
    e.preventDefault();
    axios
      .post(`http://localhost:8000/api/products/add`, {
        name: newName,
        origin: newOrigin,
        price: newPrice,
        size: newSize,
        type: newType,
        alcoholPercentage: newAlcoholPercentage,
        brand: newBrand,
        urlImg: newImg,
      })
      .then((data) => {
        setNewImg(data.urlImg);
        setNewName(data.name);
        setNewOrigin(data.origin);
        setNewPrice(data.price);
        setNewSize(data.size);
        setNewType(data.type);
        setNewAlcoholPercentage(data.alcoholPercentage);
        setNewBrand(data.brand);
        console.log(data);
      })
      .then(() => {
        alert("Producto agregado");
        navigate("/me");
      })
      .catch((err) => {
        alert("Error al agregar producto");
        console.log(err);
      });
  };

  return (
    <div class="loadProducts">
      <div class="container">
        <div align="center">
          <h3>Cargar un producto</h3>
          <form class="row g-3">
            <div class="col-md-6">
              <label for="newName" class="form-label">
                Nombre
              </label>
              <input
                type="text"
                class="form-control"
                id="newName"
                onChange={(e) => setNewName(e.target.value)}
              />
            </div>
            <div class="col-md-6">
              <label for="newBrand" class="form-label">
                Marca
              </label>
              <input
                type="text"
                class="form-control"
                id="newBrand"
                onChange={(e) => setNewBrand(e.target.value)}
              />
            </div>
            <div class="col-4">
              <label for="newType" class="form-label">
                Tipo
              </label>
              <select id="newType" class="form-select">
                <option selected onChange={(e) => setNewType("Rubia")}>
                  Rubia
                </option>
                <option onChange={(e) => setNewType("Roja")}>Roja</option>
                <option onChange={(e) => setNewType("Negra")}>Negra</option>
                <option onChange={(e) => setNewType("sin T.A.C.C")}>
                  Sin T.A.C.C.
                </option>
              </select>
            </div>
            <div class="col-4">
              <label for="newAlcoholPercentage" class="form-label">
                Porcentaje de alcohol
              </label>
              <input
                type="text"
                class="form-control"
                id="newAlcoholPercentage"
                placeholder="%"
                onChange={(e) => setNewAlcoholPercentage(e.target.value)}
              />
            </div>
            <div class="col-4">
              <label for="newSize" class="form-label">
                Tamaño
              </label>
              <input
                type="text"
                class="form-control"
                id="newSize"
                placeholder="ml/l"
                onChange={(e) => setNewSize(e.target.value)}
              />
            </div>

            <div class="col-4">
              <label for="newImg" class="form-label">
                Url de la imagen
              </label>
              <input
                type="text"
                class="form-control"
                id="newImg"
                placeholder="www.example.com/img.jpg"
                onChange={(e) => setNewImg(e.target.value)}
              />
            </div>
            <div class="col-4">
              <label for="newPrice" class="form-label">
                Precio
              </label>
              <input
                type="text"
                class="form-control"
                id="newPrice"
                placeholder="$"
                onChange={(e) => setNewPrice(e.target.value)}
              />
            </div>
            <div class="col-4">
              <label for="newOrigin" class="form-label">
                Origen
              </label>
              <input
                type="text"
                class="form-control"
                id="newOrigin"
                placeholder="País"
                onChange={(e) => setNewOrigin(e.target.value)}
              />
            </div>
            <div class="col-12">
              <button
                onClick={onClick}
                type="submit"
                class="btn btn-default cart"
              >
                Agregar producto
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoadProduct;
