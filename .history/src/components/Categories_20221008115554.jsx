import React from 'react'

function Categories() {
  const [activeIndex, setActivIndex] = React.useState(2)

  const categories = ['все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']

  const onClickCategory = index => {
    setActivIndex(index)
  }
  return (
    <div className="categories">
      <ul>
        {categories.map(value, index) => {
          <li
            onClick={() => onClickCategory(index)}
            className={activeIndex === index ? 'active' : ''}
            key={index}>
            {value}
          </li>
})}
      </ul>
    </div>
  )
}
export default Categories
