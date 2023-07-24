
import Pagination from 'react-js-pagination';

export const PaginationComponent = ({ totalPages, currentPage, setCurrentPage }) => {

    const itemsPerPage = 20;

    const handlePageChange = pageNumber => setCurrentPage(pageNumber)

    return (
        <div className='d-flex justify-content-center mt-5 mb-2'>
            <Pagination
                activePage={currentPage}
                itemsCountPerPage={itemsPerPage}
                totalItemsCount={totalPages}
                pageRangeDisplayed={5}
                onChange={handlePageChange}
                itemClass="page-item"
                linkClass="page-link"
            />
        </div>

    )
}