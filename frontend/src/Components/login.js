import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import {ToastContainer } from 'react-toastify'
import { handleError, handleSuccess } from './utils';
import { useNavigate } from 'react-router-dom';

function Login() {
    const navigate = useNavigate();
    const [loginInfo,setLoginInfo]=useState({
     
       email:'',
       password:''
     
    })
    const handleChange=(e)=>{
        const {name,value}=e.target;
        const copyLoginInfo={...loginInfo};
        copyLoginInfo[name]=value;
        setLoginInfo((loginInfo) => ({ ...loginInfo, [name]: value }));
        
        console.log(copyLoginInfo);
        }
  
        const handleSubmit=async (e)=>{
            e.preventDefault();
            const {email,password}=loginInfo;
            console.log("Entered ... ");
            if( !email||!password){
            return handleError('someone filed is missing ')
            }
            try{
            const url = "http://localhost:8080/auth/login";
            const respose=await fetch(url,{
                method:"Post",
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify(loginInfo)
            }
            );
            console.log(" response awaiting ");
            const result=await respose.json();
            
        
         
        const {success,message,jwtToken,name,error}=result;
        console.log("success is ",success);
        if(success){
            handleSuccess(message);
            localStorage.setItem('token',jwtToken);
            localStorage.setItem('loggedInUser',name)
           setTimeout(()=>{
            navigate('/home2');
        },1000)
        }
         else {
            handleError("Logout Failed");
        }
        
        }catch(err){
        handleError(err.message)
        }
         
        
        
        }
  return (
    <div className="containerLoginSignup">
    <div className='signup'>
     <form onSubmit={handleSubmit}>
        
        <div>
            <label htmlFor="email">
                <input type="email"
                id='email'
                name='email'
                autoComplete='email'
                onChange={handleChange}
                placeholder='Enter your email  ..'/>
            </label>
        </div>
        <div>
            <label htmlFor="password">
                <input type="password"
                id='password'
                name='password'
                autoComplete="current-password"
                onChange={handleChange}
                placeholder='Enter your password  ..'/>
            </label>
        </div>
        <div>
        <button>
           Login
        </button>
        </div>
        <span>Dont't have an account ?
            <Link style={{color:"black"}} to="/signup"> Signup</Link> 
        </span>
        </form> 
 <ToastContainer/>
    </div>
    </div>
  )
}

export default Login
