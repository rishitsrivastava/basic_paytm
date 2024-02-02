import React from 'react'
import Appbar from '../components/Appbar'
import Balance from '../components/Balance'
import Users from '../components/Users'

export default function Dashboard() {
  return (
    <div className=' bg-slate-950 p-16 h-screen'>
      <Appbar />
      <div className=''>
        <Balance />
        <Users />
      </div>
    </div>
  )
}
