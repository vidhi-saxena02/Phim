import React from "react";

function Pagination({ postperPage, totalPages }) {
  const pageNumber = [];
  for (let i = 1; i <= Math.ceil(totalPages / postperPage); i++) {
    pageNumber.push(i);
  }

  return (
    <div>
      <nav>
        <ul>
          {pageNumber.map((num) => {
            <li key={num} className="text-white text-xl">
              <a href="!#" className="text-white text-xl">
                {num}
              </a>
            </li>;
          })}
        </ul>
      </nav>
    </div>
  );
}

export default Pagination;
