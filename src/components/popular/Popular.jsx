
import axios from 'axios'
import { useEffect, useRef } from 'react'
import { useState } from 'react'
import {Splide, SplideSlide} from '@splidejs/react-splide'
import './popular.css'
import '@splidejs/react-splide/css';
import { useNavigate } from 'react-router-dom'
import { useWindosSize } from '../../hooks/useWindosSize'
const Popular = () => {
  const ref = useRef(false)
  const navigate = useNavigate()
  const size = useWindosSize()
  
  const [popularRecepi, setPopularRecepi] = useState()

  useEffect(()=>{

    if(ref.current === false){
      const getPopularRecepie = async ()=>{
        const {data} = await axios.get(`https://api.spoonacular.com/recipes/random?apiKey=${import.meta.env.VITE_SPOONCULAR_API}&number=10`)
        setPopularRecepi(data)
       
    }
    getPopularRecepie()
    
    return ()=>{
      ref.current = true}
    }
  }, [])

  return (
    <div className='wrapper'>
      <h3 style={{marginBottom:'15px', marginTop:'50px'}}>Popular Picks</h3>
      <Splide options={{
        perPage:size.width > 720 ? 4 : 1,
        arrows:size.width > 720 ?false : true,
        pagination:false,
        drag:"free",
        gap:'40px'
      }}>
      {popularRecepi?.recipes?.map((item)=>{
        return (
     
          <SplideSlide key={item.id} onClick={()=>navigate(`/recipe/${item.id}`)}>
          <div className="card" >
              <p>{item.title}</p>
              <img src={item.image} alt ={item.title}/>
          </div>
          </SplideSlide>
        )
      })}
      </Splide>
    </div>
  )
}


export default Popular