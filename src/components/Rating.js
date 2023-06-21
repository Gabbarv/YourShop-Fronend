import React from 'react'
import {FaStarHalfAlt,FaStar,FaRegStar} from 'react-icons/fa'
import { IconContext } from "react-icons";
const Rating = ({value}) => {
  return (
   <p className='review'>
      {value >= 1 ? <span><IconContext.Provider value={{className: 'rating-icon'}}><FaStar />
             </IconContext.Provider></span> : value >= 0.5 ? <span><IconContext.Provider value={{className: 'rating-icon'}}><FaStarHalfAlt />
             </IconContext.Provider></span> : <span><IconContext.Provider value={{className: 'rating-icon'}}><FaRegStar />
             </IconContext.Provider></span>}
             {value >= 2 ? <span><IconContext.Provider value={{className: 'rating-icon'}}><FaStar />
             </IconContext.Provider></span> : value >= 1.5 ? <span><IconContext.Provider value={{className: 'rating-icon'}}><FaStarHalfAlt />
             </IconContext.Provider></span> : <span><IconContext.Provider value={{className: 'rating-icon'}}><FaRegStar />
             </IconContext.Provider></span>}
             {value >= 3 ? <span><IconContext.Provider value={{className: 'rating-icon'}}><FaStar />
             </IconContext.Provider></span> : value >= 2.5 ? <span><IconContext.Provider value={{className: 'rating-icon'}}><FaStarHalfAlt />
             </IconContext.Provider></span> : <span><IconContext.Provider value={{className: 'rating-icon'}}><FaRegStar />
             </IconContext.Provider></span>}
             {value >= 4 ? <span><IconContext.Provider value={{className: 'rating-icon'}}><FaStar />
             </IconContext.Provider></span> : value >= 3.5 ? <span><IconContext.Provider value={{className: 'rating-icon'}}><FaStarHalfAlt />
             </IconContext.Provider></span> : <span><IconContext.Provider value={{className: 'rating-icon'}}><FaRegStar />
             </IconContext.Provider></span>}
             {value >= 5 ? <span><IconContext.Provider value={{className: 'rating-icon'}}><FaStar />
             </IconContext.Provider></span> : <span><IconContext.Provider value={{className: 'rating-icon'}}><FaRegStar />
             </IconContext.Provider></span>}
   </p>
  )
}

export default Rating