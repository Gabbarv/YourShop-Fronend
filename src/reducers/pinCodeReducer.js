import { GET_PINCODE_SUCCESS,GET_PIN_CODE_REQUEST } from "../constants/pinCodeConstants";


export const getPincodeReducer = (state = { pincodes: [] },action) => {

    switch(action.type){
        case GET_PIN_CODE_REQUEST:
            return  { pincodes: [] }
            case GET_PINCODE_SUCCESS:
                return {
                    pincodes: action.payload
                }
                default:
                return state
    }

}