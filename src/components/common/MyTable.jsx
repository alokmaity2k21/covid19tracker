import { Table, Image } from "react-bootstrap";
import _ from "lodash";
import { useEffect, useState } from "react";
import Paginate from "../Paginate";
import { paginate } from "../../utils/paginate";
import SearchBox from "../common/SearchBox";

const MyTable = ({ data, columns, placeholder }) => {
  const [info, setInfo] = useState([]);
  const [itemsCount, setItemsCount] = useState(0);
  const [order, setOrder] = useState("asc");
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 12;

  useEffect(() => {
    const paginatedData = paginate(data, currentPage, pageSize);
    setInfo(paginatedData);
    setItemsCount(data.length);
  }, [data, pageSize, currentPage]);

  const handleSort = (value) => {
    setOrder(order === "asc" ? "desc" : "asc");
    const sortedData = _.orderBy(data, [value], [order]);
    setInfo(paginate(sortedData, currentPage, pageSize));
    setItemsCount(sortedData.length);
  };

  const handleSearch = (query) => {
    let key = "country";
    key = data[0][key] === undefined ? "state" : "country";
    const searchedData = data.filter((d) => {
      return d[key].toLowerCase().includes(query.toLowerCase());
    });
    setInfo(paginate(searchedData, currentPage, pageSize));
    setItemsCount(searchedData.length);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const getCellItem = (item, column) => {
    if (column.label === "Flag")
      return (
        <Image src={_.get(item, column.value)} height="30px" width="40px" />
      );
    return _.get(item, column.value);
  };

  return (
    <>
      <SearchBox placeholder={placeholder} handleSearch={handleSearch} />
      {info.length === 0 ? (
        <h2 className="text-center text-primary fw-bold mt-2">
          No Record Found
        </h2>
      ) : (
        <>
          <Table responsive>
            <thead>
              <tr>
                {columns.map((column) => {
                  return (
                    <th
                      key={column.value}
                      onClick={() => handleSort(column.value)}
                    >
                      {column.label}
                    </th>
                  );
                })}
              </tr>
            </thead>
            <tbody>
              {info.map((item) => {
                return (
                  <tr key={item.country || item.state}>
                    {columns.map((column) => {
                      return (
                        <td
                          className={"fw-bold text-" + column.color}
                          key={column.value}
                        >
                          {getCellItem(item, column)}
                        </td>
                      );
                    })}
                  </tr>
                );
              })}
            </tbody>
          </Table>
          <Paginate
            itemsCount={itemsCount}
            pageSize={pageSize}
            onPageChange={handlePageChange}
            currentPage={currentPage}
          />
        </>
      )}
    </>
  );
};

export default MyTable;
