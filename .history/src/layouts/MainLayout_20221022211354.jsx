import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header'

const MainLayout = ({ children }) => {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <h1>GGGGG</h1>
        <Outlet />
      </div>
    </div>
  )
}

export default MainLayout
