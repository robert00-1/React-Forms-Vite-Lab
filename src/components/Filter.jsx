import React from "react";

// Filter component: used to filter shopping items by search text and category
function Filter({ search, onSearchChange, onCategoryChange }) {
  return (
    <div className="Filter">
      {/* Controlled input for searching items by name */}
      {/* The value is controlled by the `search` prop from parent */}
      {/* onChange calls `onSearchChange` passed from parent to update state */}
      <input
        type="text"
        name="search"
        placeholder="Search..."
        value={search}
        onChange={(e) => onSearchChange(e.target.value)}
      />

      {/* Dropdown select for filtering items by category */}
      {/* onChange calls `onCategoryChange` passed from parent to update state */}
      <select name="filter" onChange={onCategoryChange}>
        <option value="All">Filter by category</option>
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Dessert">Dessert</option>
      </select>
    </div>
  );
}

export default Filter;
