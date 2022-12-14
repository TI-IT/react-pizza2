import React from 'react'

type CategoriesProps = {
  value: number
  onChangeCategory: (idx: number) => void;
}

const categories = ['все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']

//Типизация пропсов
const Categories: React.FC<CategoriesProps> = ({ value, onChangeCategory }) => {

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
