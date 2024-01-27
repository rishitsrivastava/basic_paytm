import React from 'react'

export default function Signup() {
  return (
    <div className='flex items-center justify-center bg-gray-900 h-screen'>
        <div className='bg-gray-800 p-6 rounded-lg shadow-2xl w-2/5 text-white'>
            <div className='flex pb-4 items-center justify-center flex-col'>
                <h1 className='text-2xl'>Sign Up</h1>
                <h3 className='text-xl flex text-center justify-center items-center pt-3'>Enter your information to create an account</h3>
            </div>
            <div>
                <form action="">
                  <label className=''>First Name</label>
                  <input className='pl-2 w-full mb-4 text-gray-900' type="text" placeholder='John'/>

                  <label className='pr-24'>last Name</label>
                  <input className='pl-2 w-full mb-4 text-gray-900' type="text" placeholder='Doe'/>
                  
                  <label className='pr-24'>email</label>
                  <input className='pl-2 w-full mb-4 text-gray-900' type="text" placeholder='John@gmail.com'/>

                  <label className='pr-24'>Password</label>
                  <input className='pl-2 w-full mb-4 text-gray-900' type="password" placeholder='Password'/>

                  <button className='flex mt-5 flex-col justify-center items-center font-bold bg-white text-gray-900 w-full'>Sign Up</button>

                  <p className='flex flex-col items-center justify-center pt-4'>Already have an account? <a className='underline' href="https://rishitsrivastava.vercel.app">Click here</a></p>
                </form>
            </div>
        </div>
    </div>
  )
}
