import React, { Component, useEffect, useState } from 'react'
import Link from 'next/link'
import styles from '../styles/design.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {AiFillFacebook} from 'react-icons/ai';
import {FcGoogle} from 'react-icons/fc';

// import User from "../models/User";

// const [backendData ,setBackendData] = useState([]);

// useEffect(()=>{
//   fetch('/api/register').then(
//     response => response.json()
//   ).then(
//     data=>{
//       setBackendData(data);
//     }
//   )
// },[])
export default class register extends Component{
// const Register = () => {
  constructor(props){
    super (props);
    this.state= {
      firstname:"",
      lastname:"",
      email:"",
      password:""
    };
    this.handleSubmit= this.handleSubmit.bind(this);
  }
// import { Button } from 'react-bootstrap';
// handlesubmit
  handleSubmit(e){
    try{
      e.preventDefault();
      const{ firstname, lastname, email, password} = this.state;
      console.log({firstname, lastname, email, password});
      fetch("http://localhost:8000/register",{
        method:"POST",
        crossDomain:true,
        headers:{
          "Content-Type":"application/json",
          Accept:"application/json",
          "Access-Control-Allow-Origin":"*",
        },
        body:JSON.stringify({
          firstname,
          lastname,
          email,
          password,
        }),

      }).then((res)=>res.json())
      .then((data)=>{
        console.log(data, "UserRegister");
      })
   
   
    }catch(error){
      console.log(error);
    }
  }
  render(){
  return (
 <div className={styles.register}>
    <div className='relative top-5 flex flex-row w-full'>
<div>

      <img className="mx-7 md:mx-14  h-12 w-auto" src='/icon1.png' width={25} height={25} alt="hand"/>
</div>
      {/* how to move a item to the right in navbar */}

      <div className={styles.register__sign}>
        <Link href='/login'>

        <button type='button' className="btn btn-primary  baseline mr-4 w-30 bg-blue-900   float-end">
Login →
</button>
        </Link>
        <p className='float-end text-xs md:text-base no-underline md:mx-4 mx-2 mt-2'>
         <a href='' className='no-underline text-slate-700' >
          Already have an account?
          </a> 
        </p>
      </div>
    </div>

<div className="flex mt-10 items-center w-screen justify-center px-4 sm:px-6 lg:px-8">
  <div className="w-full max-w-md ">
    <div className='mt-6 pt-0'>
      <h2 className="mt-0 text-center text-xl font-bold tracking-tight text-gray-900">
        Sign up</h2>
      
    </div>
    {/*  m */}
  
    <form id='m' onSubmit={this.handleSubmit} className="mt-2 space-y-6  shadow-2xl bg-[#ffff]" action={"/register"} method="POST">

      <div className="flex flex-col  space-y- m-8  rounded-md ">
        <div className='md:flex md:flex-row'>

        <div className='pt-10'>
            {/* first name */}
          <label  className=' font-semibold mb-2'>First Name</label><br/>
          <input  name="firstname" type="text" 
          onChange={e=>this.setState({firstname:e.target.value})}
           required className="w-60  rounded-md md:w-[95%] border-0 py-1.5 bg-slate-100 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
           placeholder="e.g john"/>
        </div>
         {/* last name */}
        <div className='pt-3.5'> 
          <label  className="font-semibold mt-4 mb-2">Last Name</label>
          <input  name="lastname" 
          onChange={e=>this.setState({lastname:e.target.value})}
          
          type="text"  required className=" w-60 rounded-md md:w-[80%] border-0 bg-slate-100 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" 
          placeholder="doe" />
        </div>
          </div>
        {/* email */}
        <div className='pt-2'>
          <label  className=' font-semibold mb-2'>Email</label><br/>

          <input  name="email" type="email" 
          onChange={e=>this.setState({email:e.target.value})}
          
          required className="w-60 rounded-md md:w-80 border-0 py-1.5 bg-slate-100 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" 
          placeholder="e.g johndoe@gmail.com"/>
        </div>
        {/* password */}
        <div>
          <label  className="font-semibold mt-4 mb-2">Password</label>
          <input id="password" name="password" 
          onChange={e=>this.setState({password:e.target.value})}
          
          type="password"  required className="relative block w-60 rounded-md md:w-80 border-0 bg-slate-100 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="Password" />
        </div>

      <div>
        <button type="submit" className="btn btn-primary mt-8 w-60 md:w-80 bg-blue-900">
          
          Sign up
        </button>
        </div>

      

      <div className="flex flex-row md:inline mt-8 w-[100%] pr-4  mb-8 justify-between">
        
          <p href="#" className="md:text-xs text-sm  no-underline ml-4 text-slate-700 inline hover:text-indigo-500">Already have an account?</p>
      
      
          <Link href="/login" className="md:text-xs text-sm no-underline mx-4 text-blue-800 md:font-semibold md:ml-4 hover:text-indigo-900">Login</Link>
        
      </div>
      <div className='flex flex-row md:ml-4 mt-0 mb-28'>
        <button type='button' className='inline text-sm w-30 mx-18 absolute pl-3 flex-row btn btn-primary'>
        <AiFillFacebook className='inline'/>  <p className='inline'>Facebook</p>
        </button>
        <button type='button' className='btn btn-light inline text-sm w-32 md:w-34 md:ml-40 ml-36 absolute flex-row '>
        <FcGoogle className='inline'/> 
         <p className='inline'> Google</p>
        </button>
      </div>

      </div>
    </form>
  </div>
</div>

        </div>
  )
}
}
// export default Register