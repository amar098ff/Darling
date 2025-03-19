import React from 'react';
import { useState } from 'react';
import { Ioeye } from "react-icons/io5";
import { IoEyeOffOutline } from "react-icons/io5";
import { Link ,useNavigate } from 'react-router-dom';
import { IoMdMail } from "react-icons/io";
import axios from 'axios'
import { toast } from 'react-toastify';
import { IoMailSharp } from "react-icons/io5";
import {LuEyeClosed} from "react-icons/lu";



const Login = () => {
  const [email,setemail]=useState('')
  const [password,setPassword]=useState('')
  const [visible,setVisible]=useState(true)
  return (
    <div className='h-screen flex justify-center items-center bg-gray-100'>
      <div className='box-border flex flex-col bg-slate-200 h-96 w-96 shadow-xl shadow-black-600 rounded-xl'>
        <div>
          <h1 className='text-center text-2xl font-bold mt-4'>User Login</h1>
        </div>
        <div className='flex justify-center items-center m-5'>
          <form className='w-full flex-col justify-center items-center mt-5'>
            <div className='flex rounded-lg bg-sky-100 shadow-lgshadow-black-50 w-full h-10 justify-between items-center'>
              <input className='w-full focus:outline-none text-start' type='email' required autoComplete='email' name='email' value={email} placeholder='Email' onChange={(e)=>setemail(e.target.value)}/>
              <IoMailSharp className='mr-4 h-8 w-8'/>
            </div>
            <div className='flex rounded-lg bg-sky-100 shadow-lgshadow-black-50 w-full h-10 justify-between items-center mt-5'>
            <input className='w-full focus:outline-none text-start' type='password' required autoComplete='current-password' name='password' value={email} placeholder='Password' onChange={(e)=>setPassword(e.target.value)}/>
            {
              visible?(<LuEyeClosed onClick={()=>setVisible(false)}/>):(<Lueye className='mr-4 h-8 w-8' onClick={()=>setVisible(true)}/>)
            }
            </div>
            <div className='w-full flex mt-2 justify-center'>
              <input className='ml-2' type='checkbox'/>
              <label className='text-xs ml-2'>Remember me</label>
              <a href='#' className='ml-6 text-xs text-sky-500' >forgot password?</a>
            </div>
            <button type='submit' className='w-full bg-cyan-400 text-center text-xl mt-5 rounded-lg h-10'>Submit</button>
            <div className='flex w-full mt-3 justify-center'>
              <h6 className='text-xs'>Dont have an account</h6>
              <Link className='ml-4 text-xs text-sky-500' to={'/Signup'}>Sign-Up</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
