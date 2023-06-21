import React from 'react'
import { useState } from 'react'
import {BiRupee} from 'react-icons/bi'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, removeFromCart, saveShippingAddress } from '../../actions/cartActions'
import { useNavigate } from "react-router-dom";



import './checkout.css'

const Checkout = () => {

    const user = JSON.parse(localStorage.getItem('userInfo'))
    const navigation = useNavigate();

    const [fullName,setFullName] = useState('')
    const [address,setAddress] = useState('')
    const [mobNo,setMobNo] = useState('')
    const[pincode,setPincode] = useState('')
    const [district,setDistrict] = useState('')
    const [state,setState] = useState('')
    useState(() => {},[fullName,address,mobNo,pincode,district,state])

    const dispatch = useDispatch()
    const cart = useSelector((state) => state.cart)
    const { cartItems } = cart
   var subTotal = 0;
    

    const removefromcart = (id) => {
            dispatch(removeFromCart(id))
    }
     cartItems.map(cartItem => (
       subTotal = subTotal + (cartItem.qty*cartItem.price)
     ))
     const submitHandler = (e) => {
        e.preventDefault()
        dispatch(saveShippingAddress({ fullName,address,mobNo,pincode,state,district,email: user.email,subTotal }))
        navigation('/payment')
      }
  return (
    <div className='checkout'>
        <form onSubmit={submitHandler}>
        <h1>Checkout</h1>
        <h2>1.Delivery details</h2>
        <div className='form-grid'>
            <div>
                <label>Full Name</label><br/>
                <input onChange={(e) => setFullName(e.target.value)} type='text' value={fullName}/>
            </div>
            <div>
                <label>Email</label><br/>
                <input type='email' value={user.email} disabled />
            </div>
        </div>
        <div className='adrs-form'>
            <label htmlFor="">Address</label> <br/>
            <textarea onChange={(e) => setAddress(e.target.value)} value={address} />
        </div>
        <div className='form-grid'>
            <div>
                <label>Mobile No</label><br/>
                <input onChange={(e) => setMobNo(e.target.value)}  type='number' value={mobNo}/>
            </div>
            <div>
                <label>PinCode</label><br/>
                <input onChange={(e) => setPincode(e.target.value)} type='number' value={pincode}/>
            </div>
        </div>
        <div className='form-grid'>
            <div>
                <label>State</label><br/>
                <input onChange={(e) => setState(e.target.value)} type='text' value={state}/>
            </div>
            <div>
                <label>District</label><br/>
                <input onChange={(e) => setDistrict(e.target.value)} type='text' value={district}/>
            </div>
        </div>


        <div className='place-order'>
        <h2>2.Review Items And Pay</h2>
        <div className='place-order-details'>
            <div className='place-order-head'>
                <div>
                    <h4>Product</h4>
                </div>
                <div>
                <h4>Qty</h4>
                </div>
                <div>
                <h4>Total</h4>
                </div>
            </div>
            <hr/>

            {cartItems.map(cartItem => (
               <div className='place-order-head'>
               <div>
                   <h4>{cartItem.title}</h4>
               </div>
               <div>
                   <div className='item-qty'>
                       <button onClick={() => {

if(cartItem.qty === 1){
    removefromcart(cartItem.product)
}else{
    dispatch(addToCart(cartItem.product,cartItem.qty-1))
}

}}>-</button>
                       <p>{cartItem.qty}</p>
                       <button onClick={() => dispatch(addToCart(cartItem.product,cartItem.qty+1))}>+</button>
                   </div>
                   
               </div>
               <div>
               <p><span><BiRupee/></span>{cartItem.qty*cartItem.price}</p>
               </div>
           </div>

            ))}
           
            <hr/>
            <div className='place-order-head'>
                <div>
                    <h4>Subtotal</h4>
                </div>
                <div></div>
                <div><p><span><BiRupee/></span>{subTotal}</p></div>
            </div>
            <hr/>
            <div className='place-order-head'>
                <div></div>
                <div></div>
                <div><p><span><BiRupee/></span>{subTotal}</p></div>
            </div>
        </div>

        </div>

        <button  className='place-order-btn'>
            PLACE ORDER
        </button>
        </form>
    </div>
  )
}

export default Checkout