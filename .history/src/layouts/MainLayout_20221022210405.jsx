import React from 'react'
import Header from '../components/Header'

const MainLayout = ({ chidren }) => {
  return (
    <div className="wrapper">
      <Header />
      <div className="content"></div>
    </div>
  )
}

export default MainLayout
