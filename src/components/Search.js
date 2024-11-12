import React from 'react';

const Search = ({ searchTerm, setSearchTerm }) => {
  return (
    <div>
      <h2>Search for a Plant</h2>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search by plant name"
      />
    </div>
  );
};

export default Search;
