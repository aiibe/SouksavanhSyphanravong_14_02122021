import { generatePageNumbers } from "../helper";
import { PropType } from "../types/Paginate";

function Paginate({ data, limit, current, setPage }: PropType) {
  if (!data.length) return null;

  const pageCount = Math.ceil(data.length / limit);
  const pageNumbers = generatePageNumbers(current, pageCount);

  return (
    <div>
      <button
        disabled={current === 1}
        className="react-datatable__paginate__button"
      >
        Previous
      </button>
      {pageNumbers.map((pageNum) => {
        return pageNum === 0 ? (
          <span key={pageNum} style={{ marginLeft: 5 }}>
            ...
          </span>
        ) : (
          <button
            onClick={() => setPage(pageNum)}
            key={pageNum}
            className={`react-datatable__paginate__button ${
              current === pageNum && `react-datatable__paginate__button--active`
            }`}
          >
            {pageNum}
          </button>
        );
      })}
      <button className="react-datatable__paginate__button">Next</button>
    </div>
  );
}

Paginate.defaultProps = {
  current: 1,
};

export default Paginate;
