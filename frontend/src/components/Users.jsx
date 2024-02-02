import React, { useState } from 'react'
import Button from './Button'

export default function Users() {
    const [ users, setUsers ] = useState([{
        firstName: "Rishi",
        lastName: "Srivastava",
        _id: 1
    }, {
        firstName: "Rishi",
        lastName: "Srivastava",
        _id: 1
    }, {
        firstName: "Rishi",
        lastName: "Srivastava",
        _id: 1
    }, {
        firstName: "Rishi",
        lastName: "Srivastava",
        _id: 1
    }, {
        firstName: "Rishi",
        lastName: "Srivastava",
        _id: 1
    }]);

  return (
    <div className='bg-slate-800 shadow h-[25rem] text-slate-300 p-3'>
        <div className='flex mb-6'>
            <div className='font-medium text-lg'>
                Users
            </div>
            <div>
                <input type="text" placeholder='Search Users...' className='w-[13rem] pl-3 ml-4 rounded-3xl' />
            </div>
        </div>
        
        <div className='flex flex-col'>
            {users.map(user => <User user={user} />)}
        </div>
    </div>
  )
}

function User({user}) {
    return <div className="flex justify-between mb-4">
        <div className="flex">
            <div className="rounded-full h-12 w-12 bg-slate-200 flex justify-center mt-1 mr-2">
                <div className="flex flex-col justify-center text-slate-600 h-full text-xl font-semibold">
                    {user.firstName[0]}
                </div>
            </div>
            <div className="flex flex-col justify-center h-ful">
                <div>
                    {user.firstName} {user.lastName}
                </div>
            </div>
        </div>

        <div className="flex flex-col justify-center h-ful">
            <Button label={"Send Money"} />
        </div>
    </div>
}
