import React, { useEffect, useState } from 'react'
import './uploadproduct.css'
import { useDispatch } from 'react-redux'
import { addProducts } from '../../../actions/productAction'

const Uploadproduct = () => {

  const dispatch = useDispatch()
  const [category,setCategory] = useState('Tshirt')
  const [title,setTitle] = useState()
  const [desc,setDiscription] = useState()
  const [slug,setSlug] = useState()
  const [availableQty,setQty] = useState()
  const [price,setPrice] = useState()
  const [size,setSize] = useState([])
  let sizes = [...size]
  const [color,setColor] = useState()
  const [images,setImages] = useState()

  useEffect(() => console.log(size),[size])

  const onSubmitHandler = (e) => {

    e.preventDefault();
    
    const formData = new FormData()
    formData.append('category',category)
    formData.append('title',title)
    formData.append('desc',desc)
    formData.append('slug',slug)
    formData.append('availableQty',availableQty)
    formData.append('price',price)
    
    formData.append('color',color)

   size.map((item) => {
      formData.append('sizes[]',item)
    })

    Array.from(images).forEach((d) => {
      
      formData.append('images',d)
    })
    
     dispatch(addProducts(formData))

  }
  
 

  
  
  return (
    <div className='upload-product'>
      <h1>Upload Product</h1>
      <form onSubmit={onSubmitHandler} method='post' encType='multipart/form-data'>
        <label for='product-category'>Product Category</label> <br/>
        <select onChange={(e) => setCategory(e.target.value)} id="product-category">
  <option value="Tshirt">T-Shirt</option>
  <option value="jeans">Jeans</option>
  <option value="Shirt">Shirt</option>
</select><br/>
<label for='product-title'>Product Title</label> <br/>
<input onChange={(e) => setTitle(e.target.value)} id='product-title' type='text' placeholder='Enter Product title'/><br/>
<label for='product-desc'>Product Description</label><br/>
<input onChange={(e) => setDiscription(e.target.value)} id='product-desc' type='text' placeholder='Enter Product Description' /><br/>
<label for='product-slug'>Product Slug</label><br/>
<input onChange={(e) => setSlug(e.target.value)} id='product-slug' type='text' placeholder='Enter Product Slug'/><br/>
<label for='product-quan'>Product Available Quantity</label><br/>
<input onChange={(e) => setQty(e.target.value)} id='product-quan' type='number' placeholder='Enter Available Quantity'/><br/>
<label for='product-price'>Product Price</label><br/>
<input onChange={(e) => setPrice(e.target.value)} id='product-price' type='number' placeholder='Enter Product Price'/><br/>
<label for='product-available-size'>Product Available Sizes</label><br/>
<input onChange={(e) => {
    if(e.target.checked){
      sizes.push('S')
     
      
    }else{
      const index = sizes.indexOf('S');
if (index > -1) {
  sizes.splice(index, 1); 
}


 
    }
    
    setSize(sizes)
}}  type="checkbox" id="s" name="s" />
      <label for="s">S</label>
      <input onChange={(e) => {
    if(e.target.checked){
      sizes.push('M')
      setSize(sizes)
    }else{
      const index = sizes.indexOf('M');
if (index > -1) {
  sizes.splice(index, 1); 
}



    }
    setSize(sizes)

}}
       type="checkbox" id="m" name="m" />
      <label for="m">M</label>
      <input onChange={(e) => {
    if(e.target.checked){
      sizes.push('L')
    }else{
      const index = sizes.indexOf('L');
if (index > -1) {
  sizes.splice(index, 1); 
}


 
    }
    setSize(sizes)

}} type="checkbox" id="l" name="l" />
      <label for="l">L</label>
      <input onChange={(e) => {
    if(e.target.checked){
      sizes.push('XL')
    }else{
      const index = sizes.indexOf('XL');
if (index > -1) {
  sizes.splice(index, 1); 
}



    }
    setSize(sizes)

}} type="checkbox" id="xl" name="xl" />
      <label for="xl">XL</label>
      <input onChange={(e) => {
    if(e.target.checked){
      sizes.push('XXL')
    }else{
      const index = sizes.indexOf('XXL');
if (index > -1) {
  sizes.splice(index, 1); 
}



    }
    setSize(sizes)

}} type="checkbox" id="xxl" name="xxl" />
      <label for="xxl">XXL</label><br/>
<label for='product-available-color'>Product Color</label><br/>
<input onChange={(e) => setColor(e.target.value)} id='product-available-color' type='text' placeholder='Enter Product Color'/><br/>
<label for='product-images'>Upload Product Images</label><br/>
<input onChange={(e) => setImages(e.target.files)} id='product-images' type='file' placeholder='Upload Product Images' name='images' multiple/><br/>
<input type='submit' value='ADD PRODUCT' />
      </form>
    </div>
  )
}

export default Uploadproduct