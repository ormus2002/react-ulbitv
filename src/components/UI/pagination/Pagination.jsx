import { usePagination } from "../../../hooks/usePagination";

const Pagination = ({totalPages, page, changePage}) => {
  const pagesArray = usePagination(totalPages);

  return (
    <div className="page__wrapper">
      {pagesArray.map(p => 
        <span
          key={p}
          className={page === p ? 'page page__current' : 'page'}
          onClick={() => changePage(p)}
        >
          {p}
        </span>
      )}
    </div>
  );
}

export default Pagination;