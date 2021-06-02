import { Pagination } from "react-bootstrap";
import _ from "lodash";

const Paginate = (props) => {
  const { itemsCount, pageSize, onPageChange, currentPage } = props;

  const pagesCount = Math.ceil(itemsCount / pageSize);
  if (pagesCount === 1) return null;
  const pages = _.range(1, pagesCount + 1);

  return (
    <div className="table-responsive">
      <Pagination>
        {pages.map((page) => {
          return (
            <Pagination.Item
              key={page}
              onClick={() => onPageChange(page)}
              active={page === currentPage}
              activeLabel={false}
            >
              {page}
            </Pagination.Item>
          );
        })}
      </Pagination>
    </div>
  );
};

export default Paginate;
