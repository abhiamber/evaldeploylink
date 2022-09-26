import React from "react";
import{Link} from 'react-router-dom'

// 1. Navbar should be responsive
// 2. On the left hand side; If the user has logged in; Token should be displated; else Token shouldn't be shown.
// 3. on the right hand side; There will be there different links. `HOME` `LOGIN` `CART`

const Navbar = () => {
  return <div>
  
  <Link  to="/Home" >HOME</Link>
  <Link  to="/" >LOGIN</Link>

  <Link  to="/cart" >CART</Link>

  
  
  </div>;
};

export default Navbar;
