import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Product from "./components/ProductCard/ProductCard";

import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      {/*  <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/me" element={<Account />} />
        <Route path="/search" element={<Search />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/users" element={<Users />} />
        <Route path="/reviews" element={<Reviews />} />
      </Routes>
      <Footer /> */}
    </>
  );
}

export default App;
