import React from 'react'
import ReactPaginate from 'react-paginate'
import styles from './Pagination.module.scss'

const Pagination = () => {
  return (
    <div>
      <ReactPaginate
        className={styles.root}
        breakLabel="..."
        nextLabel=">"
        previousLabel="<"
        onPageChange={e => console.log(e)}
        pageRangeDisplayed={5}
        pageCount={3}
        renderOnZeroPageCount={null}
      />
    </div>
  )
}

export default Pagination
