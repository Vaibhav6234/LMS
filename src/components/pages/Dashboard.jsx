import React from 'react'
import Sidebar from '../Sidebar'
import Course from '../Course'

const Dashboard = () => {
  return (
    <div className='m-[2px] flex bg-slate-950 gap-4 '>
      <div className='h-[500px] shadow shadow-white'>
       <Sidebar/>
      </div>

      <div className=' flex flex-wrap w-full justify-between '>
        <Course/>
        <Course/>
        <Course/>
        <Course/>
        <Course/>
        <Course/>
        <Course/>
      </div>
    </div>
  )
}

export default Dashboard