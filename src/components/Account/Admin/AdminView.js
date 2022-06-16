import React from 'react';
import { Link } from 'react-router-dom';

const AdminView = () => {
  const usuarioStorage = !!localStorage.getItem('user')
    ? JSON.parse(localStorage.getItem('user'))
    : {};

  return (
    <div>
      {usuarioStorage.admin ? (
        <div>
          <h1 align="center">Bienvenido {usuarioStorage.name}</h1>
          <br></br>
          <br></br>
          <h3 align="center">Que desea hacer?</h3>
          <br></br>
          <br></br>
          <div class="butonsAcount" align="center">
            <Link to={'/editUser'}>
              <button class="btn btn-secondary">Editar usuarios</button>
            </Link>
            <Link to={'/editProduct'}>
              <button class="btn btn-warning">Editar Productos</button>
            </Link>
            <Link to={'/loadProduct'}>
              <button class="btn btn-success">Cargar Productos</button>
            </Link>
          </div>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
        </div>
      ) : (
        <div align="center">
          <img src="https://freefrontend.com/assets/img/html-funny-404-pages/HTML-Beer-404-Page.png"></img>
        </div>
      )}
    </div>
  );
};

export default AdminView;
