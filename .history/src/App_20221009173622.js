import React from 'react'
import './scss/app.scss'
import Header from './components/Header'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <Routes></Routes>
          <Home />
        </div>
      </div>
    </div>
  )
}

export default App