import React from 'react';

function SearchBox({ searchQuery, setSearchQuery }) {
  return (
    <input
      type="text"
      placeholder="Search here..."
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
      className="search-input"
    />
  );
}

export default SearchBox;
