import React from "react";

const Pagination = () => {
  return (
    <>
      <nav aria-label="Page navigation example">
        <ul className="pagination p-3 justify-content-end">
          <li className="mx-2 page-item disabled">
            <a
              className="page-link bg-primary text-light"
              href="#"
              tabIndex={-1}
              aria-disabled="true"
            >
              Previous
            </a>
          </li>
          <li className="mx-2 page-item">
            <a className="page-link" href="#">
              1
            </a>
          </li>
          <li className=" mx-2 page-item">
            <a className="page-link" href="#">
              2
            </a>
          </li>
          <li className="mx-2 page-item">
            <a className="page-link" href="#">
              3
            </a>
          </li>
          <li className=" mx-2 page-item">
            <a className="page-link bg-primary text-light" href="#">
              Next
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Pagination;
