import React from "react";
import "./App.css";

import Header from "./components/Header/Header"
import Navbar from "./components/Navbar/Navbar";
import ProductCard from "./components/ProductCard/ProductCard"
import Account from "./components/Account/Account"
import Cart from "./components/Cart/Cart"
import Home from "./components/Home/Home"
import Logout from "./components/Logout/Logout"
import Reviews from "./components/Reviews/Reviews"
import Search from "./components/Search/Search"
import Users from "./components/Users/Users"
import Footer from "./components/Footer/Footer";
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";
import Product from "./components/Product/Product"

import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
    <Navbar />
    <Header />

    </>
  );
}


export default App;