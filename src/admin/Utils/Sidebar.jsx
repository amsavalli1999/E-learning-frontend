import React from 'react'
import './common.css'
import { AiFillHome, AiOutlineLayout } from "react-icons/ai";
import {FaBook, FaUserAlt} from 'react-icons/fa'
import { Link } from "react-router-dom";



const Sidebar = () => {
  return (
    <div className='sidebar'>
      <ul>
        <li>
          <Link to={'/admin/dashboard'}>
          <div className="icon">
<AiFillHome/>
<span>Home</span>

          </div>
          </Link>
        </li>
        <li>
          <Link to={'/admin/course'}>
          <div className="icon">
<FaBook/>
<span>Courses</span>

          </div>
          </Link>
        </li>
         <li>
          <Link to={'/admin/users'}>
          <div className="icon">
<FaUserAlt/>
<span>User</span>

          </div>
          </Link>
        </li>
         <li>
          <Link to={'/account'}>
          <div className="icon">
<AiOutlineLayout/>
<span>Logout</span>

          </div>
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default Sidebar