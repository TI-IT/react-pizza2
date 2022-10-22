import React from 'react'
import Header from './components/Header'
import Home from './pages/Home'
import Cart from './pages/Cart'
import FullPizza from './pages/FullPizza.jsx'
import NotFound from './pages/NotFound'
import { Routes, Route, Outlet } from 'react-router-dom'
import './scss/app.scss'

function Parent({ children }) {
  return (
    <div>
      <h1>Заголовок</h1>
      <Outlet />
      <h2>656565656</h2>
    </div>
  )
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/pizza/:id" element={<FullPizza />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
export default App
