
// 0. axios should be used for making network requests;

// 1. API request should be made to `https://fakestoreapi.com/products` on mount and get the data and the same data should be displayed in the form of cards ( 3 per row in large screens, 2 per row  in medium screens and 1 per row  in small screen  )

// 2. loading, error and data state should be maintained; show proper loading indicator and error state when required;

// 3. each product card should atleast contain product image, title , price and a add to cart button;

// 4. cart data is maintained in the cart context and based on the cart data if the product is already added to the cart, then the add to cart button should be disabled for that particular product;

// 5. clicking on add to cart button will add the product to the cart; this cart is maintained in the cart context; as useReducer has been used for state management in cart context; you need to dispatch some add_to_cart action to add new product to the cart.
import React, { useContext, useEffect, useState } from "react";
import axios from 'axios'
import {CartContext}  from '../Context/CartContext/CartContextProvider'
import {handleAddtoCart} from '../Context/CartContext/action'


const Home = () => {

  let [loading,setLoading]=useState(false)
  let [error,setError]=useState(false)
  let [data,setData]=useState([])

  let {cartdispatch}=useContext(CartContext)
    //  console.log(cartdispatch)

async function getData(){
  setLoading(true)
await axios.get(`https://fakestoreapi.com/products`)
.then  (res=>{
  setLoading(false)
  setData(res.data)
  // console.log(res.data)
})
.catch(err=>{
  setLoading(false)
  setError(true)
  console.log(err)})

}





  useEffect(()=>{

    getData()

  },[])

if(loading){

  return <h1>...........loadingData</h1>
}


if(error){

  return <h1>...........Something went wrong</h1>
}


function handleAdd(item){
  // console.log(item)
  cartdispatch(handleAddtoCart(item))

}

  return <div>
  
  {data.map(item=>{
return  <div key={item.id} >
      
<img   src={item.image} alt="" />
<h3>{item.title}</h3>
<h4>{item.price}</h4>
<button  onClick={()=>handleAdd(item) } >Add to Cart</button>

</div>

  })}
  
  
  </div>;
};

export default Home;
