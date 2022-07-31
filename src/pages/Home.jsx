 import React from 'react'
 import Vegan from '../components/vegan/Vegan'
 import Popular from '../components/popular/Popular'
import Category from '../components/category/Category'
import {motion} from 'framer-motion'
 
 const Home = () => {
   return (
     <motion.div 
     animate={{opacity: 1}}
     initial={{opacity: 0}}
     exit={{opacity: 0}}
     transition={{duration: 0.6}}
     >
       <Vegan/>
       <Popular/>
     </motion.div>
   )
 }
 
 export default Home