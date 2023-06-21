import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { addProductReducer, getProductByCategoryReducer, productDetailsReducer, productListReducer, productReviewCreateReducer, wishlistReducer } from './reducers/productReducer'
import { cartReducer } from './reducers/cartReducers'
import { updatePasswordreducer, userRegisterReducer } from './reducers/userReducers'
import { userLoginReducer } from './reducers/userReducers'
import { allordersReducer, orderCreateReducer, orderDetailsReducer } from './reducers/orderReducers'
import { getPincodeReducer } from './reducers/pinCodeReducer'

const reducer = combineReducers({
    productList: productListReducer,
    cart: cartReducer,
    userRegister: userRegisterReducer,
    userLogin: userLoginReducer,
    productDetails: productDetailsReducer,
    wishlist: wishlistReducer,
    orderCreate: orderCreateReducer,
    orderDetails: orderDetailsReducer,
    productAddAtatus: addProductReducer,
    productByCategory: getProductByCategoryReducer,
    pincode: getPincodeReducer,
    review:   productReviewCreateReducer,
    orders: allordersReducer,
    updatePass: updatePasswordreducer

})
const cartItemsFromStorage = localStorage.getItem('cartItems')
  ? JSON.parse(localStorage.getItem('cartItems'))
  : []

const initialState = {
    cart: {
        cartItems: cartItemsFromStorage
    }
}


const middleware = [thunk]

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store