import React, { Children } from 'react'
import Header from './components/Header'
import Home from './pages/Home'
import Cart from './pages/Cart'
import FullPizza from './pages/FullPizza.jsx'
import NotFound from './pages/NotFound'
import { Routes, Route } from 'react-router-dom'
import './scss/app.scss'

function Parent({ Children }) {
  return (
    <div>
      <h1>Заголовок</h1>
      {Children}
    </div>
  )
}

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/pizza/:id" element={<FullPizza />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  )
}
export default App