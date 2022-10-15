import React from 'react'

import Categories from '../components/Categories'
import Sort from '../components/Sort'
import PizzaBlock from '../components/PizzaBlock'
import Skeleton from '../components/PizzaBlock/Skeleton'
import ReactPaginate from 'react-paginate'

const Home = ({ searchValue }) => {
  const [items, setItems] = React.useState([])
  const [isLoading, setIsLoading] = React.useState(true)
  const [categoryId, setcategoryId] = React.useState(0)
  const [sortType, setSortType] = React.useState({
    name: 'популярности',
    sortProperty: 'rating'
  })

  //Загрузка один раз
  React.useEffect(() => {
    setIsLoading(true)
    const order = sortType.sortProperty.includes('-') ? 'asc' : 'desc'
    const sortBy = sortType.sortProperty.replace('-', '')
    const category = categoryId > 0 ? `category=${categoryId}` : ''
    const search = searchValue ? `&search=${searchValue}` : ''

    fetch(
      `https://63427733ba4478d4783c44ef.mockapi.io/items?${category}&sortBy=${sortBy}&order=${order}${search}`
    )
      .then(res => {
        return res.json()
      })
      .then(arr => {
        setItems(arr)
        setIsLoading(false)
      })
    window.scrollTo(0, 0) // при первой загрузке скролит вверх
  }, [categoryId, sortType, searchValue])

  const pizzas = items.map(obj => <PizzaBlock key={obj.id} {...obj} />)

  const sceletons = [...new Array(6)].map((_, index) => <Skeleton key={index} />)

  return (
    <div className="container">
      <div className="content__top">
        <Categories value={categoryId} onChangeCategory={id => setcategoryId(id)} />
        <Sort value={sortType} onChangeSort={id => setSortType(id)} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">{isLoading ? sceletons : pizzas}</div>
      <ReactPaginate
        breakLabel="..."
        nextLabel=">"
        onPageChange={e => console.log(e)}
        pageRangeDisplayed={5}
        pageCount={3}
        previousLabel="<"
        renderOnZeroPageCount={null}
      />
    </div>
  )
}

export default Home
