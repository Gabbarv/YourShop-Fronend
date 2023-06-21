import React from 'react'
import "./combocard.css"
const Combocardtwo = ({img}) => {
  return (
    <div className='combocardtwo'>
        <div className='combo-two-img'>
            <img src={img}/>
        </div>
        <div className='combo-two-details'>
            <h3>Formal Pant</h3>
        </div>
    </div>
  )
}

export default Combocardtwo