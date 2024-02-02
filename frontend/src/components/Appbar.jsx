import React from 'react'

export default function Appbar() {
  return (
    <div className='shadow bg-slate-800 text-slate-300 h-14 flex justify-between'>
        <div className='flex text-lg cursor-pointer flex-col justify-center h-full ml-4'>
            PayTM App
        </div>
        <div className='flex mr-4 justify-center'>
          <div className='underline text-lg flex flex-col justify-center h-full'>
            Hello
          </div>
          <div className='ml-2'>
            <div className='pt-4 pb-8'>
              <div className=' bg-slate-600 text-xl cursor-pointer rounded-full w-7 h-7 pl-2 mb-2'>
                U
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}
