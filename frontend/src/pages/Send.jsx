import React from 'react'
import Button from '../components/Button'

export default function Send() {

  return (
    <div className='bg-slate-950 h-screen flex justify-center items-center'>
      <div className='flex justify-center flex-col shadow-2xl text-slate-300 bg-slate-900 p-8'>
        <div className='text-lg flex items-center justify-center font-semibold'>
          Send Money
        </div>
        <div className='mt-4'>
          <div className='flex mt-5'>
            <div className='bg-slate-400 text-slate-800 rounded-full w-8 h-8'>
              <div className='ml-2.5 mt-0.5 text-lg font-semibold'>
                R
              </div>
            </div>
            <div className='ml-2 mt-1'>
                Friend's Name
            </div>
          </div>
        </div>
        <div className='mt-3'>
          <div>
            Amount (in Rs)
          </div>
          <div className='mt-2'>
            <input placeholder='Enter amount' className='rounded-lg pl-2' />
          </div>
        </div>
        <div className='mt-6'>
          <Button label={"Send"} />
        </div>
      </div>
    </div>
  )
}
