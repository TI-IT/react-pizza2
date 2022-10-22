import React from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

const FullPizza = () => {
  const { id } = useParams()

  React.useEffect(() => {
    const [pizza, setPizza] = React.useState()
    async function fetchPizza() {
      const { data } = await axios.get('https://63427733ba4478d4783c44ef.mockapi.io/items/' + id)
    }
  }, [])

  return (
    <div className="container">
      <img src="" />
      <h2>{id}</h2>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti nulla nihil, quasi
        ducimus provident sapiente minima laudantium mollitia tempore inventore, architecto eius.
        Doloribus amet incidunt eos provident quaerat deserunt laboriosam?
      </p>
      <h4>250 h.</h4>
    </div>
  )
}

export default FullPizza
