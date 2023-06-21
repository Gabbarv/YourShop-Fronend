import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './Myorder.css'
import { getAllOrders } from '../../actions/orderActions'
import { Link } from 'react-router-dom'

const Myorder = () => {
  const dispatch = useDispatch()
  const {orders} = useSelector(state => state.orders)
  console.log(orders)
  useEffect(() => {
    dispatch(getAllOrders())
  },[])
  return (
    <div className='my-order'>
         <div className='my-order-heading'>
         <div>
                <h4>Order Id</h4>
            </div>
            <div>
                <h4>Address</h4>
            </div>
            <div>
                <h4>Payment Method</h4>
            </div>
            <div>
                <h4>Payment Status</h4>
            </div>
            
            <div>
            <h4>Total</h4>
            </div>
         </div>
         {orders && orders.map(order => {
                return   <><div className='my-order-content'>
                     <div>
                           <Link to={`/order/${order._id}`}><h5>{order._id}</h5></Link> 
                        </div>
                        <div>
                            <h5>{order.address}</h5>
                        </div>
                        <div>
                            <h5>{order.paymentMethod}</h5>
                        </div>
                        <div>
                            <h5>{order.status}</h5>
                        </div>
                        
                        <div>
                        <h5>{order.amount}</h5>
                        </div>
                      
                      </div> </> 

         }) }
            
            

    </div>
  )
}

export default Myorder