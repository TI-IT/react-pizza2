import React from 'react'
import { useState } from 'react'

function PizzaBlock({ title, price }) {
  const [pizzaCount, setpizzaCount] = useState(0)
  const clickSetPizza = () => {
    setpizzaCount(pizzaCount + 1)
  }

  return (
    <div className="pizza-block">
      <button onClick={clickSetPizza} className="button button--outline button--add">
        <i>{pizzaCount}</i>
      </button>
    </div>
  )
}

export default PizzaBlock
