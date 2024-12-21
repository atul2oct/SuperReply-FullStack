import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => (
  <div className="flex justify-center items-center my-4">
    {[...Array(totalPages)].map((_, index) => (
      <button
        key={index}
        className={`px-4 py-2 mx-1 rounded ${
          currentPage === index + 1 ? 'bg-blue-500 text-white' : 'bg-gray-200'
        }`}
        onClick={() => onPageChange(index + 1)}
      >
        {index + 1}
      </button>
    ))}
  </div>
);

export default Pagination;
