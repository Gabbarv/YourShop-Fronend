import axios from 'axios'
import { CART_CLEAR_ITEMS } from '../constants/cartConstants'
import {
  ORDER_CREATE_REQUEST,
  ORDER_CREATE_SUCCESS,
  ORDER_CREATE_FAIL,
  ORDER_DETAILS_FAIL,
  ORDER_DETAILS_SUCCESS,
  ORDER_DETAILS_REQUEST,
  ORDER_PAY_FAIL,
  ORDER_PAY_SUCCESS,
  ORDER_PAY_REQUEST,
  ORDER_LIST_MY_REQUEST,
  ORDER_LIST_MY_SUCCESS,
  ORDER_LIST_MY_FAIL,
  ORDER_LIST_FAIL,
  ORDER_LIST_SUCCESS,
  ORDER_LIST_REQUEST,
  ORDER_DELIVER_FAIL,
  ORDER_DELIVER_SUCCESS,
  ORDER_DELIVER_REQUEST,
} from '../constants/orderConstants'
import { logout } from './userActions'
import { url } from './Url'

export const createOrder = (order) => async (dispatch, getState) => {
    try {
      dispatch({
        type: ORDER_CREATE_REQUEST,
      })
  
      
  
      const config = {
        headers: {
          'Content-Type': 'application/json',
          
        },
      }
  
      const { data } = await axios.post(`${url}/api/orders`, order, config)
  
      dispatch({
        type: ORDER_CREATE_SUCCESS,
        payload: data,
      })
      dispatch({
        type: CART_CLEAR_ITEMS,
        payload: data,
      })
      localStorage.removeItem('cartItems')
    } catch (error) {
        const message =
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message
        if (message === 'Not authorized, token failed') {
          dispatch(logout())
        }
        dispatch({
          type: ORDER_CREATE_FAIL,
          payload: message,
        })
      }
    }

    export const getOrderDetails = (orderId) => async (dispatch) => {

      const {data} = await axios.get(`${url}/api/orders/${orderId}`)

      dispatch({
        type: ORDER_DETAILS_SUCCESS,
        payload: data
      })

    }

    export const getAllOrders = () => async (dispatch) => {
      const {data} = await axios.get(`${url}/api/orders/my/allorders`)
       
      dispatch({
        type: ORDER_LIST_SUCCESS,
        payload: data
      })
    }