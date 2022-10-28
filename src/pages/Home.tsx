import React from 'react'
import qs from 'qs'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import {
  FilterSliceState,
  selectFilter,
  setCategoryId,
  setCurrentPage,
  setFilters
} from '../redux/slices/filterSlice'
import Categories from '../components/Categories'
import Sort, { sortList } from '../components/Sort'
import PizzaBlock from '../components/PizzaBlock'
import Skeleton from '../components/PizzaBlock/Skeleton'
import Pagination from '../components/Pagination'
import { fetchPizzas, SearchPizzaParams, selectPizzaData } from '../redux/slices/pizzaSlice'
import { useAppDispatch } from '../redux/store'

const Home: React.FC = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const isSearch = React.useRef(false)
  const isMaunted = React.useRef(false)

  const { items, status } = useSelector(selectPizzaData)
  const { categoryId, sort, currentPage, searchValue } = useSelector(selectFilter)

  const onChangeCategory = (idx: number) => {
    dispatch(setCategoryId(idx))
  }

  const onChangePage = (page: number) => {
    dispatch(setCurrentPage(page))
  }

  const getPizzas = async () => {
    const sortBy = sort.sortProperty.replace('-', '')
    const order = sort.sortProperty.includes('-') ? 'asc' : 'desc'
    const category = categoryId > 0 ? `category=${categoryId}` : ''
    const search = searchValue ? `&search=${searchValue}` : ''

    dispatch(
      fetchPizzas({
        order,
        sortBy,
        category,
        search,
        currentPage: String(currentPage)
      })
    )

    window.scrollTo(0, 0)
  }

  //***---React Pizza v2 — Сохраняем параметры фильтрации в URL---***
  //шаг 2
  //Если изменили параметры и был первый рендер
  // React.useEffect(() => {
  //   if (isMaunted.current) {
  //     const queryString = qs.stringify({
  //       sortProperty: sort.sortProperty,
  //       categoryId,
  //       currentPage
  //     })
  //     navigate(`?${queryString}`)
  //   }
  //   if (window.location.search) {
  //     dispatch(fetchPizzas({} as SearchPizzaParams))
  //   }
  //   isMaunted.current = true
  // }, [categoryId, sort.sortProperty, currentPage])

  //***---React Pizza v2 — Сохраняем параметры фильтрации в URL---***
  //шаг 1
  //Если был первый рендер, то проверяем URL-параметры и сохроняем в редуксе
  // React.useEffect(() => {
  //   if (window.location.search) {
  //     //параметры адресной строки преврощаем в объект -qs.parse
  //     const params = qs.parse(window.location.search.substring(1)) as unknown as SearchPizzaParams
  //     const sort = sortList.find(obj => obj.sortProperty === params.sortBy)
  //     dispatch(setFilters({
  //       searchValue: params.search,
  //       categoryId: Number(params.category),
  //       currentPage: Number(params.currentPage),
  //       sort: sort || sortList[0]
  //     }))
  //   }
  //   isSearch.current = true
  // }, [])

  //Загрузка один раз
  //***---React Pizza v2 — Сохраняем параметры фильтрации в URL---***
  //шаг 3
  //Если был первый рендер, то запрашиваем пиццы
  React.useEffect(() => {
    getPizzas()
  }, [categoryId, sort.sortProperty, searchValue, currentPage])

  const pizzas = items.map((obj: any) => (
   
      <PizzaBlock {...obj} />
    
  ))
  const sceletons = [...new Array(6)].map((_, index) => <Skeleton key={index} />)

  return (
    <div className="container">
      <div className="content__top">
        <Categories value={categoryId} onChangeCategory={onChangeCategory} />
        <Sort />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      {status === 'error' ? (
        <div className="content__error-info">
          <h2>Произошла Ошибка</h2>
          <p>Не удалось получить пиццы, попробуйте повторить попытку позже</p>
        </div>
      ) : (
        <div className="content__items">{status === 'loading' ? sceletons : pizzas}</div>
      )}
      <Pagination currentPage={currentPage} onChangePage={onChangePage} />
    </div>
  )
}

export default Home
