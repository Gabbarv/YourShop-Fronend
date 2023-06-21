
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {Link} from 'react-router-dom'
import { login } from '../../actions/userActions'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './user.css'

const Login = () => {
  const dispatch = useDispatch()
  const [email,setEmail] = useState()
  const [password,setPas] = useState()
  useEffect(() => {
  

  },[email,password])

  const {userInfo,error} = useSelector((state) => state.userLogin)

  useEffect(() => {
        if(error){
          toast("Invalid Username or Password")
        }
  },[userInfo,error])

  const handlesubmit = (e) => {
    e.preventDefault()
    dispatch(login(email,password))
  }
  return (
    <div className='user'>
        <div className='login'>
            <h2>Log in</h2>
            <form onSubmit={handlesubmit}>
            <label>Email</label><br/>
            <input onChange={(e) => setEmail(e.target.value)} value={email} type="email" placeholder='Enter your email' /><br/>
            <label>Password</label><br/>
            <input onChange={(e) => setPas(e.target.value)} value={password} type="Password" placeholder='Enter your Password' /><br/>
            <input type='submit' value='Log In' />
            </form>
            <p>Don't have an account <span><Link to='/signup'>Sign Up</Link></span> </p>
        </div>

        <ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
/>

    </div>
  )
}

export default Login