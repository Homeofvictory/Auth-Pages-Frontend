import React from 'react'
import Link from 'next/link'
import styles from '../styles/design.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {AiFillFacebook} from 'react-icons/ai';
import {FcGoogle} from 'react-icons/fc';


import facebook from '../image/facebook.svg';
import google from '../image/google.svg';

// import { Button } from 'react-bootstrap';
const Passwordresetemail = () => {
  return (
 <div className={styles.login}>
    <div className='relative top-5 flex flex-row w-full'>
<div>

      <img className="ml-3 md:mx-14  h-12 w-auto" src='/icon1.png' width={25} height={25} alt="hand"/>
</div>
      {/* how to move a item to the right in navbar */}

      <div className={styles.login__sign}>
        <Link href='/login' >

        <button type='button' className="btn btn-primary  baseline mr-2.5 w-30 bg-blue-900   float-end">
    Login →
</button>
        </Link>
        <p className='float-end text-xs md:text-base no-underline md:mx-4 mx-1.5 mt-2'>
         <a href='' className='no-underline text-slate-700' >
         Already have an account?
          </a> 
        </p>
      </div>
    </div>

<div className="flex mt-16 items-center w-screen justify-center px-4 sm:px-6 lg:px-8">
  <div className="w-full max-w-md ">
    <div className='mt-6 pt-0'>
      <h2 className="mt-0 text-center text-xl font-bold tracking-tight text-gray-900">
        Reset your password</h2>
      
    </div>
    <form id='form' className="mt-8 space-y-6  shadow-2xl bg-[#ffff]" action="#" method="POST">

      <div className="flex flex-col space-y- m-10  rounded-md ">

      <div>
          <label for="password" className="font-semibold mt-4 mb-2">Password</label>
          <input id="password" name="password" 
          type="password" 
           required 
           className="relative block w-60 rounded-md md:w-80 border-0 bg-slate-100 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="Password"
            
            />
        </div>
      <div>
          <label for="password" className="font-semibold mt-4 mb-2">Confirm Password</label>
          <input id="password" name="password" type="password" 
          required 
          className="relative block w-60 rounded-md md:w-80 border-0 bg-slate-100 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="Password" 
          
          />
        </div>

        <button type="submit" className="btn btn-primary text-bold mt-8 w-60 md:w-80 bg-blue-900">
         Set new password
        </button>
       

      

      <div className="flex flex-row md:inline mt-4 w-[100%] pr-4 md:ml-4 mb-8 justify-between">
        
          <p className="md:text-xs text-sm  no-underline ml-4 text-slate-700 inline hover:text-indigo-500">Remember password?</p>
      
      
          <Link href="/login" className="md:text-xs text-sm no-underline md:mx-4 text-blue-800 mr-3 md:font-semibold hover:text-indigo-900">Sign In</Link>
        
      </div>
     

      </div>
    </form>
  </div>
</div>

        </div>
  )
}

export default Passwordresetemail