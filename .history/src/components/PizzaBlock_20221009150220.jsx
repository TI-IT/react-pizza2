import React from 'react'

function PizzaBlock({ title, price, imageUrl, types, sizes }) {
  const [activeType, setActivType] = React.useState(0)
  const [activeSize, setActivSize] = React.useState(0)
  const typeNames = ['тонкое', 'традиционное']

  return <div className="pizza-block"></div>
}

export default PizzaBlock
