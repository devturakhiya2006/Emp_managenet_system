import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthProvider'

const AllTask = ({data}) => {
  const [userData,setUserData]=useContext(AuthContext)
  return (
    <div className='bg-[#1c1c1c]  scrollbar-none mt-5 p-5 rounded'>
      <div className='flex mb-3 justify-between rounded  bg-red-400 py-2 px-4'>
        <h2 className='text-sm font-medium w-1/5 '>Employee Name</h2>
        <h3 className='text-sm font-medium w-1/5 '>New Task</h3>
        <h5 className='text-sm font-medium w-1/5 '>Active Task</h5>  
        <h5 className='text-sm font-medium w-1/5 '>Completed</h5>  
        <h5 className='text-sm font-medium w-1/5 '>Failed</h5>  
      </div>
      <div className=' '>
        {Array.isArray(userData) &&
        userData.map(function(elem,idx){
        
        return <div key={idx} className='flex mb-3  justify-between rounded border-2 border-emerald-400 py-2 px-4'>
        <h2  className=' text-sm font-mediu w-1/5'>{elem.firstName}</h2>
        <h3  className=' text-sm font-mediu w-1/5 text-blue-600'>{elem.taskCounts.newTask}</h3>
        <h5  className=' text-sm font-mediu w-1/5 text-yellow-400'>{elem.taskCounts.active}</h5>  
        <h5  className=' text-sm font-mediu w-1/5 text-white'>{elem.taskCounts.completed}</h5>  
        <h5  className=' text-sm font-mediu w-1/5 text-red-600'>{elem.taskCounts.failed}</h5>  
      </div>
})
}
    </div>
     
      {/* <div className='flex mb-3 justify-between rounded  bg-green-400 py-2 px-4'>
        <h2>Dev</h2>
        <h3>Make a UI Design</h3>
        <h5>Status</h5>  
      </div>
      <div className='flex mb-3 justify-between rounded  bg-blue-400 py-2 px-4'>
        <h2>Dev</h2>
        <h3>Make a UI Design</h3>
        <h5>Status</h5>  
      </div>
      <div className='flex mb-3 justify-between rounded  bg-yellow-400 py-2 px-4'>
        <h2>Dev</h2>
        <h3>Make a UI Design</h3>
        <h5>Status</h5>  
      </div>
      <div className='flex mb-3 justify-between rounded  bg-purple-400 py-2 px-4'>
        <h2>Dev</h2>
        <h3>Make a UI Design</h3>
        <h5>Status</h5>  
      </div> */}
    </div>
  )
}

export default AllTask
