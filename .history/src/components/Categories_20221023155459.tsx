import React from 'react'

type CategoriesProps = {
  value: number
  onChangeCategory: any
}

const Categories: React.FC = ({ value, onChangeCategory }) => {
  const categories = ['все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']

  return (
    <div className="categories">
      <ul>
        {categories.map((categoryName, i) => (
          <li key={i} onClick={() => onChangeCategory(i)} className={value === i ? 'active' : ''}>
            {categoryName}
          </li>
        ))}
      </ul>
    </div>
  )
}
export default Categories
