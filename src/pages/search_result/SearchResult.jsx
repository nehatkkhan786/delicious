import axios from 'axios'
import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import {useState, useEffect} from 'react'
import './searchResult.css'
import {motion} from 'framer-motion'

const SearchResult = () => {
    const params = useParams()
    const [result, setResult] = useState([])
    const navigate = useNavigate()

    const searchrecipi = async () =>{
        const {data} = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${import.meta.env.VITE_SPOONCULAR_API}&query=${params.query}`)
        setResult(data)
    }

    useEffect(()=>{
        searchrecipi()
    }, [])
  return (
  
    <motion.div className='grid-container'
    
    animate={{opacity: 1}}
     initial={{opacity: 0}}
     exit={{opacity: 0}}
     transition={{duration: 0.6}}>
    {result?.results?.map((item)=>{
          return (
           
            <div className='img-card' key={item.id} onClick={()=>navigate(`/recipe/${item.id}`)}>
              <img src={item.image} alt={item.title}/>
            <h4 style={{textAlign:'center'}}>{item.title}</h4>
            </div>
          )
        })}
    </motion.div>
   
  )
}

export default SearchResult