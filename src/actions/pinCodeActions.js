import axios from 'axios'
import { GET_PINCODE_SUCCESS,GET_PIN_CODE_REQUEST } from '../constants/pinCodeConstants'


export const getPinCodes = () => async (dispatch) => {
         
    try {
        dispatch({type: GET_PIN_CODE_REQUEST})
        console.log('hii')
        const { data } = await axios.get(
            `/api/pincodes`,
             
             
          )
          
          dispatch({
            type: GET_PINCODE_SUCCESS,
            payload: data,
          })
        
    } catch (error) {
        console.log(error)
    }
}