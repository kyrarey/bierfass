import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import UserCard from '../../UserCard/UserCard';

const EditUser = () => {
  var usuario = localStorage.getItem('user');
  usuario = JSON.parse(usuario);
  const [alluser, setAllUsers] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:8000/api/users/admin/users`).then((data) => {
      setAllUsers(data.data);
    });
  }, []);

  console.log(alluser);

  return (
    <div>
      <h1 align="center">Que usuario desea editar?</h1>
      <div align="center" class="row row-cols-1 row-cols-md-4 g-4">
        {alluser.map((card) => (
          <UserCard {...card} />
        ))}
      </div>
    </div>
  );
};

export default EditUser;
