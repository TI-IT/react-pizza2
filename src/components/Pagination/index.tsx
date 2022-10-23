import React from 'react'
import ReactPaginate from 'react-paginate'
import styles from './Pagination.module.scss'

type PaginattionProps = {
  onChangePage: any
  currentPage: number
}
const Pagination: React.FC<PaginattionProps> = ({ onChangePage, currentPage }) => {
  return (
    <div>
      <ReactPaginate
        className={styles.root}
        breakLabel="..."
        nextLabel=">"
        previousLabel="<"
        onPageChange={e => onChangePage(e.selected + 1)}
        pageRangeDisplayed={4}
        pageCount={3}
        forcePage={currentPage - 1}
      />
    </div>
  )
}

export default Pagination
