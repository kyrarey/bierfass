import React from 'react';
import { Link } from 'react-router-dom';

const Account = () => {
  var usuario = localStorage.getItem('user');
  usuario = JSON.parse(usuario);

  return (
    <div>
      {!usuario.admin ? (
        <p>no sos admin pa</p>
      ) : (
        <div>
          <h1 align="center">Bienvenido {usuario.name}</h1>
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
      )}
    </div>
  );
};

export default Account;
