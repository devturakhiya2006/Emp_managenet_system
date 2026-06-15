import React from 'react'
import Header from '../../Fix/Header'
import TaskList from '../../Fix/TaskList'
import TaskListDash from '../TaskList/TaskListDash'
const EmployeeDashboard = ( props) => {
  return (
    <div className='p-10 bg-[#1c1c1c] h-screen'>
      <Header  changeUser={props.changeUser} data={props.data}/>
      <TaskList data={props.data}/>
      <TaskListDash data={props.data}/>
    </div>
  )
}

export default EmployeeDashboard
