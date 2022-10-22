import React from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

const FullPizza = () => {
  const { id } = useParams()
  const [pizza, setPizza] = React.useState()

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

  return (
    <div className="container">
      <img src="" />
      <h2>{pizza.id}</h2>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti nulla nihil, quasi
        ducimus provident sapiente minima laudantium mollitia tempore inventore, architecto eius.
        Doloribus amet incidunt eos provident quaerat deserunt laboriosam?
      </p>
      <h4>{pizza.price} h.</h4>
    </div>
  )
}

export default FullPizza
