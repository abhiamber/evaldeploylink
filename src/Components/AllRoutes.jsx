import React from "react";
import {Route,Routes} from 'react-router-dom'
import Login from "../Pages/Login";
import Home from '../Pages/Home'
import Cart from '../Pages/Cart'
import PrivateRoute from "./PrivateRoute";

// all the routing using the routing library should be done from here; 

const AllRoutes = () => {
  return <div>
  
  
  <Routes>
  
  
  <Route  path="/"  element={<Login/>} ></Route>
  <Route  path="/Home"  element={  <PrivateRoute><Home/> </PrivateRoute> } ></Route>
  <Route  path="/cart"  element={ <PrivateRoute>  <Cart/> </PrivateRoute>  } ></Route>

  
  
  
  
  </Routes>
  
  
  </div>;
};

export default AllRoutes;
