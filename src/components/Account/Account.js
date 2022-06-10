import React from 'react';
import { useGlobalContext } from '../../context/globalUserContext';
const Account = () => {
  const { user } = useGlobalContext();
  console.log(user);
  return <div>{user.firstName}</div>;
};

export default Account;
