
import React, { useEffect, useState } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { register } from '../../actions/userActions'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Signup = () => {
   const dispatch = useDispatch()
  const [name,setName] = useState()
  const [email,setEmail] = useState()
  const [password,setPas] = useState()

  const {userInfo,error} = useSelector((state) => state.userRegister)

  useEffect(() => {
        if(error){
          toast(error)
        }
  },[userInfo,error])

  useEffect(() => {
   
  },[name,email,password])


  const submithandler = (e) => {
    e.preventDefault();
    dispatch(register(name,email,password))

  }
  return (
    <div className='user'>

        <div className='signup'>
            <h2>Sign Up</h2>
            <form onSubmit={submithandler}>
                <label>Name</label> <br/>
                <input onChange={(e) => setName(e.target.value)} value={name} type='text' placeholder='Enter Your Name'/><br/>
                <label>Email</label> <br/>
                <input onChange={(e) => setEmail(e.target.value)} value={email} type='email' placeholder='Enter Your Email'/><br/>
                <label>Password</label> <br/>
                <input onChange={(e) => setPas(e.target.value)} value={password} type='password' placeholder='Enter Your Password'/><br/>
             
                <input type='submit' value='Sign Up'/><br/>
                <p>Already Have An Account, Please <span><Link to='/login'>Login</Link></span></p>
            </form>
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

export default Signup