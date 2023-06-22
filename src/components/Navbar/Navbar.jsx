import React from 'react'
import {Link} from 'react-router-dom'
import {BiUser} from 'react-icons/bi'
import {AiOutlineSearch} from 'react-icons/ai'
import {BsCart3} from 'react-icons/bs'
import { useDispatch, useSelector } from 'react-redux'
import './Navbar.css'
import { useState } from 'react'
import { logout } from '../../actions/userActions'
import {FaBars} from 'react-icons/fa'
const Navbar = ({keyword,setKeyword}) => {
  const [dropDown,setDropDown] = useState(false);
  const [adminMode,setAdminMode] = useState();
  const [showNav,setShowNav] = useState(false)
  
 const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem('userInfo'))
  const cart = useSelector((state) => state.cart)
    const { cartItems } = cart
  
  const logouthandler = () =>{
    setShowNav(false)
    dispatch(logout())
  }

  const handleshownav = () => {
    setShowNav(!showNav)
  }
 
  return (
    <>
        <div className='nav-p'>
        <nav className='navbar'>
          <Link to='/'> <h1>YourShop</h1></Link>
          <div className="searchbox">
          <div className="search-icon">
            <AiOutlineSearch />
          </div>
          <div className="search-inbox">
            <input
              onChange={(e) => setKeyword(e.target.value)}
              
              type="text"
              placeholder="Search for the product"
            />
          </div>
          </div>
          <Link to='/tshirts'><h4>T-Shirt</h4></Link>
          <Link to='/shirts'><h4>Shirt</h4></Link>
          <Link to='/jeans'><h4>Jeans</h4></Link>
         
           
            <ul>
              {user ? <li onMouseOver={() => setDropDown(true)} onMouseLeave={() => setDropDown(false)} ><BiUser/></li> : <li><Link to='/login'>Login</Link></li> }
                 
                
                <li><Link to='/cart'><BsCart3/></Link></li>
            </ul>
            
        </nav>
        { cartItems.length > 0 && <div className='cart-item-count'><p>{cartItems.length}</p></div>}
        {dropDown && <div onMouseOver={() => setDropDown(true)} onMouseLeave={() => setDropDown(false)} className='drop-down'>
              <ul>
                <Link to = '/myaccount'>
                <li>My account</li></Link>
                <Link to='/myorders'><li>Orders</li></Link>
                {/* {user.isAdmin && <Link to='/admin/dashboard'><li >Switch To Admin</li></Link>} */}
                <li onClick={logouthandler}>Log out</li>
              </ul>
            </div>}
    </div> 
    <div className='nav-m'>
      <nav className='navbar-m'>
          <div className='nav-bar'>
          <Link to='/'> <h3>YourShop</h3></Link>
              <FaBars onClick={handleshownav}/>
            </div>       
          
         {showNav && <div>
         <Link to='/tshirts'><h4 onClick={() => {setShowNav(false)}}>T-Shirt</h4></Link>
          <Link to='/shirts'><h4 onClick={() => {setShowNav(false)}}>Shirt</h4></Link>
          <Link to='/jeans'><h4 onClick={() => {setShowNav(false)}}>Jeans</h4></Link>
         { user && <Link to = '/myaccount'><h4 onClick={() => {setShowNav(false)}}>My account</h4></Link>}
         { user && <Link to='/myorders'><h4 onClick={() => {setShowNav(false)}}>Orders</h4></Link>}
          
         { user && <h4 onClick={logouthandler}>Log out</h4>}
          <Link to='/cart'><BsCart3 onClick={() => {setShowNav(false)}}/></Link>
            </div> }
            
   
      </nav>
    </div>
    </>
  )
}

export default Navbar