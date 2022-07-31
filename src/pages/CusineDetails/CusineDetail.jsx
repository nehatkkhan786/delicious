import axios from 'axios'
import {useEffect, useState} from 'react'
import {useNavigate, useParams} from 'react-router-dom'
import './CusineDetails.css'



const CusineDetail = () => {
    const params = useParams()
    const [recipe, setRecipe] = useState({})
    const [active, setActive] = useState('instructions')
    const navigate = useNavigate()

    const getRecipeDetails = async ()=>{
        const {data} = await axios.get(`https://api.spoonacular.com/recipes/${params.id}/information?apiKey=${import.meta.env.VITE_SPOONCULAR_API}`)
        setRecipe(data)
    }
    useEffect(()=>{
        getRecipeDetails()
    }, [params.id])


  return (
   
    <div className="wrappers">
        <div className='productImg'>
            <h2 style={{marginBottom:'20px'}}>{recipe.title}</h2>
            <img src={recipe.image} alt={recipe.title}/>
        </div>
        <div className='productDetail'>
            <button onClick={()=>setActive('instructions')} className={active === 'instructions' ? 'ibtn btn-active' : 'ibtn'}>Instructions</button>
            <button onClick={()=>setActive('ingredients')} className={active === 'ingredients' ? 'ibtn btn-active' : 'ibtn'}>Ingredients</button>

            {active === 'instructions' ? (
                <>
                <h4 dangerouslySetInnerHTML={{__html: recipe.summary}}></h4>
                <h4 dangerouslySetInnerHTML={{__html: recipe.instructions}}></h4>
                </>
            ) : (
                <>
                {recipe?.extendedIngredients?.map((ingredient)=>{
                    return (
                        <li key={ingredient.id}>{ingredient.original}</li>
                    )
                })}
                </>
            )}
            
        </div>
    </div>
    
  )
}

export default CusineDetail