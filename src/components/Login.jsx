import React, { useState } from "react";

import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = () => {
    e.preventDefault();
    axios
      .post("/login", {
        email: email,
        password: password,
      })
      .then((res) => {
        setUser(res.data);
      });
    navigate("/me");
  };

  return (
    <div class="container">
      <div class="col-md-12 login-form pt-5">
        <h2>Registration form</h2>
        <form onSubmit={handleSubmit}>
          <div class="mb-3">
            <label for="Email" class="form-label">
              Email
            </label>
            <input
              type="email"
              class="form-control"
              id="Email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div class="mb-3">
            <label for="Password" class="form-label">
              Password
            </label>
            <input
              type="password"
              class="form-control"
              id="Password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" class="btn btn-primary">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
