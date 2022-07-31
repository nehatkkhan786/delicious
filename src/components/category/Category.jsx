import React from 'react'
import './category.css'
import {FaPizzaSlice, FaHamburger} from 'react-icons/fa'
import {GiNoodles, GiChopsticks} from 'react-icons/gi'
import {CgBowl} from 'react-icons/cg'
import { useNavigate } from 'react-router-dom'

const Category = () => {
    const navigate = useNavigate()

  return (
    <div className='categories'>
        <div onClick={()=>navigate('/couisine/italian')} className='catItem'><FaPizzaSlice/>Italian</div>
        <div onClick={()=>navigate('/couisine/indian')} className='catItem'><CgBowl/>Indian</div>
        <div onClick={()=>navigate('/couisine/American')} className='catItem'><FaHamburger/>American</div>
        <div onClick={()=>navigate('/couisine/Thai')} className='catItem'><GiNoodles/>Thai</div>
        <div onClick={()=>navigate('/couisine/japanese')} className='catItem'><GiChopsticks/>Japanese</div>
    </div>
  )
}

export default Category