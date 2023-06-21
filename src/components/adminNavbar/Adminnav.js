import React from 'react'
import { FaBars } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';
import { useState } from 'react'
import {MdDashboard} from 'react-icons/md'
import {TiPlus} from 'react-icons/ti' 
import {CiBoxes} from 'react-icons/ci'
import { logout } from '../../actions/userActions';


import { Link } from 'react-router-dom';

import './adminnav.css';
import { useDispatch } from 'react-redux';


const Adminnav = () => {

    const [sidebar, setSidebar] = useState(false);
    const dispatch = useDispatch();

    const logouthandler = () =>{
      dispatch(logout())
    }

  const showSidebar = () => setSidebar(!sidebar);
  return (
    <div><div className='admin-navbar'>
    <Link to='#' className='menu-bars'>
      <FaBars onClick={showSidebar} />
    </Link>
  </div>
  <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
    <ul className='nav-menu-items' onClick={showSidebar}>
      <li className='navbar-toggle'>
        <Link to='#' className='menu-bars'>
          <AiOutlineClose />
        </Link>
      </li>
      
          <li className='nav-text'>
            <Link to='/admin/dashboard'>
              <MdDashboard/>
              <span>Dashboard</span>
            </Link>
          </li>
          <li className='nav-text'>
            <Link to='/admin/aorders'>
              <CiBoxes/>
              <span>Orders</span>
            </Link>
          </li>
          <li className='nav-text'>
            <Link to='/admin/uploadproducts'>
              <TiPlus/>
              <span>Upload Product</span>
            </Link>
          </li>
          <li className='nav-text' onClick={logouthandler}>Log out</li>
         
      
    </ul>
  </nav></div>
  )
}

export default Adminnav