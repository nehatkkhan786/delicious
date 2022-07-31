

import Category from './components/category/Category'
import Navbar from './components/navbar/Navbar'
import Search from './components/search/Search'
import Home from './pages/Home'
import Pages from './pages/Pages'
const App = () => {
  return (
    <div>
      <Navbar/>
      <Search/>
      <Category/>
      <Pages/>
    </div>
  )
}

export default App