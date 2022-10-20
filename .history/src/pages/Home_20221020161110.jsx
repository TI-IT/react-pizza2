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
import { SearchContext } from '../App'
import { fetchPizzas } from '../redux/slices/pizzaSlice'

const Home = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const isSearch = React.useRef(false)
  const isMaunted = React.useRef(false)

  const { items, status } = useSelector(state => state.pizza)
  const { categoryId, sort, currentPage } = useSelector(state => state.filter)
  const { searchValue } = React.useContext(SearchContext)

  const onChangeCategory = id => {
    dispatch(setCategoryId(id))
  }
  const onChangePage = number => {
    dispatch(setCurrentPage(number))
  }

  const getPizzas = async () => {
    const order = sort.sortProperty.includes('-') ? 'asc' : 'desc'
    const sortBy = sort.sortProperty.replace('-', '')
    const category = categoryId > 0 ? `category=${categoryId}` : ''
    const search = searchValue ? `&search=${searchValue}` : ''

    dispatch(
      fetchPizzas({
        order,
        sortBy,
        category,
        search,
        currentPage
      })
    )

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
    getPizzas()
  }, [])

  const pizzas = items.map(obj => <PizzaBlock key={obj.id} {...obj} />)
  const sceletons = [...new Array(6)].map((_, index) => <Skeleton key={index} />)

  return (
    <div className="container">
      <div className="content__top">
        <Categories value={categoryId} onChangeCategory={id => onChangeCategory(id)} />
        <Sort />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">{status === 'loading' ? sceletons : pizzas}</div>
      <Pagination currentPage={currentPage} onChangePage={onChangePage} />
    </div>
  )
}

export default Home
