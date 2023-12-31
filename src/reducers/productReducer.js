import {
    PRODUCT_LIST_REQUEST,
    PRODUCT_LIST_SUCCESS,
    PRODUCT_LIST_FAIL,
    PRODUCT_DETAILS_REQUEST,
    PRODUCT_DETAILS_SUCCESS,
    PRODUCT_DETAILS_FAIL,
    PRODUCT_DELETE_REQUEST,
    PRODUCT_DELETE_SUCCESS,
    PRODUCT_DELETE_FAIL,
    PRODUCT_CREATE_RESET,
    PRODUCT_CREATE_FAIL,
    PRODUCT_CREATE_SUCCESS,
    PRODUCT_CREATE_REQUEST,
    PRODUCT_UPDATE_REQUEST,
    PRODUCT_UPDATE_SUCCESS,
    PRODUCT_UPDATE_FAIL,
    PRODUCT_UPDATE_RESET,
    PRODUCT_CREATE_REVIEW_REQUEST,
    PRODUCT_CREATE_REVIEW_SUCCESS,
    PRODUCT_CREATE_REVIEW_FAIL,
    PRODUCT_CREATE_REVIEW_RESET,
    PRODUCT_TOP_REQUEST,
    PRODUCT_TOP_SUCCESS,
    PRODUCT_TOP_FAIL,
    PRODUCT_WISHLIST_SUCCESS,
  } from '../constants/productConstants'

  export const getProductByCategoryReducer = (state = { products: [] },action) => {
    switch (action.type) {
      case PRODUCT_LIST_REQUEST:
        return { loading: true, products: [] }
      case PRODUCT_LIST_SUCCESS:
        return {
          loading: false,
          products: action.payload.tshirts,
        
        }
      case PRODUCT_LIST_FAIL:
        return { loading: false, error: action.payload }
      default:
        return state
    }
  }
  export const addProductReducer = (state = {},action) => {
    switch(action.type){
      case PRODUCT_CREATE_REQUEST:
        return {loading: true}
        case PRODUCT_CREATE_SUCCESS:
          return{loading: false,status: action.payload}
          default:
            return state
    }
  }


  export const productListReducer = (state = { products: [] }, action) => {
    switch (action.type) {
      case PRODUCT_LIST_REQUEST:
        return { loading: true, products: [] }
      case PRODUCT_LIST_SUCCESS:
        return {
          loading: false,
          products: action.payload.tshirts,
         

        
        }
      case PRODUCT_LIST_FAIL:
        return { loading: false, error: action.payload }
      default:
        return state
    }
  }
  export const productDetailsReducer = (state = {productDetails: {},variants: {}},action) => {
    switch(action.type){
      case PRODUCT_DETAILS_REQUEST:
        return {loading: true, productDetails: {},variants: {}}
        case PRODUCT_DETAILS_SUCCESS:
          return {
            loading: false,
            productDetails: action.payload.product,
            variants: action.payload.colorSizeSlug
          }
          case PRODUCT_DETAILS_FAIL:
            return {
              loading: false,
              error: action.payload
            }
            default:
              return state
    }
  }
  export const wishlistReducer = (state = {},action) => {
    switch(action.type){
      case PRODUCT_WISHLIST_SUCCESS:
        return{
          userInfo: action.payload
        }
        default:
          return state
    }
  }

  export const productReviewCreateReducer = (state = {}, action) => {
    switch (action.type) {
      case PRODUCT_CREATE_REVIEW_REQUEST:
        return { loading: true }
      case PRODUCT_CREATE_REVIEW_SUCCESS:
        return { loading: false, success: true }
      case PRODUCT_CREATE_REVIEW_FAIL:
        return { loading: false, error: action.payload }
      case PRODUCT_CREATE_REVIEW_RESET:
        return {}
      default:
        return state
    }
  }