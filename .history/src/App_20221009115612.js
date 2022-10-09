import React from 'react'
import './scss/app.scss'
import Header from './components/Header'
import Categories from './components/Categories'
import Sort from './components/Sort'
import PizzaBlock from './components/PizzaBlock'
import pizzas from './assets/pizza.json'

function App() {
  const [items, setItems] = React.useState([])

  const [visibleList, setvisibleList] = React.useState(true)

  const toggleVisibleList = () => {
    setvisibleList(visible => !visible)
  }

  return (
    <div className="wrapper">
      {visibleList && <h2>Все пиццы</h2>}
      <button onClick={toggleVisibleList}>скрыть / показать</button>

      <Header />
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories />
            <Sort />
          </div>
          {visibleList && <h2 className="content__title">Все пиццы</h2>}
          <button onClick={toggleVisibleList}>скрыть / показать</button>

          <div className="content__items">
            {items.map(obj => (
              <PizzaBlock key={obj.id} {...obj} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
