import React from 'react'
import img from '../../images/product.png'



import {BiRupee} from 'react-icons/bi'
import {FiHeart} from 'react-icons/fi'
import {FaHeart} from 'react-icons/fa'
import './product.css'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { addToWishlist, createProductReview, getSingleProduct } from '../../actions/productAction'
import { addToCart } from '../../actions/cartActions'
import { getPinCodes } from '../../actions/pinCodeActions'
import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Rating from '../../components/Rating';

const Product = () => {

  const [user,setUser] =  useState(JSON.parse(localStorage.getItem('userInfo')));
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const {slug} = useParams()
  
    useEffect(() => {
      
      dispatch(getSingleProduct(slug))
    },[])
  const productDetail = useSelector(state => state.productDetails)
  
  const {loading , error, productDetails,variants} = productDetail
  
  const images = productDetails.img;
  const wishlistItem = useSelector(state => state.wishlist);
  
  const [color,setColor] = useState(productDetails.color)
  const [size,setSize] = useState(productDetails.size)
  const [rating,setRating] = useState()
  const [review,setreview] = useState()
  const [pincode,setPincode] = useState()
  var currRating = productDetails.rating; 
  // const [service,setService] = useState()
 
  const [currImg,setCurrImg] = useState('');
  useEffect(() => {
    setCurrImg(images?.[0])
  
  },[images])
  
  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem('userInfo')))
},[wishlistItem])

 
  
 

 
  const addtocart = () => {
    dispatch(addToCart(productDetails._id,1))
    navigate('/cart')
  }
  const addtowishlist = (itemId) => {
     if(!user){
      toast('Please Login First')  
     }else{
      dispatch(addToWishlist(user._id,itemId))
      
     }
   


}
 
const refresher = (newColor,newSize) => {
 
     navigate(`/${variants[newColor][newSize]['slug']}`)
     window.location.reload();
}
const {pincodes }= useSelector(state => state.pincode)

const checkpincode = () => {
  
  dispatch(getPinCodes())
  if(pincodes.includes(pincode)){
   toast('Pincode Deliverable')
  }else{
    toast('This Pincode Not Deliverable')
  }
  
  
}


const reviewHandler = (e) => {
  e.preventDefault();
  dispatch(createProductReview(slug,JSON.parse(localStorage.getItem('userInfo')),review,rating))
}
  
console.log(productDetails)
 
  return (
    <div className='product-page'>
     
    <div className='product-img'>
      <div className='product-images'>
     {images?.map(image => (

<div className='p-image'>
          <img onClick={() => setCurrImg(image)} className={`${currImg === image ? "img-select-border" : ""}`} src={image}/>
        </div>
     ))}
        
        
        
      </div>
      <div className='product-image'>
      <img src={currImg}/>
      </div>
    </div>
    <div className='product-details'>
      <div className='product-cat-title'>
      <p>{productDetails.category}</p>
      <h2>{productDetails.title}</h2>
      </div>
      {/* <p className='review'>
       {[...Array(currRating)].map((x, i) =>
            { return (currRating - i +1 > 1 || currRating-i+1 === 0) ? <span><IconContext.Provider value={{className: 'rating-icon'}}><FaStar />
             </IconContext.Provider></span> : <span><IconContext.Provider value={{className: 'rating-icon'}}><FaStarHalfAlt />
             </IconContext.Provider></span>
                  }
  )} </p> */}
  <Rating value={currRating}/>
      
      <div className='product-desc'>
        <h3>Description</h3>
        <p>
       {productDetails.desc}

        </p>
      </div>
      <div className='product-color'>
        <h3>Color</h3>
        {Object.keys(variants).includes('White') && Object.keys(variants['White']).includes(productDetails.size) && <h4 className={`${productDetails.color === 'White' && 'selected'}`} onClick={() => refresher('White',productDetails.size)}>White</h4> }
        {Object.keys(variants).includes('Blue') && Object.keys(variants['Blue']).includes(productDetails.size) && <h4 className={`${productDetails.color === 'Blue' && 'selected'}`} onClick={() => refresher('Blue',productDetails.size)}>Blue</h4> }
        {Object.keys(variants).includes('Black') && Object.keys(variants['Black']).includes(productDetails.size) && <h4 className={`${productDetails.color === 'Black' && 'selected'}`} onClick={() => refresher('Black',productDetails.size)}>Black</h4> }

      

      </div>
      <div className='product-size'>
        <h3>Size</h3>
        {productDetails.color && Object.keys(variants[productDetails.color]).includes('S') && <h4 className={`${productDetails.size === 'S' && 'selected'}`} onClick={() => refresher(productDetails.color,'S')}>S</h4>}
        {productDetails.color && Object.keys(variants[productDetails.color]).includes('M') && <h4 className={`${productDetails.size === 'M' && 'selected'}`} onClick={() => refresher(productDetails.color,'M')}>M</h4>}
        {productDetails.color && Object.keys(variants[productDetails.color]).includes('L') && <h4 className={`${productDetails.size === 'L' && 'selected'}`} onClick={() => refresher(productDetails.color,'L')}>L</h4>}
        {productDetails.color && Object.keys(variants[productDetails.color]).includes('XL') && <h4 className={`${productDetails.size === 'XL' && 'selected'}`} onClick={() => refresher(productDetails.color,'XL')}>XL</h4>}
        
        
      
      </div>
      <hr/>
      <div className='product-price'>
      <div className='price'><div><BiRupee/></div>
      <p>{productDetails.price}</p>
      </div>
      <div className='product-activity'>
        <button onClick={addtocart}>Add to cart</button>
       <div onClick={() => addtowishlist(productDetails._id)} className='wishlist'>{ user && user.wishlist.includes(productDetails._id) ?  <FaHeart/>:<FiHeart />  }</div>
      </div>
      </div>
      <div className='pincode-check'>
        <div className='input'><input onChange={(e) => setPincode(e.target.value)} type='text' placeholder='Enter Your Pincode'/></div>
        <button onClick={checkpincode}>Check</button>
        
        
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
{/* Same as */}
<ToastContainer />
    </div>
    <div className='review-section'>
        <div className='see-reviews'>
          <h2>Reviews</h2>
          {productDetails.reviews?.map((item) => {
              return <> <h3>{item.name}</h3>
                  <Rating value = {item.rating}/>
               <p>{item.comment}</p></>  

          })}
         
        </div>

        {user && <div className='write-review'>
          <h2>Write A Review</h2>
          <form onSubmit={reviewHandler}>
          <label for='rating'>Rating</label><br/>
          <select onChange={(e) => setRating(e.target.value)}  id="rating">
          <option value=''>Select...</option>
                          <option value='1'>1 - Poor</option>
                          <option value='2'>2 - Fair</option>
                          <option value='3'>3 - Good</option>
                          <option value='4'>4 - Very Good</option>
                          <option value='5'>5 - Excellent</option>
</select><br/>
<label for='review'>Review</label><br/>
       <textarea onChange={(e) => setreview(e.target.value)} id='review' rows='5'/><br/>
       <input type='submit' value='Submit Review'/>
          </form>
          
        </div>}
    </div>

      </div>
  )
}

export default Product