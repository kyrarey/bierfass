import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import { logDOM } from '@testing-library/react';

const SendEditUser = () => {
  let navigate = useNavigate();
  let id = useParams().id;
  const [edit, setEdit] = useState({});
  const [urlImg, setUrlImg] = useState('');
  const [newName, setNewName] = useState('');
  const [newLname, setLname] = useState('');
  const [newMail, setNewMail] = useState('');
  const [newRol, setNewRol] = useState('');

  useEffect(() => {
    axios.get(`http://localhost:8000/api/users/admin/${id}`).then((data) => {
      setEdit(data.data[0]);
      console.log(data.data[0]);
      setUrlImg(data.data[0].profilePhoto);
      setNewName(data.data[0].firstName);
      setLname(data.data[0].lastName);
      setNewMail(data.data[0].email);
      setNewRol(data.data[0].admin);
    });
  }, []);

  const onClickEdit = () => {
    axios
      .put(`http://localhost:8000/api/users/admin/${edit.id}`, {
        firstName: newName,
        lastName: newLname,
        profilePhoto: urlImg,
        admin: newRol,
        email: newMail,
      })
      .then((res) => {
        alert('Usuario modificado');
        navigate('/editUser');
      });
  };

  const onClickDelete = () => {
    axios.delete(`http://localhost:8000/api/users/admin/${id}`).then((res) => {
      alert('Usuario Borrado');
      navigate('/editUser');
    });
  };

  return (
    <div align="center">
      <div class="card" style={{ width: '25rem' }}>
        <div class="card imgProd">
          <img src={edit.profilePhoto} class="card-img-top" alt="..."></img>
          <div class="card-body">
            <form>
              <h5 class="card-title">{edit.firstName + ' ' + edit.lastName}</h5>
              <p>Url de nueva foto:</p>
              <input
                class="form-control me-2"
                type="url"
                size="50"
                aria-label="foto"
                onChange={(e) => setUrlImg(e.target.value)}
              />
              <p>Nuevo nombre</p>
              <input
                class="form-control me-2"
                type="text"
                size="50"
                placeholder={`${edit.firstName}`}
                onChange={(e) => setNewName(e.target.value)}
                aria-label="Name"
              />
              <p>Nuevo Apellido</p>
              <input
                class="form-control me-2"
                type="text"
                size="50"
                placeholder={`${edit.lastName}`}
                onChange={(e) => setLname(e.target.value)}
                aria-label="Lastname"
              />

              <p class="card-text">Nuevo Mail:</p>
              <input
                class="form-control me-2"
                type="email"
                size="50"
                placeholder={`${edit.email}`}
                onChange={(e) => setNewMail(e.target.value)}
                aria-label="email"
              />
              <p class="card-text">
                Admin: {edit.admin === true ? 'Si' : 'No'}
              </p>
              <form
                onChange={(e) =>
                  e.target.value === 'Si' ? setNewRol(true) : setNewRol(false)
                }
              >
                <input name="roll" type="radio" value="Si"></input>
                <label for="css">Si</label>
                <br></br>
                <input name="roll" type="radio" value="No"></input>
                <label for="javascript">No</label>
              </form>
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

export default SendEditUser;
