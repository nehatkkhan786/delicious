import React from 'react'
import './navbar.css'
import {GrRestaurant} from 'react-icons/gr'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
  const navigate = useNavigate()
  return (
    <div className='navbar' onClick={()=>navigate('/')}>
        <div className='logo'>
          <GrRestaurant className='logoImg'/>
          Deliciousss      
        </div>
    </div>
  )
}

export default Navbar