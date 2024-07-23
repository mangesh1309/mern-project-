import React from 'react';
import { Link } from 'react-router-dom';

export default function Signup() {
  return (
    <div className='p-3 max-w-lg mx-auto'>

      <h1 className='text-3xl text-center font-semibold my-7'>Sign Up</h1>

      <form className='flex flex-col gap-4'>
        <input type="text" id="username" placeholder="Enter Your Username" className='border p-3 round' />
        <input type="email" id="email" placeholder="Enter Your Email" className='border p-3 round' />
        <input type="password" id="password" placeholder="Enter Your Password" className='border p-3 round' />

        <button className='bg-slate-700 text-white p-3 rounded-lg hover:opacity-85'>SUBMIT</button>
      </form>

      <div className='flex gap-3 py-3'>
        <p className='font-semibold'>Haven an account?</p>
        <Link to={"/signin"}>
          <span className='text-blue-700 font-semibold'>Sign In</span>
        </Link>
      </div>
    </div>
  )
}
