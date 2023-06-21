import React from 'react'
import Combocardtwo from '../combo-card/Combocardtwo'
import Combocarone from '../combo-card/Combocarone'
import './combo.css'
const Combo = () => {
  return (
    <div className='combo'>
        <Combocarone/>
        <div>
        <Combocardtwo img = "https://cdn.shopify.com/s/files/1/0548/9852/4410/products/Ua96c03d2a8fb4348a699d9516a8a0eb0u_720x.jpg?v=1673072975"/>
        <Combocardtwo img = "https://cdn.shopify.com/s/files/1/0548/9852/4410/products/Se7e8a57e50214e3ba6ff7007e07f2fda2_720x.jpg?v=1673255516"/>
        </div>
       
    </div>
  )
}

export default Combo
