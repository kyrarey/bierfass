import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Account from './components/Account/Account';
import Cart from './components/Cart/Cart';
import Home from './components/Home/Home';
import Reviews from './components/Reviews/Reviews';
import Search from './components/Search/Search';
import Users from './components/Users/Users';
import Footer from './components/Footer/Footer';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import Product from './components/Product/Product';
import EditUser from './components/Account/Admin/EditUser';
import EditProduct from './components/Account/Admin/EditProduct';
import LoadProduct from './components/Account/Admin/LoadProduct';
import SendEditUser from './components/Account/Admin/SendEditUser';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { GlobalProvider } from './context/globalUserContext';
import ReCAPTCHA from 'react-google-recaptcha';
import NewReview from './components/NewReview/NewReview.jsx';
import SendEditProduct from './components/Account/Admin/SendEditProduct';
import Address from './components/Address/Address';
import SendOrder from './components/SendOrder/SendOrder';
import Confirmation from './components/Confirmation/Confirmation';
import TypeSearch from './components/Search/TypeSearch';
import AdminView from './components/Account/Admin/AdminView';
import ProductType from './components/ProductType/ProductType';

function App() {
  return (
    <GlobalProvider>
      <Router>
        <>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/newReview/:productId" element={<NewReview />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/me" element={<Account />} />
            <Route path="/search" element={<Search />} />
            <Route path="/cart/:userId" element={<Cart />} />
            <Route path="/product/:productId" element={<Product />} />
            <Route path="/product/style/:type" element={<ProductType />} />
            <Route path="/admin" element={<AdminView />} />
            <Route path="/reviews" element={<Reviews />} />
            <Route path="/editUser" element={<EditUser />} />
            <Route path="/editUser/:id" element={<SendEditUser />} />
            <Route path="/editProduct" element={<EditProduct />} />
            <Route path="/editProduct/:id" element={<SendEditProduct />} />
            <Route path="/loadProduct" element={<LoadProduct />} />
            <Route path="/address" element={<Address />} />
            <Route path="/sendOrder" element={<SendOrder />} />
            <Route path="/confirmation" element={<Confirmation />} />
          </Routes>
          <Footer />
        </>
      </Router>
    </GlobalProvider>
  );
}

export default App;
