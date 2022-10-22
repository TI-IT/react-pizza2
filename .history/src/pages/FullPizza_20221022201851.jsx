import React from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

const FullPizza = () => {
  const [pizza, setPizza] = React.useState()
  const { id } = useParams()

  React.useEffect(() => {
    async function fetchPizza() {
      try {
        const { data } = await axios.get('https://63427733ba4478d4783c44ef.mockapi.io/items/' + id)
        setPizza(data)
      } catch (error) {
        alert('Ошибка при получении пицца')
      }
    }
    fetchPizza()
  }, [])

  console.log(pizza)
  return (
    <div className="container">
      <img src="" />
      <h2>{pizza.title}</h2>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti nulla nihil, quasi
        ducimus provident sapiente minima laudantium mollitia tempore inventore, architecto eius.
        Doloribus amet incidunt eos provident quaerat deserunt laboriosam?
      </p>
      <h4>{pizza.price} р.</h4>
    </div>
  )
}

export default FullPizza
