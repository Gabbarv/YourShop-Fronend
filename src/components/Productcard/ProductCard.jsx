import React from 'react'
import product from '../../images/product.png'
import {BiRupee} from 'react-icons/bi'
import {FaHeart} from 'react-icons/fa'
import {BsCart3} from 'react-icons/bs'
import {FiHeart} from 'react-icons/fi'
import './card.css'
import { Link, useNavigate } from 'react-router-dom'
import { productListReducer } from '../../reducers/productReducer'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../../actions/cartActions'
import { addToWishlist } from '../../actions/productAction'
import { useEffect } from 'react'
import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ProductCard = ({product}) => {
  const [user,setUser] =  useState(JSON.parse(localStorage.getItem('userInfo')));
  
  
 
  const wishlistItem = useSelector(state => state.wishlist);

  
  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem('userInfo')))
  },[wishlistItem])
  


   


     const dispatch = useDispatch()
     const navigate = useNavigate()

     

     const addtocart = () => {
      dispatch(addToCart(product._id,1))
      navigate('/cart')
      
     }

     const addtowishlist = (itemId) => {
     
      if(!user){
        toast('Please Login First')  
       }else{
        dispatch(addToWishlist(user._id,itemId))
        toast('Item Added To Wishlist') 
  
       }

     



     }

     


  return (
    <div className='product-card'>
    <div className='product-card-img'>
        <img src={product.img[0]} />
    </div>
 
    <div className='product-details'>
    <Link to={`/${product.slug}`}><div className='product-col-size'>
      <p className='category'>{product.category}</p>
      <h4>{product.title}</h4>
      <div className="size">
        <h5>Size:</h5>
        <div className='sizes'>
          {product.size.map(size => (
                <>
                <span>{size}</span>
                
                </>
))}
        
        </div></div>
        
      
    </div></Link>
    <hr/>
    <div className='product-card-price'>
      <div className='price'><div><BiRupee/></div>
      <p>{product.price}</p>
      </div>
      <div className='activity'>
       <div onClick={() => addtowishlist(product._id)
         
         
          
      } className='addtocart'>{ user && user.wishlist.includes(product._id) ?  <FaHeart/>:<FiHeart />  }</div>
        <div onClick={addtocart} className='addtocart'><BsCart3 /></div>
      
      </div>
    
    </div>
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

export default ProductCard