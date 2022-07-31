import React from 'react'
import Home from './Home'
import {Routes, Route, useLocation} from 'react-router-dom'
import Cousine from './cuisine/Cousine'
import SearchResult from './search_result/SearchResult'
import CusineDetail from './CusineDetails/CusineDetail'
import { AnimatePresence } from 'framer-motion'

const Pages = () => {
  const location = useLocation()
  return (
    <AnimatePresence exitBeforeEnter>
    <Routes  location={location} key={location.pathname}>
      <Route path='/' exact element={<Home/>}/>
      <Route path='/couisine/:type' element={<Cousine/>}/>
      <Route path='/search/:query/' element={<SearchResult/>}/>
      <Route path='/recipe/:id' element={<CusineDetail/>}/>
    </Routes>
    </AnimatePresence>
  )
}

export default Pages