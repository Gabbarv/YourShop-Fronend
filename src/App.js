import React, { useState } from 'react'
import Combo from "./components/combo/Combo";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/home/Home";
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Product from "./pages/product/Product";
import Cart from "./pages/cart/Cart";
import Checkout from "./pages/checkout/Checkout";
import Login from "./pages/user/Login";
import Signup from "./pages/user/Signup";
import Payment from "./pages/payment/Payment";
import Order from "./pages/order/Order";
import Myorder from "./pages/myorder/Myorder";
import Tshirt from "./pages/Tshirts/Tshirt";
import Shirts from "./pages/shirts/Shirts";
import Jeans from "./pages/jeans/Jeans";
import Footer from "./components/footer/Footer";
import Myaccount from "./pages/myaccount/Myaccount";
import Orders from "./pages/orders/Orders";
import Dashboard from "./pages/admin/dashboard/Dashboard";
import Aorders from "./pages/admin/orders/Aorders";
import Uploadproduct from "./pages/admin/uploadproduct/Uploadproduct";
import Adminnav from "./components/adminNavbar/Adminnav";




function App() {

  const user = JSON.parse(localStorage.getItem('userInfo'))
  const [keyword,setKeyword] = useState()
  return (
    <>
 
  <BrowserRouter>
    {user && user.isAdmin ? <Adminnav/> : <Navbar keyword={keyword} setKeyword={setKeyword}/> }
  <Routes>
    <Route path="/" element={<Home  keyword={keyword}/>}/>
    <Route path="/myaccount" element = {<Myaccount/>}/>
    <Route path="/:slug" element={<Product/>}/>
    <Route path="/cart" element={<Cart/>}/>
    <Route path="/checkout" element={user ? <Checkout/> : <Login/>}/>
    <Route path="/login" element={<Login/>} />
    <Route path="/signup" element={<Signup/>}/>
    <Route path='/payment' element={<Payment/>}/>
    <Route path='/order/:id' element={user ?<Order/>: <Login/>}/>
    <Route path='/myorders' element={user ?<Myorder/>: <Login/>}/>
    <Route path='/tshirts' element = {<Tshirt keyword={keyword}/>}/>
    <Route path='/shirts' element = {<Shirts keyword={keyword} />}/>
    <Route path='/jeans' element = {<Jeans keyword={keyword} />}/>
    {/* <Route path='/orders' element = {user ?<Myorder/>: <Login/>}/> */}
    <Route path='/admin/dashboard' element = {user ? (user.isAdmin && <Dashboard/>): <Login/>}/>
    <Route path='/admin/aorders' element = {user ? (user.isAdmin && <Aorders/>): <Login/>}/>
    <Route path='/admin/uploadproducts' element = {user ? (user.isAdmin && <Uploadproduct/>): <Login/>}/>

    
  </Routes>
  <Footer/>
  {/* <Combo/> */}
  </BrowserRouter>
  </>
  );
}

export default App;
