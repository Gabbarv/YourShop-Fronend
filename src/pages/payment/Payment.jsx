
import React from 'react'
import { useState } from 'react'
import {BiRupee} from 'react-icons/bi'
import {useNavigate} from 'react-router-dom'

import './payment.css'
import { useDispatch, useSelector } from 'react-redux'
import { createOrder } from '../../actions/orderActions'
import { useEffect } from 'react'

const Payment = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const user = JSON.parse(localStorage.getItem('userInfo'))
    const shippingDetails = JSON.parse(localStorage.getItem('shippingAddress'))
    const items = JSON.parse(localStorage.getItem('cartItems'))
    const [paymentMethod,setPaymentMethod] = useState("")
   const orderDetails = useSelector(state => state.orderCreate)
   
    useEffect(() => {
      console.log(orderDetails.order)
      if(orderDetails.success){
        navigate(`/order/${orderDetails.order._id}`)
      }
    },[orderDetails])

    const submitHandler = (e) => {
      e.preventDefault()
      dispatch(createOrder({
        email: shippingDetails.email,
        products: items,
        address: shippingDetails.address,
        amount: shippingDetails.subTotal,
        userId: user._id,
        paymentMethod: paymentMethod


        
      }))
    
      
      
    }

    
  return (
    <div className='payment'>
        <div className='payment-details'>
        <h1>Shipping Details</h1>
        <div>
         <h4>Name:&nbsp;<span>{shippingDetails.fullName}</span></h4>
         <h4>Email:&nbsp;<span>{shippingDetails.email}</span></h4>
         <h4>Mob No:&nbsp;<span>{shippingDetails.mobNo}</span></h4>
         <h4>Address:&nbsp;<span>{shippingDetails.address}</span></h4>
         <h4>Pincode:&nbsp;<span>{shippingDetails.pincode}</span></h4>
         <h4>District:&nbsp;<span>{shippingDetails.district}</span></h4>
         <h4>State:&nbsp;<span>{shippingDetails.state}</span></h4>
            
        </div>
       <form onSubmit={submitHandler}>
        <div className='payment-method'>
            <h2>Select Payment Method</h2>
            <input type='checkbox' checked={paymentMethod === 'UPI,NET Banking'} value='UPI,NET Banking' onChange={() => setPaymentMethod("UPI,NET Banking")}   />
            <label htmlFor='payment-method'>UPI,NET Banking</label><br/>
            <input type='checkbox' checked={paymentMethod === 'COD'} value='COD' onChange={() => setPaymentMethod("COD")} />
            <label htmlFor='payment-method'>Cash On Delivery</label>
        </div>
        <button type='submit' className='pay-btn'>Pay&nbsp;(<span><BiRupee/></span>{shippingDetails.subTotal})</button>
        </form>
        </div>
        </div>
  )
}

export default Payment