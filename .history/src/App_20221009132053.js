import React from 'react'
import './scss/app.scss'
import Header from './components/Header'
import Categories from './components/Categories'
import Sort from './components/Sort'
import PizzaBlock from './components/PizzaBlock'
import pizzas from './assets/pizza.json'

function App() {
  const [items, setItems] = React.useState([])

  const [visableH1, setVisableH1] = React.useState(true)

  const onClickVisable = () => {
    setVisableH1(tt => !tt)
  }
  //componentDidUpdate(), componentDidMount(), componentWillUnmount
  React.useEffect(() => {
    console.log('Обновление чего либо')
  })

  const link = 'https://63427733ba4478d4783c44ef.mockapi.io/items'
  // fetch(link)
  //   .then(res => {
  //     return res.json()
  //   })
  //   .then(json => {
  //     setItems(json)
  //   })

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories />
            <Sort />
          </div>
          <h2 className="content__title">Все пиццы</h2>
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
