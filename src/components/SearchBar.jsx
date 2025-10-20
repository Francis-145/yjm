import React from 'react';

const SearchBar = ({ searchQuery, setSearchQuery }) => {
  return (
    <div className="mb-6">
      <input
        type="text"
        placeholder="Search by song number or title..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="w-full px-4 py-3 text-lg rounded-xl border-2 border-purple-300 focus:border-purple-500 focus:outline-none transition-colors shadow-sm"
      />
    </div>
  );
};

export default SearchBar;