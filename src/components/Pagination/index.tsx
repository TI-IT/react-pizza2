import React from 'react'
import ReactPaginate from 'react-paginate'
import styles from './Pagination.module.scss'

type PaginattionProps = {
  currentPage: number
    onChangePage: (page: number) => void;
}
const Pagination: React.FC<PaginattionProps> = ({ onChangePage, currentPage }) => {
  return (
    <div>
      <ReactPaginate
        className={styles.root}
        breakLabel="..."
        nextLabel=">"
        previousLabel="<"
          onPageChange={event => onChangePage(event.selected + 1)}
        pageRangeDisplayed={4}
        pageCount={3}
        forcePage={currentPage - 1}
      />
    </div>
  )
}

export default Pagination
