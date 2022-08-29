// import logo from './logo.svg';
import React from "react"
import './App.css';

import Dashboard from "./components/Dashboard";
import Users from "./components/users/Users"
import CreateUser from "./components/users/CreateUser"
import Login from "./components/Login"

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Portal from "./components/Portal"
import UserView from './components/users/UserView';
import EditUser from './components/users/EditUser';
import Products from "./components/products/Products";
import ProductView from "./components/products/ProductView";
import CreateProduct from "./components/products/CreateProduct";
import EditProduct from "./components/products/EditProduct";
function App() {
  
  return (
    <BrowserRouter>
    
        <Routes>
           <Route path="/" element={<Login/>}/>
           <Route path="/portal" element={<Portal/>}>
              <Route path="dashboard" element={<Dashboard/>}/>
              <Route path="users" element={<Users/>}/>
              <Route path="users/:id" element={<UserView />}/>  
              <Route path="user/edit/:id" element={<EditUser />}/>   
              <Route path="create-user" element={<CreateUser/>}/>
              <Route path="products" element={<Products />}/>
              <Route path="create-product" element={<CreateProduct />}/>
              <Route path="products/:id" element={<ProductView/>}/>
              <Route path="products/edit/:id" element={<EditProduct/>}/>

           </Route>
           
        </Routes>
     
    </BrowserRouter>
  );
}

export default App;
