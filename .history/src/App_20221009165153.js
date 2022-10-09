import React from 'react'
import './scss/app.scss'
import Header from './components/Header'
import Categories from './components/Categories'
import Sort from './components/Sort'
import PizzaBlock from './components/PizzaBlock'
import Skeleton from './components/PizzaBlock/Skeleton'

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container"></div>
      </div>
    </div>
  )
}

export default App
