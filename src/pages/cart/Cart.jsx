import React from 'react'
import img from'../../images/product.png'
import {BiRupee} from 'react-icons/bi'
import {MdDelete} from 'react-icons/md'
import {Link} from 'react-router-dom'
import './cart.css'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, removeFromCart } from '../../actions/cartActions'
import { useState } from 'react'

const Cart = () => {
    const dispatch = useDispatch()
    const cart = useSelector((state) => state.cart)
    const user = JSON.parse(localStorage.getItem('userInfo'))
    const { cartItems } = cart
   var subTotal = 0;
    

    const removefromcart = (id) => {
            dispatch(removeFromCart(id))
    }
     cartItems.map(cartItem => {
       subTotal = subTotal + (cartItem.qty*cartItem.price)
     })

  return (
    <>
   {cartItems.length === 0 ? <h1 className='empty-cart'>Your Cart Is Empty</h1> : <> <div className='cart'>
        <div className='cart-heading'>
            <div></div>
            <div>
                <h4>Product</h4>
            </div>
            <div>
            <h4>Price</h4>
            </div>
            <div>
            <h4>Qty</h4>
            </div>
            <div>
            <h4>Total</h4>
            </div>
            <div></div>
        </div>
        <hr/>
        {cartItems.map(cartItem => (
            <div className='cart-item'>
            <div className='cart-item-img'>
                <img src={cartItem.image} />
            </div>
            <div className='cart-item-title'>
              <h5>{cartItem.title}</h5>
            </div>
            <div className='cart-item-price'><p><span><BiRupee/></span>{cartItem.price}</p></div>
            <div className='cart-item-qty'>
            <div className='item-qty'>
                      <button onClick={() => {

                        if(cartItem.qty === 1){
                            removefromcart(cartItem.product)
                        }else{
                            dispatch(addToCart(cartItem.product,cartItem.qty-1))
                        }
                        
                        }} >-</button>
                      <p>{cartItem.qty}</p>
                      <button onClick={() => dispatch(addToCart(cartItem.product,cartItem.qty+1))}>+</button>
                  </div>
            </div>
            <div className='cart-item-total'><p><span><BiRupee/></span>{cartItem.qty*cartItem.price}</p></div>
            <div onClick={() => removefromcart(cartItem.product)} className='cart-item-del'><MdDelete/></div>
      </div>
    

        ))}
       <div className='cart-m'>

       {cartItems.map(cartItem => (<div className='cart-item-m'>
            <div className='cart-item-m-img'>
                <img src={cartItem.image} />
            </div>
            <div className='cart-price-m'>
                <div><p>{cartItem.title}</p></div>
                <div><p><span><BiRupee/></span>{cartItem.price}</p></div>
            </div>
            <div className='cart-price-m'>
                <div>
                <div className='cart-item-qty'>
            <div className='item-qty'>
                      <button onClick={() => {

                        if(cartItem.qty === 1){
                            removefromcart(cartItem.product)
                        }else{
                            dispatch(addToCart(cartItem.product,cartItem.qty-1))
                        }
                        
                        }} >-</button>
                      <p>{cartItem.qty}</p>
                      <button onClick={() => dispatch(addToCart(cartItem.product,cartItem.qty+1))}>+</button>
                  </div>
            </div>
                </div>
                <div onClick={() => removefromcart(cartItem.product)} className='cart-item-del'><MdDelete/></div>
            </div>
        </div>))}
       </div> 


        <div className="cart-totals">
            <h1>Cart Total</h1>
            <div className="subtotal totals">
                <div><p>Subtotal</p></div>
                <div className='totals-right'><p><span><BiRupee/></span>{subTotal}</p></div>
            </div>
            <hr/>
            <div className="shipping-fee totals">
            <div><p>Shipping fee</p></div>
                <div className='totals-right'><p><span><BiRupee/></span>50</p></div>
            </div>
            <hr/>
            <div className="cart-total totals">
            <div><p>Total</p></div>
                <div className='totals-right'><p><span><BiRupee/></span>{subTotal+50}</p></div>
            </div>

            <Link to={`${user ?'/checkout' : '/login'}`} className='checkout-btn'>
                PROCEED TO CHECKOUT
            </Link>
        </div>
    </div>  </>}
    </>
  )
}

export default Cart