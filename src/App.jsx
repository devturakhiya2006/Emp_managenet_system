import React, { useContext, useDebugValue, useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { getLocalStorage, setLocalStorage } from './utils/LocalStorage'
import { AuthContext } from './context/AuthProvider'
const App = () => {

  // useEffect(() => {
  //   setLocalStorage()
  // }, [])

   const [user, setUser] = useState(null)
  const [LoggedInUserdata, setLoggedInUserdata] = useState(null)
  const [userData,setUserData] = useContext(AuthContext)

 useEffect(() => {
    const loggedInUser = localStorage.getItem('loggedInUser')

    if(loggedInUser){
      const userData=JSON.parse(loggedInUser)
      setUser(userData.role)
      setLoggedInUserdata(userData.data)
    }
  },[])

 

  // useEffect(() => {
  //   if(userData){
  //     const loggedInUser=localStorage.getItem("loggedInUser")
  //     if(loggedInUser){
  //       setUser(loggedInUser.role)
  //     }
  //   }
  // }, [])
  

  const handleLogin=(email,password)=>{
    if(email=='admin@me.com' && password== '123'){
      setUser('admin')
      localStorage.setItem('loggedInUser',JSON.stringify({role:'admin'}))
    }else if(userData){
      const emp = userData.find((e)=>email==e.email &&  e.password == password)
      if(emp){
        setUser('emp')
        setLoggedInUserdata(emp)
        localStorage.setItem('loggedInUser',JSON.stringify({role:'emp',data:emp}))
      }
    }
    else{
      alert("invalid ")
    }
  }
 
  
  

  return (
    <div className="">
      {!user ? <Login handleLogin={handleLogin}/>:''}
      {user == 'admin' && <AdminDashboard changeUser={setUser} /> }
      {user == 'emp' ? <EmployeeDashboard changeUser={setUser} data={LoggedInUserdata} />:null }
       {/* <EmployeeDashboard/>  */}
             {/* <AdminDashboard/> */}
    </div>
  )
}
export default App
