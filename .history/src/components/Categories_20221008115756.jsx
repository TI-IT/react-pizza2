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
        {categories.map((value, i) => (
          <li
            onClick={() => onClickCategory(i)}
            className={activeIndex === i ? 'active' : ''}
            key={i}>
            {value}
          </li>
        ))}
      </ul>
    </div>
  )
}
export default Categories
