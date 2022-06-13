import { ConstructionOutlined } from '@mui/icons-material';
import { display } from '@mui/system';
import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const UserCard = ({
  admin,
  birthDay,
  email,
  firstName,
  id,
  lastName,
  profilePhoto,
}) => {
  let navigate = useNavigate();

  const onClickEdit = () => {
    navigate(`${id}`);
  };

  return (
    <div>
      <div class="col">
        <div align="center" class="card imgProd">
          <img src={profilePhoto} class="card-img-top" alt="..."></img>
          <div class="card-body">
            <h5 class="card-title">{firstName + ' ' + lastName}</h5>
            <p class="card-text">Fecha de nacimiento: {birthDay}</p>
            <p class="card-text">Admin: {admin === true ? 'Si' : 'No'}</p>
            <p class="card-text">Email: {email}</p>
            <p class="card-text">ID: {id}</p>
            <button
              class="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            ></button>
            <button onClick={onClickEdit} class="btn btn-secondary">
              Editar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
