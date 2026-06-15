import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'

const TaskListDash = ({data}) => {
  
  return (
    <div id='taskList' className='h-[55%] px-3 overflow-x-auto scrollbar-none gap-5 w-full flex items-center justify-start py-5  mt-10'>
      {data.tasks.map((elem , idx)=>{
         if(elem.active){
            return <AcceptTask key={idx} data={elem} />
         }
         if(elem.newTask){
           return < NewTask key={idx} data={elem}/>
         }
         if(elem.completed){
          return < CompleteTask key={idx} data={elem}/>
         }
         if(elem.failed){
          return <FailedTask  key={idx} data={elem} />
         }
      })}
      
      {/* <AcceptTask/>
      <NewTask/>
      <CompleteTask/>
      <FailedTask/> */}

      
      {/* <div className='  flex-shrink-0 h-full w-[300px] p-5 bg-red-400 rounded-xl'>
       <div className='flex justify-between items-center' >
           <h3 className='bg-red-500 px-3 py-1 rounded text-sm '>High </h3>
           <h4 className='text-sm'>23-aug-2024 </h4>
       </div>
        <h2 className='mt-5 text-2xl font-semibold'>Make a Youtube Video </h2>
        <p className='mt-2 text-sm'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate! Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate! 
        </p>
      </div>
      <div className='  flex-shrink-0 h-full w-[300px] p-5 bg-blue-400 rounded-xl'>
       <div className='flex justify-between items-center' >
           <h3 className='bg-red-500 px-3 py-1 rounded text-sm '>High </h3>
           <h4 className='text-sm'>23-aug-2024 </h4>
       </div>
        <h2 className='mt-5 text-2xl font-semibold'>Make a Youtube Video </h2>
        <p className='mt-2 text-sm'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate! Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate! 
        </p>
      </div>
      <div className='  flex-shrink-0 h-full w-[300px] p-5 bg-yellow-400 rounded-xl'>
       <div className='flex justify-between items-center' >
           <h3 className='bg-red-500 px-3 py-1 rounded text-sm '>High </h3>
           <h4 className='text-sm'>23-aug-2024 </h4>
       </div>
        <h2 className='mt-5 text-2xl font-semibold'>Make a Youtube Video </h2>
        <p className='mt-2 text-sm'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate! Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate! 
        </p>
      </div>
      <div className='  flex-shrink-0 h-full w-[300px] p-5 bg-green-400 rounded-xl'>
       <div className='flex justify-between items-center' >
           <h3 className='bg-red-500 px-3 py-1 rounded text-sm '>High </h3>
           <h4 className='text-sm'>23-aug-2024 </h4>
       </div>
        <h2 className='mt-5 text-2xl font-semibold'>Make a Youtube Video </h2>
        <p className='mt-2 text-sm'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate! Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate! 
        </p>
      </div> */}
      
      
    </div>
  )
}

export default TaskListDash
