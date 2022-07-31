import React from 'react'
import './search.css';
import { useEffect, useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom';

const Search = () => {
    const [searchText, setSearchText] = useState('')
    const navigate = useNavigate()
    const submitHandler = (e)=>{
        e.preventDefault()
        navigate(`/search/${searchText}`)
    }
  return (
    <div className='searchForm'>
        <form onSubmit={submitHandler}>
        <FaSearch className='searchIcon'/>
        <input type='text' value={searchText} onChange={(e)=>setSearchText(e.target.value)} placeholder='Search Recipe'/>
        </form>
    </div>
  )
}

export default Search 