import React from 'react'

export default function Balance({value}) {
  return (
    <div className='pt-5 text-lg font-semibold flex text-slate-300'>
        <div className='pr-2'>
            Your Balance:
        </div>
        <div className=''>
            🤑 <span className='underline'>{value}</span>
        </div>
    </div>
  )
}
