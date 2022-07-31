import React from 'react'
import './cuisine.css'
import {motion} from 'framer-motion'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import {useState, useEffect} from 'react'


const Cousine = () => {
    const params = useParams()
    const navigate = useNavigate()
    const [cuisines, setCuisines] = useState([])
    
    const getCouisine = async () => {
        const {data} = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${import.meta.env.VITE_SPOONCULAR_API}&cuisine=${params.type}`)
        setCuisines(data)
        console.log(cuisines)
    }
    useEffect(()=>{
        getCouisine()
    }, [params.type])
  return (
   
   
    <motion.div className='grid'
    animate={{opacity: 1}}
     initial={{opacity: 0}}
     exit={{opacity: 0}}
     transition={{duration: 0.6}}
    >   
        {cuisines?.results?.map((item)=>{
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

export default Cousine 