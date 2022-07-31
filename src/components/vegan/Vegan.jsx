import React from 'react'
import { useEffect, useState, useRef } from 'react'
import { SplideSlide, Splide } from '@splidejs/react-splide'
import axios from 'axios'
import './vegan.css'
import { useNavigate } from 'react-router-dom'
import { useWindosSize } from '../../hooks/useWindosSize'

const Vegan = () => {
  const ref = useRef(false)
  const [veganrecipis, setVeganRecipis] = useState([])
  const navigate = useNavigate()
  const size = useWindosSize()

  useEffect(()=>{
    if(ref.current === false){
      const getVeganRecipi = async ()=>{
        const {data} = await axios.get(`https://api.spoonacular.com/recipes/random?apiKey=${import.meta.env.VITE_SPOONCULAR_API}&number=10&tags=vegetarian`)
        setVeganRecipis(data)
      }
      getVeganRecipi()
      return ()=>{
        ref.current = true
      }
    } 
  }, [] )

  return (
    <div className='wrapper'>
      <h3 style={{marginBottom:'15px'}}>Vegeterian</h3>
      <Splide options={{
        perPage: size.width > 720 ? 3 : 1,
        arrows:size.width > 720 ?false : true,
        pagination:false,
        drag:"free",
        gap:'40px'

      }}>
        {veganrecipis?.recipes?.map((item)=>{
          return(
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

export default Vegan