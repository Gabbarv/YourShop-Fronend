import React from 'react'
import './pagination.css'

const Pagination = ({pages,pageNumber,setPageNo}) => {
  return (
    <div className='pagination'>

        {[...Array(pages).keys()].map((x) => (<p className={`${pageNumber === x+1 && "active"}`} onClick={() => {
            setPageNo(x+1)
        }}>{x+1}</p>))}
        
       
    </div>
  )
}

export default Pagination