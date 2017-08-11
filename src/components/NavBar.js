import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = (props) => {
  return (
    <ul className="NavBar">
      <li><Link to='/'>Home</Link></li>
      {props.currentUser
        ? (
          <div>
            <li><Link to='/logout'>Log Out</Link></li>
            <li><Link to={`/users/${props.currentUser._id}`}>Account Settings</Link></li>
          </div>
        )
        : (
          <div>
            <li><Link to='/login'>Log In</Link></li>
            <li><Link to='/signup'>Sign Up</Link></li>
          </div>
        )
      }
    </ul>
  )
}

export default NavBar
