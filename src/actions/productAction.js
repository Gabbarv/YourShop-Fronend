import axios from 'axios'
import {
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_FAIL,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_DETAILS_FAIL,
  PRODUCT_DELETE_SUCCESS,
  PRODUCT_DELETE_REQUEST,
  PRODUCT_DELETE_FAIL,
  PRODUCT_CREATE_REQUEST,
  PRODUCT_CREATE_SUCCESS,
  PRODUCT_CREATE_FAIL,
  PRODUCT_UPDATE_REQUEST,
  PRODUCT_UPDATE_SUCCESS,
  PRODUCT_UPDATE_FAIL,
  PRODUCT_CREATE_REVIEW_REQUEST,
  PRODUCT_CREATE_REVIEW_SUCCESS,
  PRODUCT_CREATE_REVIEW_FAIL,
  PRODUCT_TOP_REQUEST,
  PRODUCT_TOP_SUCCESS,
  PRODUCT_TOP_FAIL,
  PRODUCT_WISHLIST_SUCCESS
} from '../constants/productConstants'



export const getProductByCategory = (category,maxPrice,size,color) => async (dispatch) => {

  try {
    dispatch({type: PRODUCT_LIST_REQUEST})
     const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    }
    const { data } = await axios.get(
      '/api/products/productByCategory',
       {params: {category,maxPrice,size,color}},
       
    )
    
    dispatch({
      type: PRODUCT_LIST_SUCCESS,
      payload: data,
    })
    
  } catch (error) {
    dispatch({
      type: PRODUCT_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }


}

export const addProducts = (formData) => async (dispatch) => {
  try {
    dispatch({type: PRODUCT_CREATE_REQUEST})
    const config = {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    }

    const { data } = await axios.post(
      '/api/products/addproducts',
      formData,
      config
    )


  } catch (error) {
    dispatch({
      type: PRODUCT_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}
export const listProducts = (keyword = '', pageNumber = '') => async (
    dispatch
  ) => {

    console.log(keyword)
    try {
      dispatch({ type: PRODUCT_LIST_REQUEST })
  
      const { data } = await axios.get(
        `/api/products`,
        {params: {keyword,pageNumber}},
      )
  
      dispatch({
        type: PRODUCT_LIST_SUCCESS,
        payload: data,
      })
    } catch (error) {
      dispatch({
        type: PRODUCT_LIST_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      })
    }
  }

  export const getSingleProduct = (slug) => async (dispatch) => {

  
    try{
       
      dispatch({ type: PRODUCT_DETAILS_REQUEST})
      const {data} = await axios.get(`/api/products/details/${slug}`)
      
     
      
      dispatch({
        type: PRODUCT_DETAILS_SUCCESS,
        payload: data
      })
    } catch (error) {
      dispatch({
        type: PRODUCT_DETAILS_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      })
    }
  } 

  export const addToWishlist = (userId,itemId) => async (dispatch) => {
   

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    }

    const {data} = await axios.post(`/api/products/wishlist/${itemId}`,{userId},config)

    dispatch({
      type: PRODUCT_WISHLIST_SUCCESS,
      payload: data

    })

    localStorage.setItem('userInfo', JSON.stringify(data))

    
    

  }


  export const createProductReview = (productId,user,review,rating) => async (
    dispatch
  ) => {
    try {
      dispatch({
        type: PRODUCT_CREATE_REVIEW_REQUEST,
      })
  
      
  
      const config = {
        headers: {
          'Content-Type': 'application/json',
          
        },
      }
  
      await axios.post(`/api/products/${productId}/reviews`, {review,user,rating}, config)
  
      dispatch({
        type: PRODUCT_CREATE_REVIEW_SUCCESS,
      })
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
     
      dispatch({
        type: PRODUCT_CREATE_REVIEW_FAIL,
        payload: message,
      })
    }
  }