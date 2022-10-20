import React from 'react'
import qs from 'qs'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import { setCategoryId, setCurrentPage, setFilters } from '../redux/slices/filterSlice'

import Categories from '../components/Categories'
import Sort, { sortList } from '../components/Sort'
import PizzaBlock from '../components/PizzaBlock'
import Skeleton from '../components/PizzaBlock/Skeleton'
import Pagination from '../components/Pagination'
import axios from 'axios'
import { SearchContext } from '../App'

const Home = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const isSearch = React.useRef(false)
  const isMaunted = React.useRef(false)

  const { categoryId, sort, currentPage } = useSelector(state => state.filter)
  const { items } = useSelector(state => state.pizza.items)

  const { searchValue } = React.useContext(SearchContext)
  const [items, setItems] = React.useState([])
  const [isLoading, setIsLoading] = React.useState(true)

  const onChangeCategory = id => {
    dispatch(setCategoryId(id))
  }
  const onChangePage = page => {
    dispatch(setCurrentPage(page))
  }

  const fetchPizzas = async () => {
    setIsLoading(true)
    const order = sort.sortProperty.includes('-') ? 'asc' : 'desc'
    const sortBy = sort.sortProperty.replace('-', '')
    const category = categoryId > 0 ? `category=${categoryId}` : ''
    const search = searchValue ? `&search=${searchValue}` : ''

    // await-делает синхронным (работает только с async в РОДИТЕЛЬСКОЙ ФУНКЦИИ)
    try {
      //выполнится при успехе
      const res = await axios.get(
        `https://63427733ba4478d4783c44ef.mockapi.io/items?page=${currentPage}&limit=4&${category}&sortBy=${sortBy}&order=${order}${search}`
      )
      setItems(res.data)
    } catch (error) {
      //выполнится при ошибке
      console.log('ERROR', error)
      alert('ошибка при получении пицц')
    } finally {
      //выполнится в любом случае
      setIsLoading(false)
    }

    window.scrollTo(0, 0)
  }

  //***---React Pizza v2 — Сохраняем параметры фильтрации в URL---***
  //шаг 2
  //Если изменили параметры и был первый рендер
  React.useEffect(() => {
    if (isMaunted.current) {
      const queryString = qs.stringify({
        sortProperty: sort.sortProperty,
        categoryId,
        currentPage
      })
      navigate(`?${queryString}`)
    }
    isMaunted.current = true
  }, [categoryId, sort.sortProperty, currentPage])

  //***---React Pizza v2 — Сохраняем параметры фильтрации в URL---***
  //шаг 1
  //Если был первый рендер, то проверяем URL-параметры и сохроняем в редуксе
  React.useEffect(() => {
    if (window.location.search) {
      //параметры адресной строки преврощаем в объект -qs.parse
      const params = qs.parse(window.location.search.substring(1))
      const sort = sortList.find(obj => obj.sortProperty === params.sortProperty)
      dispatch(
        setFilters({
          ...params,
          sort
        })
      )

      isSearch.current = true
    }
  }, [])

  //Загрузка один раз
  //***---React Pizza v2 — Сохраняем параметры фильтрации в URL---***
  //шаг 3
  //Если был первый рендер, то запрашиваем пиццы
  React.useEffect(() => {
    window.scrollTo(0, 0) // при первой загрузке скролит вверх

    if (!isSearch.current) {
      fetchPizzas()
    }
    isSearch.current = false
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
