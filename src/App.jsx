import React from 'react'
import Header from './components/Header'
import Showcase from './components/Showcase'
import Home from './pages/Home'
import Showcase1 from './components/Showcase1'
import Footer from './components/Footer'
import Favorites from './pages/Favorites'

import { FavoritesProvider } from './context/FavoritesContext'
import FavoritesPage from './pages/FavoritesPage'

const App = () => {
  return (
    <FavoritesProvider>
      <Header/>
      <Showcase/>
      <Home />
      <Favorites />  
      <FavoritesPage/>
      <Showcase1/>
      <Footer/>
    </FavoritesProvider>
  )
}

export default App
