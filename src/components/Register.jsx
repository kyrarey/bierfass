import React, { useState } from "react";

import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [user, setUser] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");
  const [birthday, setBirthday] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = () => {
    e.preventDefault();
    axios
      .post("/register", {
        firstName: firstName,
        lastName: lastName,
        password: password,
        confPassword: confPassword,
        birthday: birthday,
        email: email,
      })
      .then((res) => {
        setUser(res.data);
      });
    navigate("/login");
  };

  return (
    <div class="container">
      <div class="col-md-12 login-form pt-5">
        <h2>Registration form</h2>
        <form onSubmit={handleSubmit}>
          <div class="mb-3">
            <label for="FirstName" class="form-label">
              First Name
            </label>
            <input
              type="text"
              class="form-control"
              id="FirstName"
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
          </div>

          <div class="mb-3">
            <label for="LastName" class="form-label">
              Last Name
            </label>
            <input
              type="text"
              class="form-control"
              id="LastName"
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </div>

          <div class="mb-3">
            <label for="birthdayDate" class="form-label">
              BirthDay
            </label>
            <input
              type="text"
              class="form-control"
              id="birthdayDate"
              onChange={(e) => setBirthday(e.target.value)}
              required
            />
          </div>

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

          <div class="mb-3">
            <label for="confirmPassword" class="form-label">
              Confirm Password
            </label>
            <input
              type="password"
              class="form-control"
              id="onfirmPassword"
              onChange={(e) => setConfPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" class="btn btn-primary">
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
