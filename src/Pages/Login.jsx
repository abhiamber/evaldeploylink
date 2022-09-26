

// 0. axios should be used for making network requests;

// 1. input boxes which takes email and password from the user

// 2. in this page you should get the auth state from auth context and based on auth state;if user is already logged in then user should be redirected to home page

// 3. network request (POST) should be made to api endpoint `https://reqres.in/api/login` with email and password details;

// 4. button should not allow additional click till API call is complete; user should see loading indicator till API call is complete;

// 5. upon successful login, login success action is dispatched with token we get back as response and the authentication status and token is updated in the context API. user then gets redirected to home page;

// 6. Proper Alert should be displayed to user upon unsuccessful API call. the message can be `Something went wrong. please refresh.`

import React, { useState ,useContext} from "react";
import axios from 'axios'
import {AuthContext}  from '../Context/AuthContext/AuthContextProvider'
import {loading,success,failure} from '../Context/AuthContext/action'
import {useNavigate} from 'react-router-dom'



let user={
  email:"",
  password:""
}

const Login = () => {
   let [userDetails,setUserDetails]=useState(user)
   let {state,dispatch}=useContext(AuthContext)
   let navigate=useNavigate()

   if(state.isAuth){

    navigate("/Home")
   }
   
  //  console.log(state)


   function handleChange(e){

       setUserDetails({...userDetails,[e.target.name]:e.target.value})

   }

async function getData(params={}){

  dispatch(loading())

await axios.post(`https://reqres.in/api/login`,{
email:params.email,
password:params.password
   

}).then((res)=>{
  let data=res.data.token
  if(data){
    // console.log(res.data.token)
    dispatch(success(data))

  }

})
.catch((err)=>{
  dispatch(failure())
  console.log(err)})


}


     

   function handleClickForLogin(){
    // console.log(userDetails)

     getData(userDetails)
       

   }

   if(state.failure){

    return alert("Something went wrong. please refresh.")
   }

   
   

  return <div>

    <input  placeholder="email" type="email" name="email"  value={userDetails.email} onChange={handleChange}    />
    <input  placeholder="password" type="password" name="password" value={userDetails.password} onChange={handleChange}    />
    <button disabled={state.loading}   onClick={handleClickForLogin}> LOGIN </button>


  </div>;
};

export default Login;
