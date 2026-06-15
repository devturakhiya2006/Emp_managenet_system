import React, { useContext, useState } from 'react'
import { AuthContext } from '../context/AuthProvider'
import Login from '../components/Auth/Login'

const CreateTask = () => {

    const [userData,setUserData]=useContext(AuthContext)
  
  const [tastTitle, settastTitle] = useState('')
  const [tastDescription, settastDescription] = useState('')
  const [tastDate, settastDate] = useState('')
  const [assignTo, setassignTo] = useState('')
  const [taskcategory, settaskCategory] = useState('')
  const [Newtask, setNewTask] = useState({})
  
  const submitHandler = (e) =>{
    e.preventDefault()
    
    setNewTask({
  taskTitle: tastTitle,
  taskDescription: tastDescription,
  taskDate: tastDate,
  taskCategory: taskcategory,
  active: false,
  newTask: true,
  failed: false,
  completed: false
})
    const data = userData
    

    data.forEach(function(elem){
     if(assignTo==elem.firstName){
      elem.tasks.push(Newtask)
      elem.taskCounts.Newtask=elem.taskCounts.Newtask+1
    }
    })
    setUserData(data)
    console.log(data);
    //localStorage.setItem('emp',JSON.stringify(data))

    setassignTo('')
    settaskCategory('')
    settastDate('')
    settastDescription('')
    settastTitle('')

    
  }
  return (
      <div className='p-5 bg-[#1c1c1c] mt-7 rounded'>
        <form onSubmit={(e)=>{
          submitHandler(e)
        }} className='flex w-full flex-wrap items-start justify-between'>
          <div className='w-1/2'>
              <div>
                <h3 className='text-sm text-gray-300 mb-0.5'>Task Title</h3>
                <input 
                value={tastTitle}
                onChange={(e)=>{
                  settastTitle(e.target.value)
                }}
                className='text-sm py-1 px-2 w-4/5 outline-none bg-transparent rounded border-[1px] border-gray-500 mb-4' type="text" placeholder='place ui title'
                />
              </div>
              <div>
                <h3 className='text-sm text-gray-300 mb-0.5'>Date</h3>
                <input
                value={tastDate}
                onChange={(e)=>{
                  settastDate(e.target.value)
                }}
                 className='text-sm py-1 px-2 w-4/5 outline-none bg-transparent rounded border-[1px] border-gray-500 mb-4' type="date" placeholder='date'
                 />
              </div>
              <div>
                <h3 className='text-sm text-gray-300 mb-0.5'>Assign</h3>
                <input
                value={assignTo}
                onChange={(e)=>{
                  setassignTo(e.target.value)
                }}
                 className='text-sm py-1 px-2 w-4/5 outline-none bg-transparent rounded border-[1px] border-gray-500 mb-4' type="text" placeholder='Employee Name'
                 />
              </div>
              <div>
                 <h3 className='text-sm text-gray-300 mb-0.5'>Category</h3>
                 <input 
                 value={taskcategory}
                onChange={(e)=>{
                  settaskCategory(e.target.value)
                }}
                 className='text-sm py-1 px-2 w-4/5 outline-none bg-transparent rounded border-[1px] border-gray-500 mb-4' type="text" placeholder='design ,dev'
                 />
              </div>
                
          </div>
          <div className="w-2/5 flex flex-col items-start">
          <h3 className='text-sm text-gray-300 mb-0.5'>Description</h3>
          <textarea
          value={tastDescription}
          onChange={(e)=>{
            settastDescription(e.target.value)
          }}
           className=' w-full  h-40 text-sm py-1 px-2 w-4/5 outline-none bg-transparent rounded border-[1px] border-gray-500 mb-4' type="text" placeholder='description'
           />
          <button className='bg-emerald-500 hover:bg-emerable-700 px-5 py-3 rounded text-sm mt-4 w-full'> Create Task </button>
          </div>
        </form>
      </div>
  )
}

export default CreateTask
