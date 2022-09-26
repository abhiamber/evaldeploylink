import  { useContext } from "react";
import { AuthContext } from "../Context/AuthContext/AuthContextProvider";
import {Navigate} from 'react-router-dom'

// 1. This particular component shall be a wrapper which based on authentication status either redirects user back to login page or renders the same page;
// 2. if user is not logged in; user should be redirected to the login page;

const PrivateRoute = ({children}) => {

let {state}=useContext(AuthContext)

if(!state.isAuth){

  return <Navigate to="/" />
}


  return children
};

export default PrivateRoute;
