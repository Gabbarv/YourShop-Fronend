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
    console.log(orders)
  },[])
  return (
    <>
    <table >
         <thead >
         <tr>
                <th>Order Id</th>
                <th>Address</th>
                <th>Payment Method</th>
                <th>Payment Status</th>
                <th>Total</th>
            </tr>
           
         </thead>
         {orders && orders.map(order => {
                return   <><tbody >
                     <tr>
                           <td><Link to={`/order/${order._id}`}>{order._id}</Link></td>
                           <td>{order.address}</td> 
                           <td>{order.paymentMethod}</td>
                           <td>{order.status}</td>
                           <td>{order.amount}</td>
                        </tr>
                     
                      
                      </tbody> </> 

         }) }
            
            

    </table>

   
    </>
  )
}

export default Myorder