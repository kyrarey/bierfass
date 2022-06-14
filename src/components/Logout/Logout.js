import React from "react";
import axios from "axios";

const Logout = () => {
  const handleLogout = (e) => {
    e.preventDefault();
    axios.post("/api/users/logout").then((res) => {
      localStorage.removeItem("user");
      alert(`logged out`);
    });
  };
  return (
    <div>
      <button onClick={handleLogout}>logout</button>
    </div>
  );
};

export default Logout;
