import React from 'react'
import Appbar from '../components/Appbar'
import Balance from '../components/Balance'

export default function Dashboard() {
  return (
    <div className='bg-slate-950 p-6 h-screen'>
      <Appbar />
      <div className=''>
        <Balance />
      </div>
    </div>
  )
}
