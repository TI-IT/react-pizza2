import React from 'react'

function Categories() {
  const [activeIndex, setActivIndex] = React.useState(1)

  const onClickCategory = () => {
    setActivIndex(3)
  }
  return (
    <div className="categories">
      <ul>
        <li onClick={onClickCategory} className={activeIndex === 0 ? 'active' : ''}>
          Все
        </li>
        <li onClick={onClickCategory} className={activeIndex === 1 ? 'active' : ''}>
          Мясные
        </li>
        <li onClick={onClickCategory} className={activeIndex === 2 ? 'active' : ''}>
          Вегетарианская
        </li>
        <li onClick={onClickCategory} className={activeIndex === 3 ? 'active' : ''}>
          Гриль
        </li>
        <li onClick={onClickCategory} className={activeIndex === 4 ? 'active' : ''}>
          Острые
        </li>
        <li onClick={onClickCategory} className={activeIndex === 5 ? 'active' : ''}>
          Закрытые
        </li>
      </ul>
    </div>
  )
}
export default Categories
