import React from 'react'
import Sidebar from '../components/Sidebar'
import MainBar from '../components/MainBar'
const Dashboard = () => {
  return (
    <div className='flex bg-white text-black dark:bg-[#131619] dark:text-white h-screen'>
        <Sidebar />
        <MainBar />
    </div>
  )
}

export default Dashboard