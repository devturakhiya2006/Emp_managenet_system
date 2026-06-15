import React, { useState } from 'react'
import { setLocalStorage } from '../utils/LocalStorage'

const Header = (props) => {

  const [username, setUsername] = useState('')
  
  // if(!data){
  //   setUsername('Admin ')
  // }else{
  //   setUsername(data.firstName)
  // }

  const logoutUser = () =>{
   localStorage.setItem('loggedInUser','')
   props.changeUser(null)
   //window.location.reload()
  }
    
  
  return (
    <div className='flex items-end justify-between'>
      <h1 className='text-2xl font-medium'> Hello <br/> <span className='text-3xl font-semibold'> username✌️ </span></h1>
      <button 
      onClick={logoutUser}
      className='bg-red-600 text-white text-lg font-medium px-4 py-2 rounded-sm active:hover:scale-105'>
      Log out
      </button>
    </div>
  )
}

export default Header
