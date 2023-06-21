import React, { useEffect } from 'react'
import './myaccount.css'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updatePassword } from '../../actions/userActions'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Myaccount = () => {
  
  const dispatch = useDispatch()
  const [oldPassword,setOldPassword] = useState()
  const [newPassword,setNewPassword] = useState()
  const [cnfnewPassword,setcnfPassord] = useState()
  const [match,setMatch] = useState()
  const user = JSON.parse(localStorage.getItem('userInfo'))
  const {success,error} = useSelector(state => state.updatePass)

  useEffect(() => {
       if(success){
          toast(success)
       }else if(error){
          toast(error)
       }
  },[success,error])

  const formsubmithandler = (e) => {
       e.preventDefault()

       if(newPassword != cnfnewPassword){
        setMatch(false)
       }else{
        setMatch(true)
        dispatch(updatePassword(user.email,oldPassword,newPassword))
       }
  }

 return (
   <div className='account-update'>
    <h2>Update Your Account</h2>
    <h3>1.Default Delivery Details</h3>
    <div className='profile-update'>
     <div className='profile-left'>
      <label for='name'>Name</label><br/>
      <input id='name' type='text' placeholder=''/><br/>
      <label for='number'>Mobile No(can not be updated)</label><br/>
      <input id='number' type='number' placeholder=''/><br/>
     </div>
     <div className='profile-right'>
     <label for='email'>Email(can not be updated)</label><br/>
      <input id='email' type='email' placeholder=''/><br/>
      <label for='pincode'>Pincode</label><br/>
      <input id='pincode' type='number' placeholder=''/><br/>
     </div>
    </div>
    <label for='address'>Address</label><br/>
    <textarea rows='8' /><br/>
    <input type='submit' value='Submit' className='submit-btn'/>
    <h3>2.Update Password</h3>
    <form onSubmit={formsubmithandler}>
    <div className='update-password'>
      <div className=''>
        <label for='curr-password'>Current Password</label><br/>
        <input onChange={(e) => setOldPassword(e.target.value)} id='curr-password' type='password' placeholder='Enter Your Current Password'/>
      </div>
      <div>
      <label for='new-password'>New Password</label><br/>
        <input onChange={(e) => setNewPassword(e.target.value)} id='new-password' type='password' placeholder='Enter New Password'/>
      </div>
      <div>
      <label for='cnf-new-password'>Confirm New Password</label><br/>
        <input onChange={(e) => setcnfPassord(e.target.value)} id='cnf-new-password' type='password' placeholder='Confirm New Password'/>
        {(match!=null && !match) && <p className='password-error'>Not Matiching With New Password</p>}
      </div>
      <div>
      <label for='cnf-new-password'></label><br/>
      <input type='submit' value='Change Password' className='submit-btn'/>
      </div>
     
    </div>

    </form>
   
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

export default Myaccount