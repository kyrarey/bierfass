import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const SendEditProduct = () => {
  let navigate = useNavigate();
  let id = useParams().id;
  const [edit, setEdit] = useState({});
  const [alcoholPctg, setAlcoholPctg] = useState('');
  const [newSize, setNewSize] = useState('');
  const [newPrice, setNewPrice] = useState('');
  const [newName, setNewName] = useState('');
  const [newImg, setNewImg] = useState('');

  useEffect(() => {
    axios.get(`http://localhost:8000/api/products/${id}`).then((data) => {
      setEdit(data.data[0]);

      setAlcoholPctg(data.data[0].alcoholPercentage);
      setNewSize(data.data[0].size);
      setNewPrice(data.data[0].price);
      setNewName(data.data[0].name);
      setNewImg(data.data[0].img);
    });
  }, []);

  const onClickEdit = () => {
    axios
      .put(`http://localhost:8000/api/products/${edit.id}`, {
        alcoholPercentage: alcoholPctg,
        size: newSize,
        price: newPrice,
        name: newName,
        img: newImg,
      })
      .then((res) => {
        alert('Producto modificado');
        navigate('/editProduct');
      });
  };
  console.log(edit);
  const onClickDelete = () => {
    axios.delete(`http://localhost:8000/api/products/${id}`).then((res) => {
      alert('Producto Borrado');
      navigate('/editProduct');
    });
  };

  return (
    <div align="center">
      <div class="card" style={{ width: '25rem' }}>
        <div class="card imgProd">
          <img src={edit.img} class="card-img-top" alt="..."></img>
          <div class="card-body">
            <form>
              <h5 class="card-title">{edit.name}</h5>
              <p>Url de nueva foto:</p>
              <input
                class="form-control me-2"
                type="url"
                size="50"
                aria-label="foto"
                onChange={(e) => setNewImg(e.target.value)}
              />
              <p>Nuevo nombre</p>
              <input
                class="form-control me-2"
                type="text"
                size="50"
                placeholder={`${edit.name}`}
                onChange={(e) => setNewName(e.target.value)}
                aria-label="Name"
              />
              <p>Nuevo Precio</p>
              <input
                class="form-control me-2"
                type="number"
                size="50"
                placeholder={`${edit.price}`}
                onChange={(e) => setNewPrice(e.target.value)}
                aria-label="Precio"
              />

              <p class="card-text">Nueva Medida:</p>
              <input
                class="form-control me-2"
                type="number"
                size="50"
                placeholder={`${edit.size}`}
                onChange={(e) => setNewSize(e.target.value)}
                aria-label="size"
              />
              <p class="card-text">Nuevo % de alcohol:</p>
              <input
                class="form-control me-2"
                type="number"
                size="50"
                placeholder={`${edit.alcoholPercentage}`}
                onChange={(e) => setAlcoholPctg(e.target.value)}
                aria-label="size"
              />
            </form>
            <button onClick={onClickEdit} class="btn btn-secondary">
              Editar
            </button>
            <button onClick={onClickDelete} class="btn btn-danger">
              Eliminar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SendEditProduct;
