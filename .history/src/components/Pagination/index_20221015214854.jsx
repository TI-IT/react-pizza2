import React from 'react'

const Pagination = () => {
  return <div><ReactPaginate
  className={styles.}
    breakLabel="..."
    nextLabel=">"
    previousLabel="<"
    onPageChange={e => console.log(e)}
    pageRangeDisplayed={5}
    pageCount={3}
    renderOnZeroPageCount={null}
  /></div>
}

export default Pagination
