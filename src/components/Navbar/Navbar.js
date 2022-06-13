import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGlobalContext } from '../../context/globalUserContext';
import React from 'react';
import './Navbar.css';
import SearchIcon from '@mui/icons-material/Search';
import SportsBarIcon from '@mui/icons-material/SportsBar';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';

const Navbar = () => {
  let navigate = useNavigate();
  const [search, setSearch] = useState('');
  const { user, setProductSearch } = useGlobalContext();

  const onClickHandler = (e) => {
    e.preventDefault();
    axios
      .post(`http://localhost:8000/api/products/search`, { search })
      .then((data) => {
        setProductSearch(data.data);
        navigate('/search');
      });

    //deslogueo, abajo esta el boton de desloguear, pueden modificarlo como gusten
  };
  const handleLogout = (e) => {
    e.preventDefault();
    axios.post('/api/users/logout').then((res) => {
      alert(`logged out`);
      localStorage.removeItem('user');
    });
  };

  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="/">
          <SportsBarIcon fontSize="large" />
          Bierfass
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Cervezas
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <a class="dropdown-item" href="#">
                    Rubia
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Negra
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Roja
                  </a>
                </li>
              </ul>
            </li>
          </ul>

          <div class="navbar-nav mv-auto mb-2 mb-lg-0">
            <form class="d-flex">
              <input
                class="form-control me-2"
                type="search"
                size="50"
                placeholder="Buscar"
                aria-label="Search"
                onChange={(e) => setSearch(e.target.value)}
              />
              <button
                onClick={onClickHandler}
                class="btn btn-outline-light"
                type="submit"
              >
                <SearchIcon />
              </button>
            </form>

            <div class="navbar-nav ml-auto">
              <div class="user-nav">
                {/*  {user} ? (
                <Link to="/register">
                  <button class="btn btn-outline-light" type="submit">
                    Registrarse
                  </button>
                </Link>
                <Link to="/login">
                  <button class="btn btn-outline-light" type="submit">
                    Iniciar sesión
                  </button>
                </Link>
                ) : (
                <Link to="/cart">
                  <button class="btn btn-outline-light" type="submit">
                    <ShoppingCartIcon />
                  </button>
                </Link>
                <Link to="/me">
                  <button class="btn btn-outline-light" type="submit">
                    user.name <AccountCircleIcon />
                  </button>
                </Link> 
                <button onClick={handleLogout}>logout</button>*/}
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
