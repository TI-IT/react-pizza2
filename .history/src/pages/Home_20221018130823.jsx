import React from 'react'
import qs from 'qs'
import { useSelector, useDispatch } from 'react-redux'

import { setCategoryId, setCurrentPage } from '../redux/slices/filterSlice'

import Categories from '../components/Categories'
import Sort from '../components/Sort'
import PizzaBlock from '../components/PizzaBlock'
import Skeleton from '../components/PizzaBlock/Skeleton'
import Pagination from '../components/Pagination'
import axios from 'axios'
import { SearchContext } from '../App'

const Home = () => {
  const dispatch = useDispatch()
  const { categoryId, sort, currentPage } = useSelector(state => state.filter)

  const { searchValue } = React.useContext(SearchContext)
  const [items, setItems] = React.useState([])
  const [isLoading, setIsLoading] = React.useState(true)
  // const [currentPage, setCurrentPage] = React.useState(1)

  const onChangeCategory = id => {
    dispatch(setCategoryId(id))
  }
  const onChangePage = number => {
    dispatch(setCurrentPage(number))
  }

  //Загрузка один раз
  React.useEffect(() => {
    setIsLoading(true)
    const order = sort.sortProperty.includes('-') ? 'asc' : 'desc'
    const sortBy = sort.sortProperty.replace('-', '')
    const category = categoryId > 0 ? `category=${categoryId}` : ''
    const search = searchValue ? `&search=${searchValue}` : ''

    axios
      .get(
        `https://63427733ba4478d4783c44ef.mockapi.io/items?page=${currentPage}&limit=4&${category}&sortBy=${sortBy}&order=${order}${search}`
      )
      .then(res => {
        setItems(res.data)
        setIsLoading(false)
      })

    window.scrollTo(0, 0) // при первой загрузке скролит вверх
  }, [categoryId, sort.sortProperty, searchValue, currentPage])

  React.useEffect(() => {
    const queryString = qs.stringify({
      sortProperty: sort.sortProperty
    })
  }, [categoryId, sort.sortProperty, searchValue, currentPage])

  const pizzas = items.map(obj => <PizzaBlock key={obj.id} {...obj} />)

  const sceletons = [...new Array(6)].map((_, index) => <Skeleton key={index} />)

  return (
    <div className="container">
      <div className="content__top">
        <Categories value={categoryId} onChangeCategory={id => onChangeCategory(id)} />
        <Sort />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">{isLoading ? sceletons : pizzas}</div>
      <Pagination currentPage={currentPage} onChangePage={onChangePage} />
    </div>
  )
}

export default Home
