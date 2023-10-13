import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import {BiRupee} from 'react-icons/bi'
import { buyCourse } from '../../actions/paymentAction'
import { getOrderDetails } from '../../actions/orderActions'
import "./Order.css"

const Order = () => {
  const dispatch = useDispatch()
    const {id} = useParams();
   const [orderProducts,setOrderProducts] = useState()
   const [orderD,setOrderD] = useState()
   const navigate = useNavigate();
   

    useEffect(() => {
        dispatch(getOrderDetails(id))

    },[])

    const {orderDetails} = useSelector(state => state.orderDetails)

    useEffect(() => {
      if(orderDetails){
        setOrderProducts(orderDetails.products)
        setOrderD(orderDetails)
       }
       
    },[orderDetails])
   
 
    
   

  return (
    <div className='odr'>
    <div className='orderid a'>
      <p>#Order Id</p>
      {orderDetails && <h4>{orderDetails._id}</h4>}
    </div>
    <div className='order-user a'>
      <p>Email</p>
      {orderDetails && <h4>{orderDetails.email}</h4>}
    </div>
    <div className='order-address a'>
      <p>Address</p>
      {orderDetails && <h4>{orderDetails.address}</h4>}
    </div>
    <div className='order' >
      <div className='order-products-p'>
      <div className='order-products'>
        <div></div>
        <div><h4>Title</h4></div>
        <div><h4>Qty</h4></div>
        <div><h4>Price</h4></div>
        </div>
        <hr/>
        {orderProducts?.map(product => (
          <>
               <div className='order-products'>
               <div className='cart-item-img'>
                <img src={product.image} />
            </div>
            <div className='cart-item-title'>
              <h5>{product.title}</h5>
            </div>
               <div><h5>{product.qty}</h5></div>
               <div><h5>{product.price}</h5></div>
               </div>
               <hr/></>
        ))}
        
        

      </div>
      { orderDetails && <div> <div className='orderDetails'>
        <div className='details'>
             <div><p>Status</p></div>
             <div className='totals-right'><h4>{orderDetails.status}</h4></div>
        </div>
        <hr/>
        <div className='details'>
             <div><p>orderAmount</p></div>
             <div className='totals-right'><h4>{orderDetails.amount}</h4></div>
        </div>
        <hr/>
        <div className='details'>
             <div><p>Shipping Charge</p></div>
             <div className='totals-right'><h4>{orderDetails.shippingPrice}</h4></div>
        </div>
        <hr/>
        <div className='details'>
             <div><p>SubTotal</p></div>
             <div className='totals-right'><h4>{orderDetails.amount + orderDetails.shippingPrice}</h4></div>
        </div>
       
        <div>
        
        </div>

    
      </div> 
     { orderDetails.status === 'Pending' && <button onClick={() => buyCourse(orderDetails,navigate)} type='submit' className='Pay-now-btn'>Pay Now</button>}
      </div>}

    
    </div></div>
  )
}

export default Order