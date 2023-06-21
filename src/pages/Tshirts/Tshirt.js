import React, { useState } from 'react'
import {FiFilter} from 'react-icons/fi'
import {BiRupee} from 'react-icons/bi'
import ProductCard from '../../components/Productcard/ProductCard'
import Pagination from '../../components/pagination/Pagination'
import {listProducts} from '../../actions/productAction'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProductByCategory } from '../../actions/productAction'
import './tshirt.css';

const Tshirt = () => {

  const dispatch = useDispatch()
  const [pageNumber,setPageNo] = useState(1)
  const [start,setStart] = useState(0)
  const [end,setEnd] = useState(5)
  const [pages,setPages] = useState()
  const [category,setCategory]= useState('Tshirt')
  const [sizes,setSize] = useState([])
  const [maxPrice,setMaxPrice] = useState('3000')
  const [colors,setColor] = useState([]);
  const [showFilter,setShoeFilter] = useState(false)
  const size = [...sizes]
  const color = [...colors]

  useEffect(() => {},[sizes,colors])

 const productByCategory = useSelector(state => state.productByCategory)


  const {loading,error,products} = productByCategory
  

  useEffect(() => {
    
       
      dispatch(getProductByCategory(category,maxPrice,sizes,colors))
     
  },[])

  useEffect(() => {
    setPages((Object.keys(products).length)/5)
    
  },[productByCategory,pages])
  useEffect(() => {
    
    setEnd(pageNumber*5)
    setStart(end-5)
  },[pageNumber,start,end])

  const filterhandler = () => {
  
    dispatch(getProductByCategory(category,maxPrice,sizes,colors))
    setShoeFilter(false)
  }
  const showfilterhandler = () => {
      setShoeFilter(!showFilter)

  }
  return (
    <div className='indi-page'>
      <div className='filter-m'>
      <h2>Filters</h2>
             <FiFilter onClick={showfilterhandler}/>
      </div>
     <div className={`tshirt-left ${!showFilter && 'tshirt-left-m'}`}>
           <div className='filter-h'>
            <h2>Filters</h2>
             <FiFilter/>
             
           </div>
           <hr/>
           <button className='clearfilter-btn'>Clear Filters</button>

           <div className='filter-c'>
            <h3>Color</h3>
           

               
            <input onChange={(e) => {
                if(e.target.checked){
                  color.push(e.target.value)
                  
                }else{
                  const index = color.indexOf(e.target.value);
            if (index > -1) {
              color.splice(index, 1); 
            }
            
            
            
                }
                setColor(color)
                
            
            }
            } type="checkbox" id="Red" name="Red" value="Red"/>
            <label for="Red">Red</label><br/>
            <input onChange={(e) => {
                if(e.target.checked){
                  color.push(e.target.value)
                  
                }else{
                  const index = color.indexOf(e.target.value);
            if (index > -1) {
              color.splice(index, 1); 
            }
            
            
            
                }
                setColor(color)  
            
            }
            } type="checkbox" id="Black" name="Black" value="Black"/>
            <label for="Black">Black</label><br/>
           <input onChange={(e) => {
                if(e.target.checked){
                  color.push(e.target.value)
                  
                }else{
                  const index = color.indexOf(e.target.value);
            if (index > -1) {
              color.splice(index, 1); 
            }
            
            
            
                }
                setColor(color) 
            
            }
            } type="checkbox" id="Blue" name="Blue" value="Blue"/>
                <label for="Blue3">Blue</label><br/>

                <h3>Size</h3>
                <input onChange={(e) => {
                if(e.target.checked){
                  size.push(e.target.value)
                  
                }else{
                  const index = size.indexOf(e.target.value);
            if (index > -1) {
              size.splice(index, 1); 
            }
            
            
            
                }
               setSize(size) 
            
            }
            } type="checkbox" id="S" name="S" value="S"/>
                <label for="S">S</label><br/>
            <input onChange={(e) => {
                if(e.target.checked){
                  size.push(e.target.value)
                  
                }else{
                  const index = size.indexOf(e.target.value);
            if (index > -1) {
              size.splice(index, 1); 
            }
            
            
            
                }
                
                setSize(size) 
            }
            } type="checkbox" id="M" name="M" value="M"/>
            <label for="M">M</label><br/>
            <input onChange={(e) => {
                if(e.target.checked){
                  size.push(e.target.value)
                  
                }else{
                  const index = size.indexOf(e.target.value);
            if (index > -1) {
              size.splice(index, 1); 
            }
            
            
            
                }
                setSize(size) 
            
            }
            } type="checkbox" id="L" name="L" value="L"/>
            <label for="L">L</label><br/>
           <input onChange={(e) => {
                if(e.target.checked){
                  size.push(e.target.value)
                  
                }else{
                  const index = size.indexOf(e.target.value);
            if (index > -1) {
              size.splice(index, 1); 
            }
            
            
            
                }
                
                setSize(size) 
            }
            } type="checkbox" id="XL" name="XL" value="XL"/>
                <label for="XL">XL</label><br/>
                <input onChange={(e) => {
                if(e.target.checked){
                  size.push(e.target.value)
                  
                }else{
                  const index = size.indexOf(e.target.value);
            if (index > -1) {
              size.splice(index, 1); 
            }
            
            
            
                }
                
                setSize(size) 
            }
            } type="checkbox" id="XXL" name="XXL" value="XXL"/>
                <label for="XXL">XXL</label><br/>

                

                <h3>Price</h3>
               
                {/* <p> <BiRupee/>499</p> */}

                <label for="price"><BiRupee/>{maxPrice}</label><br/>
               <input onChange={(e) => {
                setMaxPrice(e.target.value)
                
               }} type="range" id="price" name="price" min="0" max="3000" className='progress' value={maxPrice}></input>

           </div>

           <button onClick={filterhandler} className='applyfilter-btn'>Apply Filters</button>
     </div>
     <div>
    {!showFilter && <div className='tshirt-right-m'>
      <h3>Unleash Your Style with Our Iconic T-Shirts!</h3>
     <div className='tshirt-right'>
          
          {loading ? <h1>Loading....</h1> : (
        Object.keys(products).map(product => (
          <ProductCard product={products[product]}/>)
        )
      )}


     </div>
    { (pages > 1) && <Pagination pages={pages} pageNumber={pageNumber} setPageNo = {setPageNo}/>}
      </div>}
    
     </div>
     


    </div>
  )
}

export default Tshirt