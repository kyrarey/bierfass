import React from 'react';
import './CustomPagination.css';
const CustomPagination = ({ setPage, page }) => {
  let arrPage = [1, 2, 3, 4, 5];

  const handlePageChange = (page) => {
    setPage(page);
    window.scroll(0, 2800);
  };

  return (
    <div>
      <div className="pagination">
        {arrPage.map((n) => {
          return (
            <span
              onClick={() => {
                handlePageChange(n);
              }}
              className={page === n ? 'active' : ''}
            >
              {n}
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default CustomPagination;
