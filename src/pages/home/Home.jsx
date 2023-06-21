import React, { useState } from 'react'
import Cover from '../../components/cover/Cover'
import ProductCard from '../../components/Productcard/ProductCard'
import './hme.css'
import {listProducts} from '../../actions/productAction'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Footer from '../../components/footer/Footer'
import Pagination from '../../components/pagination/Pagination'
const Home = ({keyword}) => {
  const dispatch = useDispatch()
 
  const [pageNumber,setPageNo] = useState(1)
  const [start,setStart] = useState(0)
  const [end,setEnd] = useState(5)
  const [pages,setPages] = useState()

  const productList = useSelector(state => state.productList)
  const {loading,error,products} = productList
  
  
  
  useEffect(() => {
      dispatch(listProducts(keyword))
      
  },[dispatch,keyword])
  useEffect(() => {
    setPages((Object.keys(products).length)/5)
    
  },[productList,pages])
  useEffect(() => {
    
    setEnd(pageNumber*5)
    setStart(end-5)
  },[pageNumber,start,end])

  




  return (
    <>
   
      <Cover/>
      <div className='home'>
      {loading ? <h1>Loading....</h1> : (
        Object.keys(products).map((product,i) => (i >= start && i<end) && (
          <ProductCard product={products[product]}/>)
        )
      )}
     
      </div>
      {pages > 1 && <Pagination pages={pages} pageNumber={pageNumber} setPageNo = {setPageNo}/>}
      </>
  )
}

export default Home