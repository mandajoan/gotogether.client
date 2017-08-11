import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = (props) => {
  return (
    <ul className="NavBar">

      {props.currentUser
        ? (
          <div>

            <li><Link to='/'>Home</Link></li>

            <li><Link to='/logout'>Log Out</Link></li>
            <li><Link to={`/users/${props.currentUser._id}`}>Account Settings</Link></li>
            <li><h4>Welcome {props.currentUser.name}</h4></li>
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
