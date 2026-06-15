import React from 'react'
import {useState} from 'react'

const Login = ({handleLogin}) => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  
  const submitHandler = (e) => {
  e.preventDefault(); 
  handleLogin(email,password)
  setEmail('')
  setPassword('')
   // console.log('email is:',email)
  // console.log('password is ',password)
  }
  return (
    <div className='flex h-screen w-screen items-center justify-center'>
      <div className='border-2 rounded-2xl p-20 border-emerald-600 '>
        <form
        onSubmit={ (e)=>{
          submitHandler(e)
        }}
        className='flex flex-col items-center justify-center gap-5'>
          <input 
          value={email}
          onChange={(e)=>{
            setEmail(e.target.value)
          }}
          required 
          className=' text-xl outline-none border-2 border-emerald-600 py-5 bg-transparent px-10 rounded-full' type="email"  placeholder="Enter Your Email"
          />
          <input 
          value={password}
          onChange={(e)=>{
            setPassword(e.target.value)
          }}
          required 
          className=' text-xl outline-none  border-2 border-emerald-600 py-5 px-10 rounded-full' type="password" placeholder="Enter your Password"
          /> 
          <button className=' mt-5 bg-emerald-600 text-white py-2 px-4 rounded-full' type="submit">Login</button>
        </form>
      </div>
    </div>
  )
}

export default Login
